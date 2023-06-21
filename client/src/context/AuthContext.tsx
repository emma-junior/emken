import { createContext,useState, useEffect, useReducer, ReactNode, Dispatch } from "react";
import AuthReducer from "./AuthReducer";
import { app } from "../firebaseConfig";
import {getAuth} from "firebase/auth"
import { onAuthStateChanged } from "firebase/auth";

// interface StateType {
//   currentUser: any;
//   dispatch: Dispatch<any>;
// }
// interface AuthContextProviderProps {
//   children: ReactNode;
// }

// const INITIAL_STATE:StateType = {
//   currentUser: JSON.parse(localStorage.getItem("user") || "null"),
//   dispatch: () => {}
// };

// export const AuthContext = createContext(INITIAL_STATE);

// export const AuthContextProvider: React.FC<AuthContextProviderProps> = ({ children }): React.ReactElement | null => {
//   const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

//   useEffect(() => {
//     localStorage.setItem("user", JSON.stringify(state.currentUser));
//   }, [state.currentUser]);

//   return (
//     <AuthContext.Provider value={{ currentUser: state.currentUser, dispatch }}>
//       { children }
//     </AuthContext.Provider>
//   );
// };

export const AuthContext = createContext<any>(null);

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const auth = getAuth(app)
  const [currentUser, setCurrentUser] = useState<any>({});

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      console.log(user);
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