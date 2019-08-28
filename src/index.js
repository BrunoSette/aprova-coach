import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import Agendamento from './pages/agendamento';
import Obrigado from './pages/obrigado';
import * as serviceWorker from './serviceWorker';
import mixpanel from 'mixpanel-browser';
import { MixpanelProvider } from 'react-mixpanel';

mixpanel.init('ed2e51f63610f4376ac1cb3aa056995d');

ReactDOM.render(
  <MixpanelProvider mixpanel={mixpanel}>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={App} />
        <Route path="/agendamento" component={Agendamento} />
        <Route path="/obrigado" component={Obrigado} />
      </Switch>
    </BrowserRouter>
  </MixpanelProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
