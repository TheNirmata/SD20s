"use client"

import React, { useEffect } from 'react';
import LandingBlock from '../../components/blocks/landingBlock';
import WaitlistBlock from '../../components/blocks/waitlistBlock';
import AboutUs from '../../components/blocks/aboutUs';

export default function Home() {
  
  useEffect(() => {
    document.title = 'SD20s';
  }, []);

  return (
    // <ClientWapper>
      <div className="contianer min-h-screen flex flex-col">
              <div className=" flex flex-col items-center justify-center text-2xl font-bold text-center sm:text-4xl">
                  <LandingBlock />
                  <WaitlistBlock />
                  <AboutUs />
              </div>
      </div>
    // </ClientWapper>
  );
};