import { useState } from "react";
import Image from "next/image";
import { Modal, ModalContent, ModalHeader, ModalBody, Button, useDisclosure } from '@heroui/react';
import xIcon from "../../../public/static-images/modal/x-icon.png"; 

const EventConfirmationModal = ({isOpen, onOpenChange}) =>{
  const { onClose } = useDisclosure(); 
  const [placement,AboutUs] = useState("center");


  return (
    <>
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} key="event-confirmation-modal"
      onClose={() => {
        onClose(); // Close the modal
        onOpenChange(false); // Update the open state
      }}
      classNames={{
        closeButton: "hidden",  // This hides the close button
        backdrop: "bg-black/80",
        base: "modal-container"
        
      }}
      motionProps={{
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: { duration: 0.3 }
      }}
      placement={placement}
      >
        <ModalContent>
          <ModalHeader className="text-[#D9D9D9] text-[32px] font-bold">
            Confirmed
          </ModalHeader>
          <h2>
          Check (123)-456-7890 for a confirmation text. We’ll text you event updates and reminders
          </h2>

          <Button
        className="absolute translate-y-2 right-4 top-4 p-2"
        onPress={() => {
          onClose(); // Close the modal
          onOpenChange(false); // Update the open state
        }}
      >
        <Image src={xIcon} alt="x-icon" width={17} height={17}/>
      </Button>
        </ModalContent>

    </Modal>
    </>
  );
};
export default EventConfirmationModal;