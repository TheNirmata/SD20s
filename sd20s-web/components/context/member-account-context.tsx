import { ReactNode, useState, useEffect, useContext, createContext} from 'react';

const MemberAccountModalContext = createContext({
  showAccountModal: false,
  setShowAccountModal: (showAccountModal: boolean) => {},
  isNewMember: false,
  setIsNewMember: (isNew: boolean) => {},
});

interface MemberAccountModalProviderProps {
  children: ReactNode;
}

export const useMemberAccountModalContext = () => useContext(MemberAccountModalContext);
export const MemberAccountModalProvider: React.FC<MemberAccountModalProviderProps> = ({ children }) => {
  const [showAccountModal, setShowAccountModal] = useState(false);
  const [isNewMember, setIsNewMember] = useState(false);

  useEffect(() => {
    // Check if the modal should be shown based on local storage
    if(isNewMember === false) {
      setShowAccountModal(true);
    }
  }, [isNewMember]);


  return (
    <MemberAccountModalContext
      value={{
        showAccountModal,
        setShowAccountModal,
        isNewMember,
        setIsNewMember
      }}
    >
      {children}
    </MemberAccountModalContext>
  );
};