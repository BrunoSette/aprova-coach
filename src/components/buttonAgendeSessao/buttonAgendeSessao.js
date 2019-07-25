import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
// import Agendamento from "./../../pages/agendamento";

function ButtonAgendeSessao() {
  return (
    <div className="text-align: center">
      <Link to="/agendamento" target="_blank">
        <Button variant="danger" size="lg">
          Agende Sessão Grátis!
        </Button>
      </Link>
    </div>
  );
}

export default ButtonAgendeSessao;
