import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';

const MainNav = () => {
    return (
    <div id="main-nav">
      <Navbar expand="lg" className="navbar">
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
          <div className="text-to-post">
              <span>TEXT your project to</span>
              <span>+1 (415) 702 3294</span>
          </div>
      </Navbar>
    </div>
    )
}


export default MainNav;