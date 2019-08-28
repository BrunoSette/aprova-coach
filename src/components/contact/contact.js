import React, { Component } from 'react';
import ButtonAgendeSessao from '../buttonAgendeSessao/buttonAgendeSessao';
import WhatsappImage from '../../assets/images/whatsapp-button.png';
import Image from 'react-bootstrap/Image';
import { Mixpanel } from '../../Mixpanel';
import ReactGA from 'react-ga';

export default class Contact extends Component {
  render() {
    return (
      <div
        id="contato"
        className="padding-top-80 background-gray text-center padding-bottom-40"
      >
        <h1>Entre em Contato Comigo Agora!</h1>
        <a href="https://wa.me/5581988668342?text=Olá%20Diana!%20Gostaria%20de%20saber%20mais%20sobre%20Coaching!">
          <Image
            src={WhatsappImage}
            alt="Whatsapp"
            fluid
            onClick={() => {
              Mixpanel.track('Whatsapp Contact');
              ReactGA.event({
                category: 'User',
                action: 'Click',
                label: 'Whatsapp'
              });
            }}
          />
        </a>

        <h1>Ou</h1>
        <ButtonAgendeSessao />
      </div>
    );
  }
}
