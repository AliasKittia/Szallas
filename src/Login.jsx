import React, { useState } from 'react';

export const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your login logic here
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Bejelentkezés</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Felhasználónév</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Jelszó</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Bejelentkezés</button>
      </form>
    </div>
  );
};
