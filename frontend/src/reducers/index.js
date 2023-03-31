import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth'
import joke from './joke'
export default combineReducers({
  alert,
  auth,
  joke
  
 
});