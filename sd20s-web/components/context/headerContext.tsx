"use client"
import { ReactNode } from 'react';
import React, { useContext, createContext } from 'react';
import Header from '../header/header';

const HeaderContext = createContext({});
export const useHeaderContext = () => useContext(HeaderContext);

export const HeaderContextProvider = ({ children }: { children: ReactNode }) => {
  const handleHeader = () => {
    console.log('header');
  };
  
  return (
    <HeaderContext.Provider value={handleHeader}>
      <div className="sticky top-0 z-50 w-full">
        <Header />
      </div>
      {children}
    </HeaderContext.Provider>
  );
};

