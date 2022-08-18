import React, { useState } from 'react';
import logo from '../images/pogo.png'
import {
  MDBNavbar,
  MDBContainer,
  // MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBCollapse,
  // MDBDropdown,
  // MDBDropdownMenu,
  // MDBDropdownToggle,
  // MDBDropdownItem,
  // MDBDropdownLink
} from 'mdb-react-ui-kit';

export default function Navbar() {
  // const [showNavRight, setShowNavRight] = useState(false);
  
    // const [nav,setnav] = useState(false);
    const [setnav] = useState(false);
  const [showNav, setShowNav] = useState(false);
  const changeBackgrond =()=>{
    if(window.scrollY >=50){
      setnav(true)  ;
    }
    else setnav(false);
}
window.addEventListener('scroll',changeBackgrond);

  return (
    
    <MDBNavbar expand='lg' light bgColor='light'>
    
          <MDBContainer  fluid>
          <a href='#'className='logo'>
        <img src={logo} alt=''/>
            </a>
            <MDBNavbarToggler
              type='button'
              aria-expanded='false'
              aria-label='Toggle navigation'
              onClick={() => setShowNav(!showNav)}
            >
             
            </MDBNavbarToggler>
            <MDBCollapse navbar show={showNav} font-weight-bold justify-content-end>
              <MDBNavbarNav >
                {/* <MDBNavbarItem>
                  <MDBNavbarLink active aria-current='page' href='#'>
                    Home
                  </MDBNavbarLink>
                </MDBNavbarItem> */}
                <MDBNavbarItem >
                  <MDBNavbarLink href='#main' >Home</MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem>
                  <MDBNavbarLink href='#features'>Features</MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem>
                  <MDBNavbarLink href='#about'>About</MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem>
                  <MDBNavbarLink href='#abc'>Services</MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem >
               <MDBNavbarLink type='button' bgColor='blue' href="https://calendly.com/ayman-afzal-1/30min?month=2022-08" target="_blank">Contact Us
               </MDBNavbarLink>
                </MDBNavbarItem>
                {/* <MDBNavbarItem>
                  <MDBNavbarButton href='#contact'>Talk To Us</MDBNavbarButton>
                </MDBNavbarItem> */}
                {/* <button
      class="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarButtonsExample"
      aria-controls="navbarButtonsExample"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i class="fas fa-bars"></i>
    </button> */}
                {/* <button type="button" class="btn btn-primary ">
          Sign up for free
        </button> */}
        
        {/* <button type="button" class="btn btn-primary me-3">
          Sign up for free
        </button> */}
        
      
    
                
                {/* <MDBNavbarItem>
                  <MDBNavbarLink disabled href='#' tabIndex={-1} aria-disabled='true'>
                    Disabled
                  </MDBNavbarLink>
                </MDBNavbarItem> */}
              </MDBNavbarNav>
              
            </MDBCollapse>
            {/* <a class="btn btn-primary me-3" href="https://www.google.com" target="_blank">Contact Us</a> */}
          </MDBContainer>
          {/* <a
          class="btn btn-primary me-3"
          href="https://github.com/abdullahjadoon34/istech"
          role="button"
          
          ><text>Talk To Us</text></a> */}
          {/* <a class="btn btn-success" href="https://www.google.com" target="_blank">Contact Us</a> */}
            </MDBNavbar>
    
    
  );
}