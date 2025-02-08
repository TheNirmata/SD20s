import { ReactNode } from 'react';
import React, { useContext, createContext } from 'react';

const HeaderContext = createContext({});
export const useHeaderContext = () => useContext(HeaderContext);

export const HeaderProvider = ({ children }: { children: ReactNode }) => {
  const value = {
    header: {
      isTransparent: true,
      isScrolled: false,
      isMobileMenuOpen: false,
    },
    setHeader: () => {},
  };
  
  return (
    <HeaderContext.Provider value={value}>
      {children}
    </HeaderContext.Provider>
  );
};
