import React, { useEffect, useState } from 'react';
import api from '../services/api';

const RecommendedJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await api.get('/jobs/recommendations');
        setJobs(res.data);
      } catch (err) {
        setError(err.response?.data?.message || 'Failed to load jobs');
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  return (
    <div style={container}>
      <div style={jobBox}>
        <h2 style={heading}>Recommended Jobs</h2>

        {loading && <p>Loading jobs...</p>}
        {error && <p style={{ color: 'red' }}>{error}</p>}

        {!loading && !error && jobs.length === 0 && (
          <p>No matching jobs found. Try uploading your resume first.</p>
        )}

        <ul style={{ listStyle: 'none', padding: 0 }}>
          {jobs.map((job, index) => (
            <li key={index} style={jobCard}>
              <h3 style={jobTitle}>{job.title}</h3>
              <p style={company}>{job.company}</p>
              {job.skillsRequired?.length > 0 && (
                <p style={skills}>Skills: {job.skillsRequired.join(', ')}</p>
              )}
              {job.url && (
                <a href={job.url} target="_blank" rel="noopener noreferrer" style={applyLink}>
                  Apply Now
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const container = {
  display: 'flex',
  justifyContent: 'center',
  padding: '2rem',
  minHeight: '80vh',
};

const jobBox = {
  width: '100%',
  maxWidth: '800px',
};

const heading = {
  fontSize: '24px',
  fontWeight: 'bold',
  marginBottom: '1.5rem',
};

const jobCard = {
  border: '1px solid #ddd',
  borderRadius: '8px',
  padding: '1rem',
  marginBottom: '1rem',
  boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
  backgroundColor: '#fff',
};

const jobTitle = {
  fontSize: '18px',
  fontWeight: 'bold',
  marginBottom: '0.5rem',
};

const company = {
  fontSize: '14px',
  color: '#555',
};

const skills = {
  fontSize: '14px',
  color: '#333',
  marginTop: '0.5rem',
};

const applyLink = {
  display: 'inline-block',
  marginTop: '0.75rem',
  color: '#2563eb',
  textDecoration: 'underline',
};

export default RecommendedJobs;
