import { createContext, useEffect, useReducer, ReactNode, Dispatch } from "react";
import AuthReducer from "./AuthReducer";

interface StateType {
  currentUser: any;
  dispatch: Dispatch<any>;
}
interface AuthContextProviderProps {
  children: ReactNode;
}

const INITIAL_STATE:StateType = {
  currentUser: JSON.parse(localStorage.getItem("user") || "null"),
  dispatch: () => {}
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider: React.FC<AuthContextProviderProps> = ({ children }): React.ReactElement | null => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.currentUser));
  }, [state.currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser: state.currentUser, dispatch }}>
      { children }
    </AuthContext.Provider>
  );
};