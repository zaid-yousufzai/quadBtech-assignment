import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';

const JobDetail = () => {
  const { jobId } = useParams(); // Get the job ID from the route params
  const selectedJob = useSelector((state) => state.selectedJob);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the selectedJob is already in Redux store; if not, fetch it (replace with your API call)
    if (!selectedJob) {
      const fetchJobDetail = async () => {
        try {
          const response = await fetch(`https://your-api-url.com/jobs/${jobId}`);
          const data = await response.json();
          dispatch({ type: 'SET_SELECTED_JOB', payload: data });
        } catch (error) {
          console.error('Error fetching job details:', error);
          // Handle error and potentially redirect to an error page
          navigate('/error');
        }
      };

      fetchJobDetail();
    }
  }, [jobId, selectedJob, dispatch, navigate]);

  if (!selectedJob) {
    return <div>Loading...</div>; // Render a loading indicator while fetching data
  }

  return (
    <div>
      <h1>Job Detail</h1>
      <h2>{selectedJob.title}</h2>
      <p>{selectedJob.description}</p>
      <a href={selectedJob.applyUrl} target="_blank" rel="noopener noreferrer">Apply Now</a>
    </div>
  );
};

export default JobDetail;