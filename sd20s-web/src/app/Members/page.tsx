"use client"
import React from 'react';
import MembersTopBlock from '../../../components/blocks/memberBlock';
import UpComingEventsBlock from '../../../components/blocks/upComingEventsBlock';
import SongRequestBlock from '../../../components/blocks/songRequestBlock';
import PastEventsBlock from '../../../components/blocks/pastEventsBlock';
import ContactUsBlock from '../../../components/blocks/MemberContactUsBlock';

const MembersPage = () => {
  return (
    <>
    <div className="flex flex-col items-center min-h-screen overflow-x-hidden">
      <MembersTopBlock />
      <UpComingEventsBlock /> 
      <SongRequestBlock />
      <PastEventsBlock />
      <ContactUsBlock />
    </div>
    </>
  )

};

export default MembersPage;



// import {Form, Input, Button} from "@heroui/react";

// export default function App() {
//   const onSubmit = (e) => {
//     e.preventDefault();
//   };

//   return (
//     <Form className="w-full max-w-xs" onSubmit={onSubmit}>
//       <Input
//         isRequired
//         errorMessage="Please enter a valid email"
//         label="Email"
//         labelPlacement="outside"
//         name="email"
//         placeholder="Enter your email"
//         type="email"
//       />
//       <Button type="submit" variant="bordered">
//         Submit
//       </Button>
//     </Form>
//   );
// }
