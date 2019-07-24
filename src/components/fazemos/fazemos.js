import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import img1 from '../../assets/images/success.jpg';
import img2 from '../../assets/images/woman.jpg';
import img3 from '../../assets/images/pen-idea-bulb-paper.jpg';
import './fazemos.css';

export default class Fazemos extends Component {
  render() {
    return (
      <div>
        <h1 className="padding-top-80">
          Você não está sozinho nessa caminhada.
        </h1>
        <h3>Estarei ao seu lado te orientando em como ser aprovado...</h3>
        <Container className="padding-top-80">
          <Row>
            <Col>
              <Card style={{ width: '20rem' }}>
                <Card.Img variant="top" src={img1} />
                <Card.Body>
                  <Card.Title className="text-center">
                    Maximize Seus Resultados
                  </Card.Title>
                  <Card.Text>
                    A forma como estudamos é muito importante e pode ser o
                    diferencial para a aprovação. Estudar é sempre bom, mas com
                    as metodologias específicas você pode ficar mais eficiente e
                    isto te ajudará a atingir o seu pleno
                    potencial.Trabalharemos de forma individualizada e buscando
                    aproveitar plenamente o seu tempo disponível para estudo com
                    metas factíveis e um calendário bem organizado.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: '20rem' }}>
                <Card.Img variant="top" src={img2} />
                <Card.Body>
                  <Card.Title className="text-center">
                    Atendimento Individualizado Com Uma Coach para Concursos
                  </Card.Title>
                  <Card.Text>
                    Você será atendido de forma individualizada com dicas e
                    instruções personalizadas. Adaptaremos as sessões de 40 min
                    de duração a sua rotina e de forma particular te atenderei
                    via Skype, FaceTime ou outro meio que você julgar mais
                    adequado
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: '20rem' }}>
                <Card.Img variant="top" src={img3} />
                <Card.Body className="text-center">
                  <Card.Title className="text-center">
                    Motivação Extra
                  </Card.Title>
                  <Card.Text>
                    Juntos buscaremos a forma mais adequada que se encaixe na
                    sua rotina e que leve em consideração os seus limites.
                    Buscaremos juntos uma fórmula para que o seu estudo traga um
                    excelente resultado, ou seja, a sua aprovação no Concurso
                    desejado. Estarei ao seu lado te motivando, cobrado e
                    readaptando todo o seu cronograma que traçaremos juntos.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
