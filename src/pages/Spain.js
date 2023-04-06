import React from 'react';
import './pages.css';
import ImageSliderSpain from './components/ImageSliderSpain';
import {SliderDataSpain} from './components/SliderDataSpain.js';



const Spain = () => {
    return <ImageSliderSpain  slides={SliderDataSpain}/>;
  };
  
  export default Spain;