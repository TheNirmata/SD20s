"use client"

import React, { useEffect } from 'react';
// import Playlist from '../components/music/playlist';
import Background from '../components/landingPage/background';
import Header from '../components/header/header';
export default function Home() {
  useEffect(() => {
    document.title = 'SD20s';
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-2xl font-bold text-center sm:text-4xl">
      <div className='justify-center items-center z-1'>
        <div className='sticky top-0 z-50 '> 
          <Header />
        </div>

        <div className='flex-grow'>
          <Background />
        </div>
      </div>

    </div>
  
  );
};