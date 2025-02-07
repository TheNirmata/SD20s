import React from 'react';

const Playlist = () => {

  return (
    <div className='flex flex-col items-center justify-center'>
        <div className='items-center'>
          <h2> SD20s Playlist </h2>
        </div>
        <div className='flex-col items-center'>
          <iframe 
            width="100%" 
            height="400" 
            scrolling="no" 
            frameBorder="no" 
            allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1965070080&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true">
          </iframe>
            {/*           
            <div>
              <a href="https://soundcloud.com/user-702287325" title="eric" target="_blank">eric</a> 
            </div> 
            */}
      </div>
    </div>
  );
};

export default Playlist;