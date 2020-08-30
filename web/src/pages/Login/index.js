import React from 'react';

import './styles.css';

export default function Login() {
  return (
    <div className="home">
      <div className="left-bar">
        <h1>Olá!</h1>
        <span>Você ainda não tem uma conta?</span>
        <button type="button">Criar conta</button>
      </div>
      <div className="right-bar">
        <h1>Logar</h1>
        <form>
          <div className="input-group">
            <input type="text" />
            <input type="text" />
          </div>
          <button>Entrar</button>
        </form>
      </div>
    </div>
  );
}