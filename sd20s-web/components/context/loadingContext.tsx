"use client"
import React, { useState, createContext, useContext, ReactNode } from 'react';


const LoadingContext = createContext<{
  showLoading: boolean;
  setShowLoading: (show: boolean) => void;
}>({
  showLoading: false,
  setShowLoading: () => {},
});

export const LoadingContextProvider = ({ children }: { children: ReactNode }) => {
  const [showLoading, setShowLoading] = useState(false);

  return (
    <LoadingContext.Provider value={{ showLoading, setShowLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};

export const useLoading = () => useContext(LoadingContext);