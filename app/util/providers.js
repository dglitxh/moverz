import React from "react";
import { auth } from "@/lib/firebase";
import { onAuthStateChanged } from "firebase/auth";

const UserContext = React.createContext();
export const useUser = () => React.useContext(UserContext);

export const userProvider = ({ children }) => {
  const [user, setUser] = React.useState({});
  React.useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({
          email: user.email,
          uid: user.uid,
          displayName: user.displayName,
        });
      }
    });
  }, user);

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};
