import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import UploadResume from './pages/UploadResume';
import RecommendedJobs from './pages/RecommendedJobs';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/upload-resume" element={<UploadResume />} />
        <Route path="/recommended-jobs" element={<RecommendedJobs />} />
      </Routes>
    </Router>
  );
}

export default App;
