
"use client"
import React, { useState, useEffect,  useContext, createContext, ReactNode} from 'react';
import { useDisclosure } from "@heroui/react";


const AccountModalContext = createContext({
  authenticated: false,
  setAuthenticated: () => {},
  isNewMember: false,
  setIsNewMember: () => {},
  show: false,
  setShow: () => {},
  showMemberModal: false,
  setShowMemberModal: () => {},
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
  const [authenticated, setAuthenticated] = useState(false);
  const { isOpen, onOpen,  onClose, onOpenChange } = useDisclosure();
  const [showExistingMemberLoadingScreen, setshowExistingMemberLoadingScreen] = useState(false);
  const [showNewMemberLoadingScreen, setShowNewMemberLoadingScreen] = useState(false);
  const [isWaitlisted, setIsWaitlisted] = useState<boolean>(false);
  const [shouldPreventReopen, setShouldPreventReopen] = useState(false);
  const [showMemberModal, setShowMemberModal] = useState(false);

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

  const handleExistingMember = () => {
    setIsNewMember(false);
    setShowForm(true);
    //check if user exists 
    // if (userExists) {
    //   setShowExistingMemberLoadingScreen(false);
    // } else {
    //   setShowExistingMemberLoadingScreen(true);
    // }
    console.log('existing member clicked');
    // setAuthenticated(true);
  };

  
  
  const handleRegister = () => {
    if (currentCountOfAttendees > eventCapacity) {
      setIsWaitlisted(true);
      setIsNewMember(true);
      console.log(`event is full, you are now on the waitlist`);
    } else {
      // setShowNewMemberLoadingScreen(true);
      setIsNewMember(false);
      setAuthenticated(true);
      console.log(`event is not full, you are now registered`);
    }
  };
  
  const handleMemberModal = () => {
    if (authenticated) {
      setShowMemberModal(prev => !prev);
      console.log('Member modal toggled');
    }else{
      onOpen();
    }
  };
  ;

  return (
    <AccountModalContext.Provider value={{ 
      authenticated,
      //@ts-expect-error -ignore
      setAuthenticated,
      show, 
      //@ts-expect-error -ignore
      setShow, 
      showForm, 
      //@ts-expect-error -ignore
      setShowForm, 
      showMemberModal,
      //@ts-expect-error -ignore
      showForm, 
      //@ts-expect-error -ignore
      setShowMemberModal,
      isNewMember,
      //@ts-expect-error -ignore
      setIsNewMember,
      isOpen, 
      onOpen, 
      onOpenChange, 
      handleOpenModal, 
      handleCloseModal,
      handleExistingMember,
      handleRegister,
      handleMemberModal,
      shouldPreventReopen,
      //@ts-expect-error -ignore
      setShouldPreventReopen,
      showExistingMemberLoadingScreen,
      //@ts-expect-error -ignore
      setshowExistingMemberLoadingScreen,
      showNewMemberLoadingScreen,
      //@ts-expect-error -ignore
      setShowNewMemberLoadingScreen,
      isWaitlisted,
      //@ts-expect-error -ignore
      setIsWaitlisted,
      onClose
      }}>
      {children}
    </AccountModalContext.Provider>
  );
};