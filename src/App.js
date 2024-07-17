import { useEffect, useRef } from 'react';
import './App.css';
import './fonts.css';
import Lottie from "lottie-react";
import * as THREE from 'three';

import Logo from './Assets/logo.png';
import Particle from './components/Particle';
import Invite from './components/Invite';
import InviteTest from './components/InviteTest';

import LottieAnim from './components/LottieAnim';
// import Img2 from './Assets/img2.png'; // If not used, consider removing it
// import MusicBoy from './components/MusicBoy'; // If not used, consider removing it
// import Loader from './components/loader/Loader'; // If not used, consider removing it
// import { Audio } from 'react-loader-spinner'; // If not used, consider removing it
import Music from './AnimeFile/music.json';
import header from './AnimeFile/header.json';
import paint from './AnimeFile/paint.json';
import dance from './Assets/dance.gif';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import Stats from 'three/examples/jsm/libs/stats.module.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import backgroungImage from './Assets/bg-img.svg';
import Flyer from './components/Flyer';


function App() {
  // const canvasRef = useRef(null);

  // useEffect(() => {
  //   const scene = new THREE.Scene();

  //   const camera = new THREE.PerspectiveCamera(
  //     50,
  //     window.innerWidth / window.innerHeight,
  //     1,
  //     1000
  //   );
  //   camera.position.z = 96;

  //   const canvas = canvasRef.current;
  //   const renderer = new THREE.WebGLRenderer({
  //     canvas,
  //     antialias: true,
  //   });
  //   renderer.setSize(window.innerWidth, window.innerHeight);
  //   document.body.appendChild(renderer.domElement);

  //   const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
  //   ambientLight.castShadow = true;
  //   scene.add(ambientLight);

  //   const spotLight = new THREE.SpotLight(0xffffff, 1);
  //   spotLight.castShadow = true;
  //   spotLight.position.set(0, 64, 32);
  //   scene.add(spotLight);

  //   const boxGeometry = new THREE.BoxGeometry(16, 16, 16);
  //   const boxMaterial = new THREE.MeshNormalMaterial();
  //   const boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
  //   scene.add(boxMesh);

    // //Add orbit controls
    // const controls = new OrbitControls(camera, renderer.domElement)

    // //ADD FPS stats
    // const stats = Stats;
    //below line not working
    // document.body.appendChild(stats.dom);

   


  //   const animate = () => {
  //     boxMesh.rotation.x += 0.01;
  //     boxMesh.rotation.y += 0.01;
  //     // stats.update();
  //     // controls.update();
  //     renderer.render(scene, camera);
  //     window.requestAnimationFrame(animate);
  //   };
  //   animate();
  // }, []);

  return (
    <>
      <Particle />
      <div className='bg-img'>
        <div className='logo-div'>
          <img src={Logo} width={220} alt="Event Logo" loading="lazy"/>
        </div>
        <div className='slogan-div'>
          <p className='slogan'>iïm%odfha pl%hka wNsnjk fldavqldr wduka;%Kh</p>
        </div>
        {/* <div>
          <Flyer />
        </div> */}
        <div className='background-lottie'>
          <LottieAnim />
        </div>
        {/* <Invite /> */}
        <InviteTest />
        {/* <div id="myThreeJsCanvas">
          <canvas ref={canvasRef}>
          <Invite />
          </canvas>
          
        </div> */}
        {/* Uncomment if needed
        <div className='gif-img'
        >
          <img src={dance} alt="My GIF" />
        </div>
        */}
      </div>
      {/* <footer className="footer">
        <p>&copy; 2024 Koduyatra Event, Faculty of Computing, SUSL. All rights reserved.</p>
      </footer> */}

    </>
  );
}

export default App;
