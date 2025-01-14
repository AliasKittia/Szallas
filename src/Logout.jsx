import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('jwt');
    navigate('/');
  };

  return (
    <div>
      <h2>Kijelentkezés</h2>
      <button onClick={handleLogout}>kijelentkezés</button>
    </div>
  );
};
