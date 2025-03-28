import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{
      background: '#1f2937', // dark gray
      color: '#fff',
      padding: '1rem 2rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '2rem',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>Job Recommender</h1>
      <div style={{ display: 'flex', gap: '1.5rem' }}>
        <Link to="/register" style={navLinkStyle}>Register</Link>
        <Link to="/login" style={navLinkStyle}>Login</Link>
        <Link to="/upload-resume" style={navLinkStyle}>Upload Resume</Link>
        <Link to="/recommended-jobs" style={navLinkStyle}>View Jobs</Link>
      </div>
    </nav>
  );
};

const navLinkStyle = {
  color: '#fff',
  textDecoration: 'none',
  fontWeight: '500',
  transition: 'color 0.2s',
};

export default Navbar;
