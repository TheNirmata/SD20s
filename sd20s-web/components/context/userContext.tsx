"use client"
import React, { useState, useContext, createContext, ReactNode} from 'react';

const UserContext = createContext({
  user: {}
});

interface UserProviderProps {
  children: ReactNode;
}

export const useUserContext = () => useContext(UserContext);

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState({
    name: "",
    birthday: "",
    email: ""
  });

  return (
    //@ts-expect-error - ignore
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}