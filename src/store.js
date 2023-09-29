
import { createStore, combineReducers } from 'redux';
import reducers from './reducers/index'
// Import your reducers (you'll need to create these)
import authReducer from './reducers/authReducer';
import jobReducer from './reducers/jobReducer';
import jobDetailReducer from './reducers/jobDetailReducer';
import applicationReducer from './reducers/applicationReducer';

// Combine your reducers into a rootReducer
const rootReducer = combineReducers({
  auth: authReducer,
  job: jobReducer,
  jobDetail: jobDetailReducer,
  application: applicationReducer,
});

// Create the Redux store
const store = createStore(rootReducer);

export default store;