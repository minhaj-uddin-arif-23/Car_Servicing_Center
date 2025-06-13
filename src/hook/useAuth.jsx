import React, { useContext } from "react";
import { AuthProvider } from "../authContext/AuthContext";

export default function useAuth() {
  const auth = useContext(AuthProvider);
  return auth;
}
