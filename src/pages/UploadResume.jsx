import React, { useState } from 'react';
import api from '../services/api';
import { useNavigate } from 'react-router-dom';

const UploadResume = () => {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!file) return;

    const formData = new FormData();
    formData.append('resume', file);

    try {
      const res = await api.post('/upload/resume', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      setMessage(`Skills extracted: ${res.data.skills.join(', ')}`);
      setTimeout(() => navigate('/recommended-jobs'), 1500);
    } catch (err) {
      setMessage('Upload failed');
    }
  };

  return (
    <div style={container}>
      <form onSubmit={handleUpload} style={formBox}>
        <h2 style={heading}>Upload Resume</h2>
        {message && <p style={{ color: 'green', marginBottom: '1rem' }}>{message}</p>}
        <input
          type="file"
          accept=".pdf,.docx"
          onChange={(e) => setFile(e.target.files[0])}
          required
          style={{ marginBottom: '1rem' }}
        />
        <button style={button}>Upload</button>
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

const button = {
  width: '100%',
  backgroundColor: '#7c3aed',
  color: '#fff',
  padding: '10px',
  border: 'none',
  borderRadius: '4px',
  fontWeight: 'bold',
  cursor: 'pointer',
};

export default UploadResume;
