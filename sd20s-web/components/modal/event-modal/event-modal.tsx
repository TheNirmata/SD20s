"use client";
import React, { useEffect, useState } from 'react';
import Image from "next/image";
import { useFetch } from "../../hooks/useFetch";
import { Modal, ModalContent, ModalBody, ModalHeader, Button } from '@heroui/react';
import xIcon from "../../../public/static-images/modal/x-icon.png"; // Assuming you have an x icon for closing
import calendarIcon from "../../../public/static-images/events-images/event-modal/calendar-icon.png"; // Assuming you have a calendar icon for the event
import locationPing from "../../../public/static-images/events-images/event-page/location-ping-icon.png"; 
import EventConfirmationModal from './event-confirmation-modal';


const EventModal = ({ eventId, onClose, isOpen, onOpenChange }: { 
  eventId: number, 
  onClose: () => void, 
  isOpen: boolean, 
  onOpenChange: (open: boolean) => void
 }) => {
  const { data: eventData, error, loading } = useFetch(`http://localhost:8000/events/${eventId}`);
  const [event, setEvent] = useState(null);
  const [modalPlacement, setModalPlacement] = useState("auto");
  const [confirmation, setConfirmation] = useState(false);

  useEffect(()=>{
    if (eventData) {
      setEvent(eventData);
    }
  },[eventId, eventData]);

  const handleConfirmation = () => setConfirmation(true); 

  return (
  <>
   {confirmation ? (
    <EventConfirmationModal 
      key="event-confirmation-modal"
      isOpen={isOpen} 
      onOpenChange={onOpenChange}
      />
   ):(
    <>
    <Modal isOpen={isOpen} onOpenChange={onOpenChange}  placement={modalPlacement}
    className="event-modal"
    onClose={() => {
      onClose(); // Close the modal
      onOpenChange(false); // Update the open state
    }}
    classNames={{
      closeButton: "hidden",  // This hides the close button
      backdrop: "bg-black/80",
      base: "modal-container -top-20"
      
    }}
    motionProps={{
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      transition: { duration: 0.3 }
    }}
    >

    <ModalContent>
 {(onClose) => (
  <>
       {error && <p>Error: {error.message}</p>}
      {loading && <p>Loading...</p>}
      {event ? (
        <>        
          <ModalHeader className="text-[#D9D9D9] text-[32px] font-bold">{event.name}</ModalHeader>
          <div className="p-4">
            <div className="flex flex-col">
              <div className="flex flex-row justify-between items-center">
                <Image src={calendarIcon} alt="calender-icon"/>
                <p>{event.when}</p>
              </div>
              <div className="flex flex-row justify-between items-center">
                <Image src={locationPing} alt="location-ping"/>
                <p>{event.where}</p>
              </div>
            </div>
          </div>
            <p>Age Limitation Restrictions Here.</p>
          <div className="border-[1px] border-solid border-[#444444] rounded-md my-4 grid grid-cols-2 gap-4 w-[298px]">
            <div className="text-left grid grid-rows-1 gap-2 m-4 leading-none">
              <p>Addmission</p>
              <p>Free</p>
            </div>
          
            <div className="h-[37px] w-[73px] mt-4 translate-x-14">
              <input 
                type='Number' 
                defaultValue={0}
                min={0}
                className="border-2 border-solid border-[#444444] rounded-md h-[37px] w-[73px] bg-transparent p-3"
                />
            </div>
            {/* <NumberInput className="max-w-xs" placeholder="Enter the amount" />; */}
          </div>

          <Button 
          onPress={handleConfirmation} 
          className="bg-white text-black rounded-md w-[298px] h-[51.06px]"
          >
            Checkout
          </Button>
        </>
      ):(
        <p>No event found with ID: {eventId}</p>
      )} 
      <Button
        className="absolute translate-y-2 right-4 top-4 p-2"
        onPress={() => {
          onClose(); // Close the modal
          onOpenChange(false); // Update the open state
        }}
      >
        <Image src={xIcon} alt="x-icon" width={17} height={17}/>
      </Button>
     
  </>
 )}
    </ModalContent>
  </Modal>
    </>
   )}
  </>
  );
};

export default EventModal;