import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Diana from '../../assets/images/diana.jpg';
import Image from 'react-bootstrap/Image';

export default class Apresentacao extends Component {
  render() {
    return (
      <div id="quemsou" className="background-gray padding-bottom-40">
        <Container className="padding-top-80">
          <Row>
            <Col sm>
              <Image src={Diana} alt="Diana Sette" fluid />
            </Col>
            <Col>
              <h3>Coach Diana Sette</h3>
              <p>
                Diana Sette é Professional Coach Certificada pela Sociedade
                Latino Americana de Coach, Consultora especialista em aprovação
                em provas e concursos. Formada em Ciências Econômicas pela UFPE
                e com MBA em Desenvolvimento Regional Sustentável pela UFLA.
              </p>
              <p>
                Aprovada na Caixa Econômica Federal em 2006, onde trabalhou por
                quatro anos. Desta experiência iniciou sua trajetória de
                trabalho na área de técnicas e motivação para o estudo, onde vem
                desenvolvendo suas competências.
              </p>
              <p>
                Professional Coach e Consultora, vem ajudando milhares de
                pessoas a serem aprovadas em Concursos Públicos e no Exame da
                OAB nos últimos 10 anos. Responsável pela área de produtividade
                nos estudos das empresas: ProvasdaOAB, ProvasDirecionadas e
                Estudando Online.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
