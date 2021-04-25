import firebase from '../utils/firebase';
import { FC, createContext, useEffect, useState } from 'react';

type AuthContextProps = {
  currentUser: firebase.User | null | undefined;
}
  
const AuthContext = createContext<AuthContextProps>({ currentUser: undefined });

const AuthProvider: FC = ({ children }) => {
    const [currentUser, setCurrentUser] = useState<firebase.User | null | undefined>(undefined);

    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
          // ログイン状態が変化すると呼ばれる
          setCurrentUser(user);
        })
      }, []);
    return (
        <AuthContext.Provider value={{ currentUser: currentUser }}>
            {children}
        </AuthContext.Provider>
    );
}

export { AuthContext, AuthProvider }