import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth';

const Login = ({login,isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  if (isAuthenticated) {
    return <Navigate to="/moderate" />;
  }

  return (
    

<div class="login-form-bd">
  <div class="form-wrapper">
    <div class="form-container">
      <h1> Please Login</h1>
      <form onSubmit={onSubmit}>
        <div class="form-group">
          <input type="email"  placeholder="Email Address"
          className="form-control form-control-sm"
          name="email"
          value={email}
          onChange={onChange} required/>
         
        </div>

        <div class="form-group">
          <input type="password" placeholder="Password"
          className="form-control form-control-sm"
          name="password"
          value={password}
          onChange={onChange}
          minLength="6"
          required/>
          
        </div>
        <input type="submit" class="login-btn" value="Login"/>
       
      </form>
    </div>
  </div>
</div>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(Login);

