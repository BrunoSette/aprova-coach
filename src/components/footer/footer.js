import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo from '../../logo.png';

function Footer() {
  return (
    <div className="padding-top-80 text-white background-dark padding-bottom-40">
      <Container>
        <Row>
          <Col>Facebook</Col>
          <Col>Instagram</Col>
          <Col>Youtube</Col>
        </Row>
        <Row className="padding-top-40">
          <Col className="text-center">
            <img
              src={logo}
              className="d-inline-block align-top text-center"
              alt="Aprova Coach"
            />
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <sub>© Copyright 2019 Todos os Direitos Reservados</sub>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
