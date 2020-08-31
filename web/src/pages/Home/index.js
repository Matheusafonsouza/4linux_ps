import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
import { FiLogOut } from 'react-icons/fi';

import Card from '../../components/Card';

import './styles.css';

export default function Home() {
  const history = useHistory();

  const [apis, setApis] = useState([]);
  const [apiNumber, setApiNumber] = useState('');

  const [name, setName] = useState('');
  const [category, setCategory] = useState('');

  useEffect(() => {
    console.log(category)
    axios.get(`https://api.publicapis.org/entries?category=${category}&title=${name}`).then(response => {
      setApiNumber(response.data.count);

      if (response.data.count === 0) {
        setApis([]);
      } else {
        setApis(response.data.entries);
      }

    });
  }, [category, name]);

  function handleLogout() {
    localStorage.removeItem('token');
    history.push('/login');
  }

  return (
    <div className="home">
      <div className="home-left-bar">
        <Link className="logout" onClick={handleLogout} >
          <FiLogOut />
          logout
        </Link>

        <h1>Número de API's: {apiNumber}</h1>

        <div className="home-input-group">
          <input
            type="text"
            placeholder="Categoria"
            value={category}
            onChange={e => setCategory(e.target.value)}
          />
          <input
            type="text"
            placeholder="Nome"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </div>
      </div>
      <div className="home-right-bar">
        <div className="api-grid">
          {apis.map(api => (
            <Card api={api} />
          ))}
        </div>
      </div>
    </div>
  );
}