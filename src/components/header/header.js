import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from '../../logo.png';
import ButtonAgendeSessao from '../buttonAgendeSessao/buttonAgendeSessao.js';

function Header() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="light"
      sticky="top"
      variant="light"
    >
      <Navbar.Brand href="#home">
        <img
          src={logo}
          className="d-inline-block align-top"
          alt="Aprova Coach"
        />
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#fazemos"></Nav.Link>
        <Nav.Link href="#fazemos">O que Fazemos</Nav.Link>
        <Nav.Link href="#vantagens">Vantagens</Nav.Link>
        <Nav.Link href="#depoimento">Depoimento</Nav.Link>
        <Nav.Link href="#contato">Contato</Nav.Link>
      </Nav>
      <ButtonAgendeSessao />
    </Navbar>
  );
}

export default Header;
