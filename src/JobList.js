import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const JobList = () => {
  const selectedLanguage = useSelector((state) => state.selectedLanguage);
  const jobs = useSelector((state) => state.jobs);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user has selected a language, if not, redirect to the landing page
    if (!selectedLanguage) {
      navigate('/');
    } else {
      // Fetch jobs based on the selected language (replace with your API call)
      const fetchJobs = async () => {
        try {
          const response = await fetch(`https://your-api-url.com/jobs?language=${selectedLanguage}`);
          const data = await response.json();
          dispatch({ type: 'SET_JOBS', payload: data });
        } catch (error) {
          console.error('Error fetching jobs:', error);
        }
      };

      fetchJobs();
    }
  }, [selectedLanguage, dispatch, navigate]);

  return (
    <div>
      <h1>Job List</h1>
      <p>Jobs for {selectedLanguage}</p>
      <ul>
        {jobs.map((job) => (
          <li key={job.id}>
            <a href={`/job/${job.id}`}>{job.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JobList;