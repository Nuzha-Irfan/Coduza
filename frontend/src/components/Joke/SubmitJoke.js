import React, { Fragment, useState } from 'react';

import { connect } from 'react-redux';
import { Submit } from '../../actions/joke';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const SubmitJoke = ({ Submit}) => {
  const [formData, setFormData] = useState({
    title:'',
    body:'',
    type:''
  });
  const navigate = useNavigate();
  const { title,body,type } = formData;
  const onchange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onsubmit = async (e) => {
    e.preventDefault();
    //console.log(formData);
    Submit(formData, navigate);
  };
  return (
    <Fragment>
        <div class="login-form-bd">
    <div class="form-wrapper">
      <div class="form-container">
        <h1>Submit a Joke</h1>
           
        <form  onSubmit={(e) => onsubmit(e)}>
          <div className="form-group">
           
            
            <input
              
              type='text'
              className="form-control form-control-sm"
              placeholder='title'
              name='title'
              value={title}
              onChange={(e) => onchange(e)}
              
            />
          </div>
          <div className="form-group">
            
           
            <input
              type='text'
              className="form-control form-control-sm"
              placeholder='Joke'
              name='body'
              value={body}
              onChange={(e) => onchange(e)}
              
            />
          </div>
         
          <div className='form-group'>
           
            
            <select
              
              name='type'
              className="form-control form-control-sm"
              value={type}
              onChange={(e) => onchange(e)}
            >
              <option value='0'>* Select type of Joke</option>
              <option value='Wierd'>Wierd</option>
              <option value='Funny'>Funny</option>
              
              
            </select>
          </div>
          
          
          <input type='submit' className='btn btn-primary btn-block login-btn' value='Confirm' />
          <Link to='/'>
            <input type='reset' className='btn btn-primary btn-block login-btn' value='Cancel' />
          </Link>
        </form>
        </div>
        </div>
        </div>
    
    </Fragment>
  );
};

SubmitJoke.propTypes = {
  Submit: PropTypes.func.isRequired,
};

export default connect(null, { Submit })(SubmitJoke);
