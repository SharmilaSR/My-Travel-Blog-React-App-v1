import React, {useState} from 'react'
import { SliderDataAustralia } from './SliderDataAustralia';
import {FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa' 
import './ImageSlider.css';

const ImageSliderAustralia = ({slides}) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length -1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length -1 : current - 1);
  };


if (!Array.isArray(slides) || slides.length <= 0) {
  return null;
}
 
  return (
    <>
    <section className='slider'>

      <FaArrowAltCircleLeft className='left-arrow' onClick={nextSlide} />
      <FaArrowAltCircleRight className='right-arrow' onClick={prevSlide}/>
     {SliderDataAustralia.map((slide, index)=> { 
        return (
          <div className={index === current ? 'slide active' : 'slide'} key=
          {index}>
        {index === current && (<img src={slide.image} alt= 'travel image' className='image' />)}
        </div>
        );
     })} 
    </section> 
    <div className='paragraph'>
<p >A city of iconic attractions and brilliant beaches, Sydney is a destination you'll never forget.

Sydney is home to must-visit icons like the Sydney Harbour Bridge and Opera House, but this Harbour City is constantly evolving. New rooftop bars, theatre shows and designer shops pop up at every turn, and the urban excitement is perfectly balanced by afternoons spent lying on the sand. Plus, with diverse destinations at its doorstep, Sydney is the perfect base for day trips and weekends away.  </p>
<p> </p>

</div>
</>
  ); 
}


export default ImageSliderAustralia