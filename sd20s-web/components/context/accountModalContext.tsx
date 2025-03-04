"use client"
import React, { useState, useContext, createContext, ReactNode} from 'react';
import { useDisclosure } from "@heroui/react";


const AccountModalContext = createContext({
  show: false,
  setShow: (value: boolean) => {},
  isOpen: false,
  onOpen: () => {},
  close: () => {},
  onOpenChange: () => {},
  handleOpenModal: () => {},
  handleCloseModal: () => {},
  showForm: false,
  setShowForm: (value: boolean) => {},
  showExistingMemberLoadingScreen: false,
  setshowExistingMemberLoadingScreen: (value: boolean) => {}
});

interface AccountModalProviderProps {
  children: ReactNode;
}

export const useAccountModalContext = () => useContext(AccountModalContext);
export const AccountModalProvider: React.FC<AccountModalProviderProps> = ({ children }) => {
  const [show, setShow] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const { isOpen, onOpen,  onClose, onOpenChange } = useDisclosure();
  const [showExistingMemberLoadingScreen, setshowExistingMemberLoadingScreen] = useState(false);

  const handleOpenModal = () => {
    onOpen();
    setShow(true);
    setShowForm(true);
    console.log('Account clicked', show, isOpen);
  };

  const handleCloseModal = () => {
    onClose();
    setShow(false);
    setShowForm(false);
    onOpenChange();
    console.log('Account modal closed', show, isOpen);
  };


  return (
    //@ts-expect-error - ignore
    <AccountModalContext.Provider value={{ 
      show, 
      setShow, 
      showForm, 
      setShowForm, 
      isOpen, 
      onOpen, 
      onOpenChange, 
      handleOpenModal, 
      handleCloseModal,
      showExistingMemberLoadingScreen,
      setshowExistingMemberLoadingScreen
      }}>
      {children}
    </AccountModalContext.Provider>
  );
};