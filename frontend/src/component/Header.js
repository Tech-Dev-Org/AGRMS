import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import '../App.css';

const Header= () => {
  return (
    <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="/" className="text-center">
      AGRMS
    </Navbar.Brand>
  </Navbar>
  );
}

export default Header;
