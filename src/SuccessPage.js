import React from 'react';
import { useSelector } from 'react-redux';

const SuccessPage = () => {
  // Access the submitted application data from the Redux store
  const submittedApplication = useSelector((state) => state.submittedApplication);

  return (
    <div>
      <h1>Application Submitted Successfully</h1>
      <p>Your application for the position of {submittedApplication.jobTitle} has been successfully submitted.</p>
      <h2>Application Details:</h2>
      <p>Name: {submittedApplication.name}</p>
      <p>Email: {submittedApplication.email}</p>
      <p>Cover Letter:</p>
      <p>{submittedApplication.coverLetter}</p>
      {/* Add more application details here */}
    </div>
  );
};

export default SuccessPage;