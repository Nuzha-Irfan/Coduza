import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';


import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getjokes } from '../../actions/joke';
import JokeItem from './JokeItem';





const ModerateJoke = ({
  getjokes,
  joke: { jokes, loading },
  auth: { user },
}) => {
  useEffect(() => {
    getjokes();
  }, [getjokes]);

  return (
    <Fragment>
      <section className="landing1">
        
        <div className="landing-inner1">

        <div className="container">
        <div class="row">
      {
        jokes.map( joke =>(
          <div class="col-sm-4">
          <JokeItem key={joke._id} joke={joke}></JokeItem>
          </div>
        ))
      }
       
      </div>
      </div>
      </div>
      </section>
    </Fragment>

    
  );
};

ModerateJoke.propTypes = {
  getjokes: PropTypes.func.isRequired,
  joke: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  joke: state.joke,
  auth: state.auth,
});

export default connect(mapStateToProps, { getjokes })(ModerateJoke);
