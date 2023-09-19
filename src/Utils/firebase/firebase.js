import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  updateProfile,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  updateDoc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAtl0qmKVZH9XjNE71M9lmcAA-t88wdMJI",
  authDomain: "adventour-db.firebaseapp.com",
  projectId: "adventour-db",
  storageBucket: "adventour-db.appspot.com",
  messagingSenderId: "746483840598",
  appId: "1:746483840598:web:49543f968c3bb133a6edf7",
  measurementId: "G-5KXHP81WKG",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, provider);
export const db = getFirestore(firebaseApp);
export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation
) => {
  if (!userAuth) return;
  console.log(userAuth.uid);
  const userDocRef = doc(db, "users", userAuth.uid);
  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    console.log("%ccreating user document", displayName, "color:green");
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (err) {
      console.log("error creating user", err.message);
    }
  }
  return userDocRef;
};

export const getUserDocumentFromAuth = async (user) => {
  const userDocRef = doc(db, "users", user.uid);
  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  return userSnapshot;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    // // Update user profile
    // await updateProfile(userCredential.user, {
    //   displayName: userName,
    //   photoURL: "https://example.com/jane-q-user/profile.jpg",
    // });

    // console.log("User profile updated successfully");

    return userCredential;
  } catch (error) {
    console.error("Error creating user:", error);
    throw error; // Rethrow the error to handle it at the calling code.
  }
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};
export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);

export const updateBookings = async (user, bookedDestination) => {
  const destinationRef = doc(db, "users", user.uid);

  const userSnapshot = await getDoc(destinationRef);
  const { bookings } = userSnapshot.data();
  // Set the "capital" field of the city 'DC'
  await updateDoc(destinationRef, {
    bookings: [...bookings, bookedDestination],
  });
  console.log("booking updated");
};
export const updateUserDocumentFromAuth = async (user, newDisplayName) => {
  console.log(newDisplayName);
  const userRef = doc(db, "users", user.uid);
  const userSnapshot = await getDoc(userRef);
  updateDoc(userRef, {
    displayName: newDisplayName,
  }).then((res) => {
    console.log(res);
  });
  console.log("document updated");
};
