'use client'
import { ReactNode } from 'react';
import React, { useContext, createContext } from 'react';
import Footer from '../blocks/footer';

const FootContext = createContext({});
export const useFootContext = () => useContext(FootContext);

export const FootContextProvider = ({ children }: { children: ReactNode }) => {
  const handleFooter = () => {
    console.log('footer');
  };
  
  return (
    <FootContext.Provider value={handleFooter}>
      <div className="flex flex-col min-h-screen w-full">
      {children}
      <Footer />
      </div>
    </FootContext.Provider>
  );
};
