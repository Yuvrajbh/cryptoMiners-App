import { Container } from '@mui/material';
import React from 'react';
import Carousel from './Carousel';

function Banner() {
  return (
    <div className='bannerdiv'>
    <Container className='bannercontainer'  >
    <div className="tagline">
      <h1>Crypto <span>Miners</span></h1>
      <h2>Get all the info regarding your favourite crypto currency</h2>
    </div>
    <div>
      <Carousel/>
    </div>

    </Container>
      
    </div>
  )
}

export default Banner
