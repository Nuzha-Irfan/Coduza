import React, {Fragment,useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Login from './components/auth/Login';
import DeliverJoke from './components/Joke/DeliverJoke'
import ModerateJoke from './components/Joke/ModerateJoke'
import JokeType from './components/Joke/JokeType';
import SubmitJoke from './components/Joke/SubmitJoke';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import store from './store';
import { loadUser } from './actions/auth';
import { connect, Provider } from 'react-redux';
import setAuthToken from './utils/setAuthToken';
if (localStorage.token) {
  setAuthToken(localStorage.token);
}




const App=()=>{
  
  useEffect(() => {
    store.dispatch(loadUser()); // we have access to store and dispatch is a function of store
  }, []);
return (

  
  
  <Provider store={store}>
  <Router>
    <Fragment>
     <Navbar></Navbar>
     <Routes>
      <Route exact path='/' element={<Landing />} />
   
      <Route path='/login' element={<Login />} />
      <Route path='/moderate' element={<ModerateJoke />} />
      <Route path='/deliver/:selectedOption' element={<DeliverJoke />} />
      <Route path='/submit' element={<SubmitJoke />} />
      <Route path='/type' element={<JokeType />} />
     
      
      
     
      </Routes>
      </Fragment>
  </Router>

  
  </Provider>
  );
}

export default App;