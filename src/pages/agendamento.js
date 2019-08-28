import React, { Component } from 'react';
import MixpanelConsumer from 'react-mixpanel';

export default class Agendamento extends Component {
  render() {
    return (
      <div>
        <MixpanelConsumer>
          {mixpanel => mixpanel.track('View Agendamento Page')}

          <iframe
            title="youcanbookme"
            src="https://dianasette.youcanbook.me/"
            width="100%"
            height="1000px"
            allowtransparency="true"
          ></iframe>
        </MixpanelConsumer>
      </div>
    );
  }
}
