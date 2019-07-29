import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUserCheck,
  faCalendarDay,
  faBullseye,
  faTrophy,
  faTachometerAlt,
  faBookOpen
} from '@fortawesome/free-solid-svg-icons';

export default class Metodologia extends Component {
  render() {
    return (
      <div id="vantagens" className="padding-top-80 padding-bottom-20">
        <h1 className="text-center">
          Consultoria especializada que vai multiplicar suas chances de ser
          aprovado!
        </h1>
        <h3>Metodologia utilizada no processo:</h3>
        <Container className="padding-top-80">
          <Row>
            <Col sm className="text-center">
              <FontAwesomeIcon icon={faBookOpen} color="red" size="4x" />
              <h2 className="text-center">Criação das Suas Metas</h2>
              <p>
                Sem meta dificilmente chega-se a algum lugar. Todo candidato a
                um Concurso precisa ter bem definido o objetivo a ser alcançado,
                pois no meio do caminho muitos fatores para desviar a sua
                atenção e o seu objetivo aparecerão.
              </p>
            </Col>
            <Col sm className="text-center">
              <FontAwesomeIcon icon={faCalendarDay} color="red" size="4x" />
              <h2 className="text-center">
                Criação do Seu Cronograma de Estudos
              </h2>
              <p>
                Desta forma você consegue acompanhar seu desempenho e saber
                exatamente quando deve retornar de possíveis fatores que te
                desviam do seu caminho.
              </p>
            </Col>
            <Col sm className="text-center">
              <FontAwesomeIcon icon={faUserCheck} color="red" size="4x" />
              <h2 className="text-center">Acompanhamento Individualizado</h2>
              <p>
                Que tal ter uma ajudinha especializada para te ajudar a
                organizar as matérias e os seus horários disponíveis? Que tal
                ter uma pessoa acompanhando semanalmente se as suas metas estão
                sendo atingidas e como reorganizar o seu tempo para que isso
                seja possível? Pois bem, essa pessoa sou eu :)
              </p>
            </Col>
          </Row>
          <Row>
            <Col sm className="text-center">
              <FontAwesomeIcon icon={faTachometerAlt} color="red" size="4x" />
              <h2 className="text-center">Monitore Sua Performance</h2>
              <p>
                Estaremos juntos verificando sua evolução nos estudos de cada
                matéria e medindo semanalmente o seu desempenho para buscarmos a
                excelência no seu aproveitamento.
              </p>
            </Col>
            <Col sm className="text-center">
              <FontAwesomeIcon icon={faTrophy} color="red" size="4x" />
              <h2 className="text-center">Mais Motivação e Confiança</h2>
              <p>
                Estarei ao seu lado para te motivar e mostrar que com esforço
                conseguimos atingir os nossos objetivos. Vou te ajudar a confiar
                em si mesmo, pois assim facilitará todo o processo.
                Tranquilidade e confiança são os dois objetivos que atingiremos.
              </p>
            </Col>
            <Col sm className="text-center">
              <FontAwesomeIcon icon={faBullseye} color="red" size="4x" />
              <h2 className="text-center">Preparação Objetiva</h2>
              <p>
                Vamos discutir várias formas de aprendizagem de conteúdo e
                definir quais delas se enquadram melhor a sua rotina de estudo.
                Faremos uma combinação de metodologias para que seu estudo seja
                objetivo e direcionado ao edital do seu Concurso.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
