// src/reducers/index.js
import { combineReducers } from 'redux';
import authReducer from './authReducer';
import jobReducer from './jobReducer';
import jobDetailReducer from './jobDetailReducer';
import applicationReducer from './applicationReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  jobs: jobReducer,
  jobDetail: jobDetailReducer,
  applications: applicationReducer,
});

export default rootReducer;
