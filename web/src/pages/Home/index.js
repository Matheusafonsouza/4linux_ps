import React from 'react';
import { FiLogOut } from 'react-icons/fi';

import Card from '../../components/Card';

import './styles.css';

export default function Home() {
  return (
    <div className="home">
      <div className="left-bar">
        <span>
          <FiLogOut />
          logout
        </span>

        <h1>Número de API's: 123</h1>

        <div className="input-group">
          <input type="text" placeholder="Categoria" />
          <input type="text" placeholder="Nome" />
        </div>
      </div>
      <div className="right-bar">
        <div className="api-grid">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}