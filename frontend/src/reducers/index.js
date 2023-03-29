import { combineReducers } from 'redux';

import auth from './auth';
import joke from './joke';

export default combineReducers({
  
  auth,
  joke
 
});