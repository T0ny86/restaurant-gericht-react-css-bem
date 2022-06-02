import React, { useState, useRef } from 'react';

import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs'
import { meal } from '../../constants'
import './Intro.css';

const Intro = () => {
  const [playVideo, setPlayVideo] = useState(false)
  const videoRef = useRef()

  const handleVideo = () => {
    setPlayVideo((prev) => !prev)
    if (playVideo) {
      videoRef.current.pause()
    } else {
      videoRef.current.play()
    }
  }
  return (
    <div className='app__video'>
      <video
        src={meal}
        ref={videoRef}
        type="video/mp4"
        controls={false}
        loop
        muted
      />
      <div className='app__video-overlay flex__center'>
        <div className='app__video-overlay_circle flex__center'
          onClick={handleVideo}
        >
          {playVideo ? <BsPauseFill color='#FFF' fontSize={30} /> : <BsFillPlayFill color='#FFF' fontSize={30}/>}
        </div>

      </div>
    </div>
  );
}

export default Intro;
