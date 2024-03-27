import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Template from './Template';
import img1 from "./assets/img1.avif";
import img2 from "./assets/img2.avif";
import img3 from "./assets/img3.avif";
import img4 from "./assets/img4.avif";
import img5 from "./assets/img5.avif";
import img6 from "./assets/img6.jpg";
import img7 from "./assets/img7.jpg";
import img8 from "./assets/img8.jpg";
import img9 from  "./assets/img9.jpg";
import img10 from "./assets/img10.jpg";
import img11 from "./assets/img11.jpg";
import img12 from "./assets/img12.jpg";
import img13 from "./assets/img13.jpg";
import img14 from "./assets/img14.jpg";


const CarouselPage = () => {
  return (
  <div className='Container-fluid'>

   <Carousel className="Container-fluid">
   <Carousel.Item>
    <img className='d-block w-100'src={img1} alt=" no"/>
          <Carousel.Caption>        
             <Template/>
          </Carousel.Caption>
   </Carousel.Item>

   <Carousel.Item>
      <img className='d-block w-100'src={img2}alt=" no"/>
      <Carousel.Caption>
        <Template/>
      </Carousel.Caption>
   </Carousel.Item>

    <Carousel.Item>
      <img className='d-block w-100' src={img3}alt=" no"/>
      <Carousel.Caption>
        <Template/>
      </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item>
       <img className='d-block w-100'src={img4}alt=" no"/>
       <Carousel.Caption>
         <Template/>
        </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item>
       <img className='d-block w-100' src={img5}alt=" no"/>
       <Carousel.Caption>
         <Template/>
        </Carousel.Caption>
     </Carousel.Item>

    <Carousel.Item>
       <img className='d-block w-100'src={img6}alt=" no"/>
       <Carousel.Caption>
          <Template/>
        </Carousel.Caption>
     </Carousel.Item>


    <Carousel.Item>
        <img className='d-block w-100' src={img7} alt=" no"/>
        <Carousel.Caption> 
        <Template/>
        </Carousel.Caption>
    </Carousel.Item>
    
    <Carousel.Item>
        <img className='d-block w-100' src={img8}alt=" no"/>
        <Carousel.Caption>
        <Template/>
         </Carousel.Caption>
     </Carousel.Item>

    <Carousel.Item>
      <img className='d-block w-100'   src={img9}alt=" no"/>
        <Carousel.Caption>
        <Template/>
        </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item>
         <img className='d-block w-100' src={img10} alt=" no"/>
         <Carousel.Caption>
         <Template/>
         </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item>
        <img className='d-block w-100' src={img11} alt=" no"/>
        <Carousel.Caption>
        <Template/>
         </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item>
        <img className='d-block w-100' src={img12} alt=" no"/>
        <Carousel.Caption>
         <Template/>
         </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item>
        <img className='d-block w-100' src={img13} alt=" no"/>
        <Carousel.Caption>
        <Template/>
        </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item>
       <img className='d-block w-100' src={img14} alt=" no"/>
       <Carousel.Caption>
       <Template/>
       </Carousel.Caption>
       </Carousel.Item> 
    </Carousel>

</div>
  )
}

export default CarouselPage