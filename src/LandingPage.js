import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const [language, setLanguage] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  const handleSearch = () => {
    // Dispatch the selected language to Redux store
    dispatch({ type: 'SET_SELECTED_LANGUAGE', payload: language });
    
    // Redirect the user to the job list page using React Router
    navigate('/job-list');
  };

  return (
    <div>
      <h1>Landing Page</h1>
      <p>Enter the programming language you're looking for a job in:</p>
      <input
        type="text"
        placeholder="e.g., JavaScript, Python"
        value={language}
        onChange={handleLanguageChange}
      />
      <button onClick={handleSearch}>Search Jobs</button>
    </div>
  );
};

export default LandingPage;