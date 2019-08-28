import React, { Component } from 'react';
import { Mixpanel } from '../Mixpanel';

export default class Agendamento extends Component {
  render() {
    Mixpanel.track('View Agendamento Page');
    return (
      <div>
        <iframe
          title="youcanbookme"
          src="https://dianasette.youcanbook.me/"
          width="100%"
          height="1000px"
          allowtransparency="true"
        ></iframe>
      </div>
    );
  }
}
