"use client";
import { useState,useEffect } from "react";
import { useMemberAccountModalContext} from "../../context/member-account-context";
import { Modal, ModalBody, ModalContent, ModalHeader, useDisclosure } from "@heroui/react";

const UserAccountModal: React.FC = ({isOpen, onOpenChange}) => {
  const { onClose } = useDisclosure(); // Using useDisclosure to manage modal state
  const {showAccountModal, setShowAccountModal, isNewMember} = useMemberAccountModalContext();
  const [placement, setPlacement] = useState("center"); // Default placement
  useEffect(() => {
    if (isNewMember === false) {
      setShowAccountModal(true);
    }
  },[isNewMember, setShowAccountModal]);


  return ( 
    <>
    <Modal 
      isOpen={isOpen} 
      onOpenChange={onOpenChange} 
      onClose={() => {
        onClose(); // Close the modal
        onOpenChange(false); // Update the open state
      }}
      backdrop="opaque"
      classNames={{
        backdrop: "bg-black",
        base: "modal-container",
        closeButton: "hidden"
      }}
      placement={placement} // Set the placement of the modal
      >
        <ModalContent>
          <ModalHeader className="text-[#D9D9D9] text-[32px] font-bold">
            User Account Modal
          </ModalHeader>
        </ModalContent>
      </Modal>
    </>
  )
};
export default UserAccountModal;