"use client"
import React, { useState, useEffect,  useContext, createContext, ReactNode} from 'react';
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
  setshowExistingMemberLoadingScreen: (value: boolean) => {},
  showNewMemberLoadingSceen: false,
  setShowNewMemberLoadingScreen: (value: boolean) => {},
  isWaitListed: false,
  setIsWaitlisted: (value: boolean) => {},
  shouldPreventReopen: false,
  setShouldPreventReopen: (value: boolean) => {},
  eventCapacity: 100, 
  currentCountOfAttendees: 0
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
  const [showNewMemberLoadingScreen, setShowNewMemberLoadingScreen] = useState(false);
  const [isWaitlisted, setIsWaitlisted] = useState<boolean>(false);
  const [shouldPreventReopen, setShouldPreventReopen] = useState(false);
  const eventCapacity = 100;
  const currentCountOfAttendees = 0;

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
    // onOpenChange();
    console.log('Account modal closed', show, isOpen);
  };


  // Custom function to set loading screen and handle modal state
  // const setLoadingScreen = (isLoading: boolean) => {
  //   if (isLoading) {
  //     // When showing loading screen, ensure modal is closed and prevent reopening
  //     setShouldPreventReopen(true);
  //     handleCloseModal();
  //     setShowNewMemberLoadingScreen(true);
  //   } else {
  //     // When hiding loading screen, allow the modal to be opened again in the future
  //     setShowNewMemberLoadingScreen(false);
  //     // Keep shouldPreventReopen true if we're in a flow that shouldn't reopen modal
  //     // Reset it after a delay to allow future modal opens
  //     setTimeout(() => {
  //       setShouldPreventReopen(false);
  //     }, 500);
  //   }
  // };

  useEffect(() => {
    if (showNewMemberLoadingScreen) { 
      console.log('showNewMemberLoadingScreen:', showNewMemberLoadingScreen);
      handleCloseModal();
    } else if (showExistingMemberLoadingScreen) {
      console.log('showExistingMemberLoadingScreen:', showExistingMemberLoadingScreen);
      handleCloseModal();
    }
    
    // Best to fetch from an API to get the current count of attendees
    const handleRegister = () => {
      if (currentCountOfAttendees > eventCapacity) {
        setIsWaitlisted(true);
        console.log(`event is full, you are now on the waitlist`);
      } else {
        console.log(`event is not full, you are now registered`);
      }
    };
    handleRegister();
  }, [currentCountOfAttendees, showNewMemberLoadingScreen, showExistingMemberLoadingScreen]);

  return (
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
      setshowExistingMemberLoadingScreen,
      showNewMemberLoadingScreen,
      setShowNewMemberLoadingScreen,
      isWaitlisted,
      setIsWaitlisted,
      onClose
      }}>
      {children}
    </AccountModalContext.Provider>
  );
};