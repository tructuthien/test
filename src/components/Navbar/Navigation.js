import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import './Navbar.css';

import logo from '../../assets/images/ocean_logo.png'

const Navigation = () => {

  return (

    <Navbar id="main-nav" className="fixed-top" bg="transparent" variant="light">
      <Container>
        <Navbar.Brand href="/">
          <img
            src={logo}
            width="150"
            className="d-inline-block align-top"
            alt="Ocean logo"
          />
        </Navbar.Brand>
        <Nav>
          <Nav.Link href="/">HOME</Nav.Link>
          <Nav.Link href="/about">ABOUT</Nav.Link>
          <Nav.Link href="/posts">POSTS</Nav.Link>
          <Nav.Link href="/contact">CONTACT</Nav.Link>
        </Nav>
      </Container>
    </Navbar>

  )

}

export default Navigation