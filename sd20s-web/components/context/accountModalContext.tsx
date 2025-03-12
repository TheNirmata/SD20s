
"use client"
import React, { useState, useEffect,  useContext, createContext, ReactNode} from 'react';
import { useDisclosure } from "@heroui/react";


const AccountModalContext = createContext({
  show: false,
  
  setShow: () => {},
  isOpen: false,
  onOpen: () => {},
  onClose: () => {},
  onOpenChange: () => {},
  handleOpenModal: () => {},
  handleCloseModal: () => {},
  showForm: false,
  setShowForm: () => {},
  showExistingMemberLoadingScreen: false,
  setshowExistingMemberLoadingScreen: () => {},
  showNewMemberLoadingSceen: false,
  setShowNewMemberLoadingScreen: () => {},
  isWaitListed: false,
  setIsWaitlisted: () => {},
  shouldPreventReopen: false,
  setShouldPreventReopen: () => {},
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
    const [isNewMember, setIsNewMember] = useState(false);
  const { isOpen, onOpen,  onClose, onOpenChange } = useDisclosure();
  const [showExistingMemberLoadingScreen, setshowExistingMemberLoadingScreen] = useState(false);
  const [showNewMemberLoadingScreen, setShowNewMemberLoadingScreen] = useState(false);
  const [isWaitlisted, setIsWaitlisted] = useState<boolean>(false);
  const [shouldPreventReopen, setShouldPreventReopen] = useState(false);
  const eventCapacity = 100;
  const currentCountOfAttendees = 0;

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (shouldPreventReopen) {
        localStorage.setItem('formSubmitted', 'true');
      } else {
        localStorage.removeItem('formSubmitted');
      }
    }
  }, [shouldPreventReopen]);

  const handleOpenModal = () => {
    if (shouldPreventReopen) {
      console.log('Modal is prevented from reopening');
      return;
    }
    onOpen();
    setShow(true);
    setShowForm(true);
    console.log('Account clicked', show, isOpen);
  };

  const handleCloseModal = () => {
    console.log('Closing modal, isOpen before:', isOpen);
    setShouldPreventReopen(true);
    onClose();
    setShow(false);
    setShowForm(false);
    setShowNewMemberLoadingScreen(true);
    //@ts-expect-error -ignore
    onOpenChange(false);
    console.log('Modal should be closed now');
    // Reset the prevent reopen flag after a delay
    setTimeout(() => {
      setShouldPreventReopen(false);
    }, 500);
  };

  const handleRegister = () => {
    if (currentCountOfAttendees > eventCapacity) {
      setIsWaitlisted(true);
      console.log(`event is full, you are now on the waitlist`);
    } else {
      console.log(`event is not full, you are now registered`);
    }
  };

  return (
    <AccountModalContext.Provider value={{ 
      show, 
      //@ts-expect-error -ignore
      setShow, 
      showForm, 
      //@ts-expect-error -ignore
      setShowForm, 
      isOpen, 
      onOpen, 
      onOpenChange, 
      handleOpenModal, 
      handleCloseModal,
      handleRegister,
      shouldPreventReopen,
      //@ts-expect-error -ignore
      setShouldPreventReopen,
      showExistingMemberLoadingScreen,
      //@ts-expect-error -ignore
      setshowExistingMemberLoadingScreen,
      //@ts-expect-error -need this ehre 
      showNewMemberLoadingScreen,
      //@ts-expect-error -ignore
      setShowNewMemberLoadingScreen,
      isNewMember,
      setIsNewMember,
      isWaitlisted,
      //@ts-expect-error -ignore
      setIsWaitlisted,
      onClose
      }}>
      {children}
    </AccountModalContext.Provider>
  );
};