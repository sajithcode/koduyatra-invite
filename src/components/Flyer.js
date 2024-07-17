import React from 'react'
import flyer from '../Assets/Coming-Soon.png';
import './flyer.css';

function Flyer() {
  return (
    <div className='img-container'>
        <img src={flyer}/>
    </div>
  )
}

export default Flyer