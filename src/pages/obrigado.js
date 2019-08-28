import React, { Component } from 'react';
import Logo from '../../src/logo.png';
import './obrigado.css';

export default class Agendamento extends Component {
  render() {
    return (
      <div className="padding-top-40 padding-bottom-20">
        <img className="padding-bottom-20" src={Logo} alt="Logo" />

        <h1> Agendamento Confirmado!</h1>
        <h4 className="padding-top-40 padding-bottom-20">
          Na sessão conversaremos sobre a metodologia que utilizamos e buscarei
          entender se o Coaching é realmente a melhor ferramenta para o que você
          está buscando neste momento.
        </h4>
        <h4 className="padding-top-20 padding-bottom-20">
          <b>Essa sessão será experimental e totalmente gratuita</b>, com
          duração aproximada de 40 minutos. Tenho certeza, que você já poderá
          ser capaz de perceber o potencial da Metodologia e como a mesma poderá
          te ajudar a alavancar o seu estudo para possibilitar o alcance da sua
          aprovação.
        </h4>
        <h4 className="padding-top-20 padding-bottom-40">
          <div className="padding-bottom-20">
            Algumas recomendações para que nosso atendimento online seja de alta
            qualidade:
          </div>
          <ul>
            <li>
              Utilizaremos o Skype ou Whatsapp onde conversaremos através de uma
              chamada com vídeo
            </li>
            <li>Procure um lugar tranquilo e silencioso</li>
            <li>
              Vamos utilizar conversa com vídeo, verifique se sua câmera, fone
              de ouvido (ou áudio do computador) e microfone estão funcionando
              adequadamente
            </li>
            <li>Tenha em mãos papel e caneta.</li>
          </ul>
        </h4>
      </div>
    );
  }
}
