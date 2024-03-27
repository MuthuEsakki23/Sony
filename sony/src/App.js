import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppBar from './AppBar';
import CarouselPage from './CarouselPage';
import SecondPage from './SecondPage';
import Signin from './Signin';
import "bootstrap/dist/css/bootstrap.min.css";
import { FaUserPlus } from "react-icons/fa";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaSearch } from "react-icons/fa";
import Button from 'react-bootstrap/Button';
import sh from "./assets/img15.jpg";
import SwipeToSlide from './SwipeToSlide';
import ThirdPage from './ThirdPage';



function App() {    
   let btn={
    backgroundColor:"transparent",
    border:"none"
   }

  function myFunction() {
      var x = document.getElementById("search");
      if (x.style.display === "none") {
        x.style.display = "inline";
      } else {
        x.style.display = "none";
      }
    }

        
  return (    
   <div className='Container-fluid bg-dark'>  
   <div className='row navbar-dark bg-dark ' >
   <div className='col'>
   <Navbar expand="lg" className="bg-body-dark bg-opacity-10  text-muted">    
      <img className="d-block p-3" src={sh} alt='no'></img>
      <Navbar.Brand href="#home"> <Button variant="primary m-2">Subscribe</Button>{' '}</Navbar.Brand>
   <Navbar.Toggle aria-controls="basic-navbar-nav " className="bg-light justify-content-around p-3 "/>
   <Navbar.Collapse id="basic-navbar-nav " className='justify-content-center  '>
     <Nav className=''>
       <Nav.Link href="" className="  justify-content-around fw-bold text-light me-3">Shark Tank India</Nav.Link>
       <Nav.Link href="#link" className="  justify-content-around fw-bold text-light me-3">Originals</Nav.Link>
       <Nav.Link href="#link" className=" justify-content-around  fw-bold text-light me-3">WWE</Nav.Link>
       <Nav.Link href="#link" className=" justify-content-around  fw-bold text-light me-3">Tvshows</Nav.Link>
       <Nav.Link href="#link" className=" justify-content-around  fw-bold text-light me-3">Sports</Nav.Link>
       <Nav.Link href="#link" className="justify-content-around fw-bold text-light me-3">Movies</Nav.Link>
       <Nav.Link href="#link" className="justify-content-around  fw-bold text-light me-3">New</Nav.Link>
       <Nav.Link href="#link" className="justify-content-around fw-bold text-light me-3">Qory</Nav.Link>
       <Nav.Link href="#link" className="justify-content-around fw-bold text-light me-3">Premium</Nav.Link>
     </Nav>
     {/* <button type="button" className="btn btn-dark"><FaSearch/></button> */}
     <button  className="me-3 bg-light "onClick={myFunction} style={btn}><FaSearch/></button><input id="search" type="text" placeholder="Search"></input>
      <div id="sign"><Signin/></div>
     {/* <button type="button" className="btn btn-dark"></button> */}
   
   </Navbar.Collapse>
  </Navbar>
  </div>
 </div>
    
    <CarouselPage/>
    <br></br> 
   <SecondPage></SecondPage>
   <br></br> 
   <ThirdPage></ThirdPage>
   <br></br> 
    <SwipeToSlide></SwipeToSlide>
   
    
    
   </div>
  );
} 
export default App;
