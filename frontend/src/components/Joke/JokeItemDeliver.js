import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';



const JokeItem = ({ joke:{_id,title,body,type} }) => {
    const [value, SetValue] = useState('');
  
  
 
  
    
  
    return (
      <Fragment>
   
  
  <div class="card-columns ">
   
    <div class= "card bg-dark text-white mx-3 mb-3" key={_id}>
      <div class="card-body">
        <h5 class="card-title">{title}</h5>
        <p class="card-text">{body}</p>
        
      </div>
      <div className="card-footer"> 
        <small>{type}</small>
      </div>
    </div>
    
  </div>
  
      
      </Fragment>
    );
  };
  
  JokeItem.propTypes = {
    joke: PropTypes.array.isRequired,
 
  };
  
  export default connect(null, {  })(JokeItem);
  