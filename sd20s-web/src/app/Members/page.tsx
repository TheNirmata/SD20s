"use client"
import React from 'react';
import MembersTopBlock from '../../../components/modal/returning-member/memberBlock';
import UpComingEventsBlock from '../../../components/modal/returning-member/upComingEventsBlock';

const MembersPage = () => {
  return (
    <>
    <div className="flex flex-col items-center min-h-screen">
      <MembersTopBlock />
      <UpComingEventsBlock /> 
    </div>
    </>
  )

};

export default MembersPage;