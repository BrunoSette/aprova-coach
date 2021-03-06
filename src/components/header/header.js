import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from '../../logo.png';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import ButtonAgendeSessao from '../buttonAgendeSessao/buttonAgendeSessao.js';

function Header() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="light"
      // sticky="top"
      variant="light"
    >
      <Navbar.Brand href="/">
        <Image src={logo} alt="Aprova Coach" fluid />
      </Navbar.Brand>
      <Container>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="mr-auto">
            <Nav.Link href="#fazemos">O que Fazemos</Nav.Link>
            <Nav.Link href="#vantagens">Vantagens</Nav.Link>
            <Nav.Link href="#quemsou">Quem Sou</Nav.Link>
            <Nav.Link href="#depoimentos">Depoimentos</Nav.Link>
            <Nav.Link href="#contato">Contato</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <ButtonAgendeSessao />
      </Container>
    </Navbar>
  );
}

export default Header;
