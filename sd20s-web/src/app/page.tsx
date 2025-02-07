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
    <div className="flex flex-col items-center justify-center">
      <div> 
        <Header />
      </div>

      <div>
        <Background />
      </div>

    </div>
  
  );
};