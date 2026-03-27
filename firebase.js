'use strict';
// ─────────────────────────────────────────────────────────
//  FIREBASE.JS  –  Auth (Google) + Firestore sync
// ─────────────────────────────────────────────────────────
//
//  SETUP:  Replace the firebaseConfig below with the one
//          from your Firebase project console.
// ─────────────────────────────────────────────────────────

const firebaseConfig = {
  apiKey:            "REPLACE_WITH_YOUR_API_KEY",
  authDomain:        "REPLACE_WITH_YOUR_AUTH_DOMAIN",
  projectId:         "REPLACE_WITH_YOUR_PROJECT_ID",
  storageBucket:     "REPLACE_WITH_YOUR_STORAGE_BUCKET",
  messagingSenderId: "REPLACE_WITH_YOUR_MESSAGING_SENDER_ID",
  appId:             "REPLACE_WITH_YOUR_APP_ID",
};

// ── Init ─────────────────────────────────────────────────

firebase.initializeApp(firebaseConfig);
const fbAuth = firebase.auth();
const fbDb   = firebase.firestore();

let fbCurrentUser = null; // { uid, displayName, email, photoURL }

// ── Auth ──────────────────────────────────────────────────

function firebaseSignIn() {
  const provider = new firebase.auth.GoogleAuthProvider();
  return fbAuth.signInWithPopup(provider);
}

function firebaseSignOut() {
  return fbAuth.signOut();
}

function firebaseCurrentUser() {
  return fbCurrentUser;
}

// ── Firestore ─────────────────────────────────────────────

async function firebaseSaveProgress(data) {
  if (!fbCurrentUser) return;
  try {
    await fbDb.collection('users').doc(fbCurrentUser.uid).set({
      progress: data,
      updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
  } catch (e) {
    console.warn('[Firebase] save error:', e);
  }
}

async function firebaseLoadProgress() {
  if (!fbCurrentUser) return null;
  try {
    const doc = await fbDb.collection('users').doc(fbCurrentUser.uid).get();
    return doc.exists ? doc.data().progress : null;
  } catch (e) {
    console.warn('[Firebase] load error:', e);
    return null;
  }
}

// ── Merge: keep the state with more XP ───────────────────

function _mergeProgress(local, cloud) {
  if (!cloud) return local;
  if (!local)  return cloud;
  const localXP = local.profile?.xp  ?? 0;
  const cloudXP = cloud.profile?.xp  ?? 0;
  return localXP >= cloudXP ? local : cloud;
}

// ── Auth state observer ───────────────────────────────────
//  Called once on load and on every sign-in/out.
//  Notifies game.js via window callback.

fbAuth.onAuthStateChanged(async (user) => {
  if (user) {
    fbCurrentUser = {
      uid:         user.uid,
      displayName: user.displayName,
      email:       user.email,
      photoURL:    user.photoURL,
    };

    // Merge local + cloud, keep the best
    const local = srsGetRawState();
    const cloud = await firebaseLoadProgress();
    const merged = _mergeProgress(local, cloud);

    if (merged !== local) {
      // Cloud has more progress → load it locally
      srsLoadRawState(merged);
    }

    // Always sync upward so cloud stays current
    await firebaseSaveProgress(srsGetRawState());

  } else {
    fbCurrentUser = null;
  }

  // Notify game.js to re-render the map with updated auth state
  if (typeof onFirebaseAuthChanged === 'function') {
    onFirebaseAuthChanged(fbCurrentUser);
  }
});
