"use client";
import { useState,useEffect } from "react";
import { useMemberAccountModalContext} from "../../context/member-account-context";
import { Modal, ModalBody, ModalContent, ModalHeader, useDisclosure, Button} from "@heroui/react";
import Image from "next/image";
import userIcon from "../../../public/static-images/modal/member-account-modal/user-icon.png"; // Import the user icon
import xIcon from "../../../public/static-images/modal/x-icon.png"; // Import the close icon
import horizontalLine from "../../../public/horizontalLine.png"; // Import the horizontal line
import ticketIcon from "../../../public/static-images/modal/member-account-modal/ticket-icon.png"
import eventCalIcon from "../../../public/static-images/modal/member-account-modal/event-cal-icon.png"
import logoutIcon from "../../../public/static-images/modal/member-account-modal/logout-icon.png"

const UserAccountModal: React.FC = ({isOpen, onOpenChange}) => {
  const { onClose } = useDisclosure(); // Using useDisclosure to manage modal state
  const {setShowAccountModal, setIsLoggedIn, isLoggedIn, isNewMember} = useMemberAccountModalContext();
  const [placement, setPlacement] = useState("center"); // Default placement
  const accountFeatures = {
    "My Tickets": ticketIcon, 
    "Event History": eventCalIcon, 
    "Log Out": logoutIcon
  };

  const accountFeature = Object.entries(accountFeatures).map(([feature, icon]) => (
    <div key={feature} className="flex items-start mb-4 mt-4">
      <Button>
        <div className="flex flex-row">
          <Image src={icon} alt={`${feature} Icon`} className="w-6 h-6 mr-2" />
          <span className="text-sm">{feature}</span>
        </div>
      </Button>
    </div>
  ));

  useEffect(() => {
    if (isNewMember === false) {
      setShowAccountModal(true);
      setIsLoggedIn(true);
    }
  },[isNewMember, setShowAccountModal, isLoggedIn, setIsLoggedIn]);


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
        base: "w-[298px] h-[300px] bg-[#1A1A1A] rounded-xl border border-[#606060] p-4 flex flex-col justify-center items-center",
        closeButton: "hidden"
      }}

      placement={placement} // Set the placement of the modal
      >
        <ModalContent>
          <div className="grid grid-cols-2 mr-10">
            <div className='flex flex-col items-center'>
              <Image 
                src={userIcon} 
                alt="User Icon" 
                className="w-[56px] h-[56px]" // Adjust size as needed
              />
            </div>
            <div className="flex flex-col text-left justify-center items-start">
              <span className="text-[24px]">Name Here</span>
              <p className="text-[11px]">Member since: 2025</p>
            </div>
          </div>

          <Image src={horizontalLine} alt="horizontal-line" height={1} width={192}/>
          <div>
            {accountFeature}
          </div>
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
  )
};
export default UserAccountModal;