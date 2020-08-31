import React from 'react';

import './styles.css';

export default function Card({ api }) {
  return (
    <div className="api">
      <div className="left-api">
        <h1>{api.API} / {api.Category}</h1>
        <span className="description">{api.Description}</span>
        <a href={api.Link} className="link">{api.Link}</a>
      </div>
      <div className="right-api">
        <span>https: {api.HTTPS}</span>
        <span>cors: {api.Cors}</span>
        <span>auth: {api.Auth}</span>
      </div>
    </div>
  );
}