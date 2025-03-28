import React, { useState } from 'react';
import api from '../services/api';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post('/auth/login', { email, password });
      localStorage.setItem('token', res.data.token);
      navigate('/upload-resume');
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div style={container}>
      <form onSubmit={handleLogin} style={formBox}>
        <h2 style={heading}>Login</h2>
        {error && <p style={errorMsg}>{error}</p>}
        <input
          type="email"
          placeholder="Email"
          style={input}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          style={input}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button style={button}>Login</button>
      </form>
    </div>
  );
};

const container = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '80vh',
};

const formBox = {
  width: '100%',
  maxWidth: '400px',
  padding: '2rem',
  border: '1px solid #ddd',
  borderRadius: '8px',
  backgroundColor: '#fff',
  boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
};

const heading = {
  marginBottom: '1rem',
  fontSize: '20px',
  fontWeight: 'bold',
};

const errorMsg = {
  color: 'red',
  marginBottom: '1rem',
};

const input = {
  width: '100%',
  padding: '10px',
  marginBottom: '1rem',
  borderRadius: '4px',
  border: '1px solid #ccc',
  fontSize: '14px',
};

const button = {
  width: '100%',
  backgroundColor: '#2563eb',
  color: '#fff',
  padding: '10px',
  border: 'none',
  borderRadius: '4px',
  fontWeight: 'bold',
  cursor: 'pointer',
};

export default LoginPage;
