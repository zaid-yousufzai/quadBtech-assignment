import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const ApplicationForm = () => {
  const selectedJob = useSelector((state) => state.selectedJob);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [coverLetter, setCoverLetter] = useState('');
  // Add more state variables as needed for form fields

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Create an application object with form data
    const application = {
      name,
      email,
      coverLetter,
      // Add more fields here
    };

    // Dispatch the application data to the Redux store
    dispatch({ type: 'SUBMIT_APPLICATION', payload: application });

    // Clear form fields after submission
    setName('');
    setEmail('');
    setCoverLetter('');

    // Redirect to a success page using React Router
    navigate('/success');
  };

  return (
    <div>
      <h1>Application Form</h1>
      <h2>Applying for: {selectedJob.title}</h2>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Cover Letter:</label>
          <textarea
            value={coverLetter}
            onChange={(e) => setCoverLetter(e.target.value)}
            required
          />
        </div>
        {/* Add more form fields as needed */}
        <button type="submit">Submit Application</button>
      </form>
    </div>
  );
};

export default ApplicationForm;