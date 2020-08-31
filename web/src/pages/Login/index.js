import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import api from '../../services/api';

import './styles.css';

export default function Login() {
  const history = useHistory();

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  function handleLogin(e) {
    e.preventDefault();

    api.post('/login', { name, password }).then(response => {
      localStorage.setItem('token', response.data.token);
      history.push('/');
    }).catch(response => {
      alert(response);
    })
  }

  return (
    <div className="home">
      <div className="login-left-bar">
        <h1>Olá!</h1>
        <span>Você ainda não tem uma conta?</span>
        <button type="button">Criar conta</button>
      </div>
      <div className="login-right-bar">
        <h1>Logar</h1>
        <form onSubmit={handleLogin}>
          <div className="login-input-group">
            <input type="text" placeholder="Nome" value={name} onChange={e => setName(e.target.value)} />
            <input type="text" placeholder="Senha" value={password} onChange={e => setPassword(e.target.value)} />
          </div>
          <button type="submit" >Entrar</button>
        </form>
      </div>
    </div>
  );
}