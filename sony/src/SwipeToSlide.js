import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import one from './assets/one.avif';
import two from './assets/two.avif';
import three from './assets/three.avif';
import four from './assets/four.avif';
import five from './assets/five.avif';
import six from './assets/six.avif';
import seven from './assets/seven.avif';
import eight from './assets/seven.avif';
import nine from './assets/nine.avif';


const SwipeToSlide = () => {

  let WH={
    height:'40%',
    width:'15%',
    
 }   
 
  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 5,
    swipeToSlide: true,
    afterChange: function(index) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      );
    }
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
        <img className='hov d-block w-10 h-30' src={one}  alt=" no"/>
        </div>
        <div>
        <img className='hov d-block w-10 h-30' src={two}  alt=" no"/>
        </div>
        <div>
        <img className='hov d-block w-10 h-30' src={three} alt=" no"/>
        </div>
        <div>
        <img className='hov d-block w-10 h-30' src={four}  alt=" no"/>
        </div>
        <div>
        <img className='hov d-block w-10 h-30' src={five}  alt=" no"/>
        </div>
        <div>
        <img className='hov d-block w-10 h-30' src={six} alt=" no"/>
        </div>
        <div>
        <img className='hov d-block w-10 h-30' src={seven}  alt=" no"/>
        </div>
        <div>
        <img className='hov d-block w-10 h-30' src={eight}  alt=" no"/>
        </div>
        <div>
        <img className='hov d-block w-10 h-30' src={nine}  alt=" no"/>
        </div>
      </Slider>
    </div>
  )
}

export default SwipeToSlide