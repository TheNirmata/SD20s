"use client"; 
import React, { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useAccountModalContext } from '../../context/accountModalContext';
import { Modal, ModalContent, ModalBody } from "@heroui/react";

const MemberModal = () => {
  const { authenticated, showMemberModal, setShowMemberModal } = useAccountModalContext();   
  
  console.log("MemberModal - authenticated:", authenticated); // Debug
  useEffect(() => {
    if (!showMemberModal) return;
    document.body.style.overflow = authenticated ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [showMemberModal]);


  return (
    <>
    {/* {authenticated && ( */}
      <Modal
        isOpen={authenticated && showMemberModal}
        backdrop="opaque"
        classNames={{
          backdrop: "bg-black",
          base: "modal-container",
          closeButton: "hidden"
        }}
        placement="center"
        //@ts-expect-error -next-line
        onClose={() => setShowMemberModal(false)}
      >
        <ModalContent>
          <ModalBody>
            <AnimatePresence>
              <motion.div
                key="waitlist"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="mt-60 justify-center items-center flex flex-col"
              >
                <div className="loading-screen-content leading-none">
                  <div>
                    {/* Add your content here */}
                  </div>
                  <div className="leading-tight uppercase text-[24px]">
                    <h1>Returning Member</h1>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </ModalBody>
        </ModalContent>
      </Modal>
    {/* )} */}
    </>
  );
};
export default MemberModal;