import { ReactNode, useState, useEffect, useContext, createContext} from 'react';

const MemberAccountModalContext = createContext({
  showAccountModal: false,
  setShowAccountModal: (showAccountModal: boolean) => {},
  isNewMember: false,
  setIsNewMember: (isNew: boolean) => {},
  isLoggedIn: false, 
  setIsLoggedIn: (isLoggedIn: boolean) => {}
});

interface MemberAccountModalProviderProps {
  children: ReactNode;
}

export const useMemberAccountModalContext = () => useContext(MemberAccountModalContext);
export const MemberAccountModalProvider: React.FC<MemberAccountModalProviderProps> = ({ children }) => {
  const [showAccountModal, setShowAccountModal] = useState(false);
  const [isNewMember, setIsNewMember] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if the modal should be shown based on local storage
    if(isNewMember === false) {
      setShowAccountModal(true);
      isLoggedIn(true);
    }
  }, [isNewMember, isLoggedIn]);


  return (
    <MemberAccountModalContext
      value={{
        showAccountModal,
        setShowAccountModal,
        isNewMember,
        setIsNewMember,
        isLoggedIn,
        setIsLoggedIn
      }}
    >
      {children}
    </MemberAccountModalContext>
  );
};