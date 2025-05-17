import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
// import axios from "axios";
import auth from "../firebase/_firebase_init";

// Create the context
// eslint-disable-next-line react-refresh/only-export-components
export const AuthProvider = createContext();

// Google provider
const provider = new GoogleAuthProvider();

export default function AuthContext({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Create a new account
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Sign in with email & password
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Google sign in
  const google = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  // Sign out
  const signout = () => {
    setLoading(true);
    return signOut(auth);
  };

  // Password reset email
  const passWordReset = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  // Update display name and photo
  const updateUserInfo = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  // Monitor auth state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
          setUser(currentUser)
      // if (currentUser?.email) {
      //   setUser(currentUser);
      //   try {
      //     await axios.post(
      //       `${import.meta.env.VITE_API_URL}/jwt`,
      //       { email: currentUser.email },
      //       { withCredentials: true }
      //     );
      //   } catch (err) {
      //     console.error("JWT POST failed:", err);
      //   }
      // } else {
      //   setUser(null);
      //   try {
      //     await axios.get(
      //       `${import.meta.env.VITE_API_URL}/logout`,
      //       { withCredentials: true }
      //     );
      //   } catch (err) {
      //     console.error("Logout GET failed:", err);
      //   }
      // }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const userInformation = {
    user,
    loading,
    createUser,
    signIn,
    google,
    signout,
    passWordReset,
    updateUserInfo,
  };

  return (
    <AuthProvider.Provider value={userInformation}>
      {children}
    </AuthProvider.Provider>
  );
}
