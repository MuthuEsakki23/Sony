import React from 'react';
import { FaPlus } from "react-icons/fa6";
import { FaShare } from "react-icons/fa";

const Template = () => {
  return (
    <div className='container'>
    <div className="d-flex"> 
    <p className='fs-5 me-4 lh-lg text-break'>Drama,Politics</p>
     <ul className=' d-flex me-5 fs-5' >
     <li className='me-5 fs-5'>Hindi</li>
     <li >2023</li>
     </ul>          
  </div>


   <div className="d-flex me-6">
     <div className='template'>
     <FaPlus type="submit" className=' plus w-40 h-50 m-1' />
     <p className=" add fs-5 fw-3 m-1 me-6">Add to My List</p>
     </div>
      <div className='buttons'>
     <button type="button" class="btn btn-light h-60 w-75 m-4 me-5">Play Now</button>
     </div>
     <div className='share h-50 w-40 m-1 me-5'>
     <FaShare  type="submit" /> 
     <p className=" sharetext fs-5 me-5 m-1">Share</p>
     </div>
   </div>     
   </div>   
   
  )
}

export default Template