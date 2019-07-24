import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ButtonAgendeSessao from '../buttonAgendeSessao/buttonAgendeSessao';
import skype from '../../assets/images/skype.jpg';

export default class Agende extends Component {
  render() {
    return (
      <Container className="padding-top-80">
        <Row>
          <Col>
            <h2 className="text-center padding-top-80">
              Agende sua primeira sessão experimental de Coaching Grátis Agora!
            </h2>
            <p className="text-center">
              Agende uma primeira sessão agora para nos conhecermos e juntos
              avaliarmos se o seu perfil se enquadra no trabalho proposto.
            </p>
            <ButtonAgendeSessao className="text-center" />
          </Col>
          <Col>
            <img
              src={skype}
              className="d-inline-block align-top"
              alt="Aprova Coach"
            />
          </Col>
        </Row>
      </Container>
    );
  }
}
