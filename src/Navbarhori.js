import React from 'react';
import './App.css'
// import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import { Container, Row, Col, Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import Dashboard from './Components/Dashboard';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
//import {LinkContainer} from 'react-router-bootstrap';


function Navbarhori(){
  return(

    // <div className='text-right flex-column'>
    //   <Nav defaultActiveKey="/dashboard" className="flex-column bg-grey">
    //   <Nav.Link href="/home" className='p-2 w-5'><i class="fa fa-th-large text-white" aria-hidden="true"></i></Nav.Link> 
    //   <Nav.Link eventKey="link-1" className='text-white'><i class="fa-solid fa-envelope"></i></Nav.Link>
    //   <Nav.Link eventKey="link-1" className='text-white'><i class="fa fa-cog" aria-hidden="true"></i></Nav.Link>
    //   <Nav.Link eventKey="link-2"><i className="fa-solid fa-bell text-white"></i></Nav.Link>
    //   {/* <Nav.Link eventKey="disabled" disabled>

    //     Disabled
    //   </Nav.Link> */}
    // </Nav>
    // </div>
  <div class="flex-column">
  <a href="#" class="active">Home</a>
  <Nav.Link eventKey="link-1" className='text-white'><i class="fa-solid fa-envelope"></i></Nav.Link>
     <Nav.Link eventKey="link-1" className='text-white'><i class="fa fa-cog" aria-hidden="true"></i></Nav.Link>
     <Nav.Link eventKey="link-2"><i className="fa-solid fa-bell text-white"></i></Nav.Link>
</div>






    // <div className='Navbarele'>
    // <Navbar expand="lg" className="bg-body-tertiary">
    //   <Container fluid>
    //     <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
    //     <Navbar.Toggle aria-controls="navbarScroll" />
    //     <Navbar.Collapse id="navbarScroll">
    //     <Form className="d-flex">
    //         <Form.Control
    //           type="search"
    //           placeholder="Search"
    //           className="me-2"
    //           aria-label="Search"
    //         />
    //         {/* <Button variant="outline-success">Search</Button> */}
    //       </Form>
    //       <div className='Navele2'>
    //       <Nav
    //         className="Navele2"
    //         // style={{ maxHeight: '100px' }}
    //         navbarScroll
    //       >
    //         <Nav.Link href="#action1">Home</Nav.Link>
    //         <Nav.Link href="#action2">Link</Nav.Link>
    //         {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
    //           <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
    //           <NavDropdown.Item href="#action4">
    //             Another action
    //           </NavDropdown.Item>
    //           <NavDropdown.Divider />
    //           <NavDropdown.Item href="#action5">
    //             Something else here
    //           </NavDropdown.Item>
    //         </NavDropdown> */}
    //         <Nav.Link href="#" disabled>
    //           Link
    //         </Nav.Link>
    //       </Nav>
    //       </div>
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>
    // </div>
  );
}
export default Navbarhori;


{/* //     <Navbar expand="lg" className="bg ">
    //     <Container fluid>
    //     <Navbar.Brand href="#home"><i class="fa-solid fa-compact-disc text-white "></i>
    //     <div class="sidebar me-4">
    //       <a href="#home"><i class="fa fa-fw fa-home mt-5"></i> </a>
    //       <a href="#services"><i class="fa fa-fw fa-wrench"></i> </a>
    //       <a href="#clients"><i class="fa fa-fw fa-user"></i> </a>
    //       <a href="#contact"><i class="fa fa-fw fa-envelope"></i></a>
    //     </div>
    // {/* <img width='130px' src='https://static.wixstatic.com/media/cc2bbf_f1069f65a82f45e19c0de54a98b6f3c3~mv2.png/v1/fill/w_282,h_89,al_c,usm_0.66_1.00_0.01,enc_auto/Carousel%20Logo%20and%20shdw%20cmyk_edited.png'></img> */}
    //       </Navbar.Brand>
    //       <Navbar.Toggle aria-controls="navbarScroll" />
    //       <Navbar.Collapse id="navbarScroll">
    //         <Nav
    //           className="me-auto my-2 my-lg-0"
    //           style={{ maxHeight: '100px' }}
    //           navbarScroll
    //         >
    //           <Nav.Link href="#action1" className='text-white'><i class="fa-solid fa-house-user ms-1"></i>Home</Nav.Link>
    //           <Nav.Link href="#action2" className='text-white'>Link</Nav.Link>
             
    //         </Nav>
    //         <Form className="d-flex">
    //           <Form.Control
    //             type="search"
    //             placeholder="Search"
    //             className="me-2"
    //             aria-label="Search"
    //           />
    //           <Button variant="outline-success">Search</Button>
    //         </Form>
    //       </Navbar.Collapse>
    //     </Container>
        
    //   </Navbar> */}