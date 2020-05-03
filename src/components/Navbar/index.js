import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';

import './style.css';

const Navbars = () => {
    return (
      <Navbar bg="light" expand="lg" className="navbar">
      <Navbar.Brand href="#home">Freelancer</Navbar.Brand>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">How it Works</Nav.Link>
          <Nav.Link href="#link">Browse Jobs</Nav.Link>
        </Nav>
      </Navbar.Collapse>
        <div className="login">
          <a href="#login">Log In</a>
          <a href="#signup">Sign Up</a>
        </div>
        <Button className="d-md-block d-none btn" variant="warning">Post a Project</Button>
    </Navbar>
    )
}


export default Navbars;