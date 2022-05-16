import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function ButtonAgendeSessao() {
  return (
    <div className="text-align: center">
      <a href="https://wa.me/5581988668342?text=Olá%20Diana!%20Gostaria%20de%20saber%20mais%20sobre%20Mentoria!">
       
        <Button variant="danger" size="lg">
          Agende Sessão Grátis!
        </Button>
         </a>
      
    </div>
  );
}

export default ButtonAgendeSessao;
