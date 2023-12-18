import { createContext,useState, useEffect, ReactNode } from "react";
import { app } from "../firebaseConfig";
import {getAuth} from "firebase/auth"
import { onAuthStateChanged } from "firebase/auth";

export const AuthContext = createContext<any>(null);

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const auth = getAuth(app)
  const [currentUser, setCurrentUser] = useState<any>({});

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });

    return () => {
      unsub();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};