import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { FaUserPlus } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa6";
import { FaRegChessQueen } from "react-icons/fa6";
import { PiTelevision } from "react-icons/pi";
import { FaCog } from "react-icons/fa";
import { FaBlenderPhone } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { AiOutlinePercentage } from "react-icons/ai";





const Signin = () => {
  return (
    <div id="Sign">
        <Dropdown data-bs-theme="dark opacity-5">
        <Dropdown.Toggle className="w-25" id="dropdown-button-dark-example1" variant="dark">
        <FaUserPlus/> 
        </Dropdown.Toggle>

        <Dropdown.Menu className="bg-dark bg-opacity-5 " variant="dark">
          <Dropdown.Item href="#/action-1" className="me-3 m-2" active ><FaRegUser />     Signin </Dropdown.Item>
          <Dropdown.Item href="#/action-2" className="me-3"><FaRegChessQueen   />        Subscribe Now     </Dropdown.Item>
          <Dropdown.Item href="#/action-2" className="me-3"><PiTelevision />     Activate Tv  </Dropdown.Item>
          <Dropdown.Item href="#/action-3" className="me-3"> <FaCog />Settings & Preference</Dropdown.Item>  
          <Dropdown.Item href="#/action-4" className="me-3"><FaBlenderPhone />Contact Us</Dropdown.Item>
          <Dropdown.Item href="#/action-4" className="me-3"><FaWhatsapp />Chat with us on Whatsapp</Dropdown.Item>
          <Dropdown.Item href="#/action-4" className="me-3"> <AiOutlinePercentage />Activate Offer</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown> 

      
    </div>
  )
}

export default Signin