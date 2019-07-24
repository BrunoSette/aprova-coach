import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Glaucia from '../../assets/images/glaucia.jpg';
import Rene from '../../assets/images/rene.jpg';

export default class Testimonials extends Component {
  render() {
    return (
      <div className="background-dark padding-bottom-40 text-white">
        <h2 className="text-center padding-top-80">
          OUÇA O QUE OS MEUS ALUNOS TÊM A DIZER:
        </h2>
        <Container className="padding-top-80 text-center">
          <Row>
            <Col>
              <p>
                "Quero gradecer você pelo incentivo que me deste para concurso
                do INSS, me superei em português que era o meu calo rsrsr. Das
                14 questões acertei 10 errei 1 e deixei 3 em brando. Fiquei em
                11° pra mim, foi uma superação agradeço de coração mesmo se eu
                tivesse feito pra Amazônia eu teria tirado em primeiro lugar,
                mas vou aguardar que falaram que vão chamar. Muito obrigada.
              </p>
              <p>
                <Image src={Glaucia} roundedCircle fluid />
              </p>
              <span>Glaucia Medeiros, Acre</span>
            </Col>
            <Col>
              <p>
                "Eu estudava sem foco, com pouca concentração e desmotivado.
                Além de muito disperso pois não tinha um plano de estudos.
                Depois de iniciar a consultoria essas dificuldades desapareceram
                pois criamos uma agenda de estudos e analisamos as estatísticas
                dos exames anteriores. Daí cresceu bastante a minha confiança e
                passei a ter uma melhor disciplina com meus horários de
                estudo.""
              </p>
              <p>
                <Image src={Rene} roundedCircle fluid />
              </p>
              <span>Rene Lacerda, Rio Grande do Sul</span>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
