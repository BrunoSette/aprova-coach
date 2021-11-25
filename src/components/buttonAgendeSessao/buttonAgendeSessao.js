import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function ButtonAgendeSessao() {
  return (
    <div className="text-align: center">
      <Link to="https://wa.me/5581988668342?text=Ol%C3%A1%20Diana!%20Gostaria%20de%20saber%20mais%20sobre%Mentoria!" target="_blank">
        <Button variant="danger" size="lg">
          Agende Sessão Grátis!
        </Button>
      </Link>
    </div>
  );
}

export default ButtonAgendeSessao;
