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
import axios from "axios";

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
  // Monitor auth state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      // setUser(currentUser)
      if (currentUser?.email) {
        setUser(currentUser);
        await axios.post(
          `${import.meta.env.VITE_API_KEY_LOCALHOST}/jwt`,
          { email: currentUser?.email },
          { withCredentials: true }
        );
      } else {
        // remove from the server side
        setUser(currentUser);
        await axios.get(`${import.meta.env.VITE_API_KEY_LOCALHOST}/logout`, {
          withCredentials: true,
        });
      }
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthProvider.Provider value={userInformation}>
      {children}
    </AuthProvider.Provider>
  );
}
