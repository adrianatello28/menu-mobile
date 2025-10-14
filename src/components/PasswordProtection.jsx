import React, { useState } from 'react';
import './PasswordProtection.css';

const PasswordProtection = ({ onSuccess }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === 'MELI') {
      onSuccess();
    } else {
      setError(true);
      setTimeout(() => setError(false), 2000);
    }
  };

  return (
    <div className="password-protection">
      <div className="password-protection__container">
        <h1 className="password-protection__title">Ingresar Contraseña</h1>
        <form onSubmit={handleSubmit} className="password-protection__form">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={`password-protection__input ${error ? 'password-protection__input--error' : ''}`}
            placeholder=""
            autoFocus
          />
          {error && <p className="password-protection__error">Contraseña incorrecta</p>}
          <button type="submit" className="password-protection__button">
            Acceder
          </button>
        </form>
      </div>
    </div>
  );
};

export default PasswordProtection;

