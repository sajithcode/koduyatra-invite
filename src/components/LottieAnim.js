import React from 'react';
import Lottie from "lottie-react";
import './lottieAnime.css';
import groovyWalkAnimation from "../AnimeFile/groovyWalk.json";
import drum from "../AnimeFile/drum.json";
import music from '../AnimeFile/music.json';


function LottieAnim() {
  return (
    <>
    <div className='lottie-container'>
      <Lottie animationData={music} loop={true} style={{ width: '200px', height: '200px' }} />
      <Lottie animationData={music} loop={true} style={{ width: '200px', height: '200px' }} />
    </div>
        
        </>
  );
}

export default LottieAnim;
