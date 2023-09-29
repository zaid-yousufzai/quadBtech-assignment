import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store'; // Import your Redux store
import LoginPage from './LoginPage';
import LandingPage from './LandingPage';
import JobList from './JobList';
import JobDetail from './JobDetail';
import ApplicationForm from './ApplicationForm';
import SuccessPage from './SuccessPage';

function App() {
  return (
    
    <Provider store={store}>
      <Router>
<Routes>        
          {/* Route for the login/signup page */}
          <ul>
            <li><Route path="/login" component={LoginPage} /></li>

          {/* Route for the landing page */}
          <Route path="/" exact component={LandingPage} />

          {/* Route for the job list page */}
          <Route path="/job-list" component={JobList} />

          {/* Route for the job detail page */}
          <Route path="/job/:jobId" component={JobDetail} />

          {/* Route for the application form page */}
          <Route path="/apply" component={ApplicationForm} />

          {/* Route for the success page */}
          <Route path="/success" component={SuccessPage} />
          </ul>
          </Routes>
      </Router>
    
    </Provider>
    
  );
}

export default App;
