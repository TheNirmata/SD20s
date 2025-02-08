import { ReactNode } from 'react';
import React, { useContext, createContext } from 'react';
import Header from '../components/header/header';

const HeaderContext = createContext({});
export const useHeaderContext = () => useContext(HeaderContext);

export const useHeaderProvider = ({ children }: { children: ReactNode }) => {
  const handleHeader = () => {
    return <Header />;
  };
  
  return (
    <HeaderContext.Provider value={{handleHeader}}>
      {children}
    </HeaderContext.Provider>
  );
};
