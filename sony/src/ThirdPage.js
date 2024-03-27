import React from 'react';
import "./slick.css";
import "./slick-theme.css";
import eight from './assets/eight.avif';
import one from './assets/one.avif';
import two from './assets/two.avif';
import three from './assets/three.avif';
import four from './assets/four.avif';
import five from './assets/five.avif';
import six from './assets/six.avif';
import seven from './assets/seven.avif';
import nine from './assets/nine.avif';
import ten from './assets/ten.avif';
import eleven from './assets/eleven.avif';
import twelve from './assets/twelve.avif';
import thirteen from './assets/thirteen.avif';
import fourteen from './assets/fourteen.avif';
import Carousel from 'react-bootstrap/Carousel';


const ThirdPage = () => {

let WH={
   height:'40%',
   width:'15%',
   
}   

  return (
   <div className='container-fluid'>
    <p className="text-light fw-bold fs-3">Movies</p> 
   <Carousel>    
   <Carousel.Item>
      <div  className=' secondpage d-flex  '>
      <img className='hov d-block w-10 h-30'src={one} style={WH} alt=" no"/>
      <img className='hov d-block w-10 h-30'src={two} style={WH} alt=" no"/>
      <img className='hov d-block w-10 h-30' src={three} style={WH} alt=" no"/>
       <img className='hov d-block w-10 h-30'src={four} style={WH} alt=" no"/>
       <img className='hov d-block w-10 h-30' src={five} style={WH} alt=" no"/>
       <img className='hov d-block w-10 h-30'src={six} style={WH} alt=" no"/>
       <img className='hov d-block w-10 h-30' src={seven} style={WH} alt=" no"/>
       
       </div>
    </Carousel.Item>

    <Carousel.Item>
      <div className='d-flex'>
        <img className=' hov d-block w-10 h-30' src={eight} style={WH} alt=" no"/>
         <img className='hov d-blockw-10 h-30'   src={nine}  style={WH} alt=" no"/>
         <img className='hov d-block w-10 h-30' src={ten} style={WH} alt=" no"/>
         <img className='hov d-block w-10 h-30' src={eleven} style={WH} alt=" no"/>
         <img className='hov d-block w-10 h-30' src={twelve} style={WH} alt=" no"/>
         <img className='hov d-block w-10 h-30' src={thirteen} style={WH} alt=" no"/>
         <img className='hov d-block w-10 h-30' src={fourteen} style={WH} alt=" no"/>
        </div>
    </Carousel.Item>

   
    </Carousel>
  
</div>
  )
}

export default ThirdPage











