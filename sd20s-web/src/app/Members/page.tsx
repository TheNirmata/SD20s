"use client"
import React from 'react';
import MembersTopBlock from '../../../components/blocks/members-block/memberBlock';
import UpComingEventsBlock from '../../../components/blocks/members-block/upComingEventsBlock';
import SongRequestBlock from '../../../components/blocks/members-block/songRequestBlock';
import PastEventsBlock from '../../../components/blocks/members-block/pastEventsBlock';
import ContactUsBlock from '../../../components/blocks/members-block/MemberContactUsBlock';

const MembersPage = () => {
  // useEffect(()=> {
  //   const isAuth = localStorage.get
  // },[]);
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

