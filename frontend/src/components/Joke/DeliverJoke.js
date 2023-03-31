import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';


import { connect } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getjokebytype } from '../../actions/joke';
import JokeItem from './JokeItemDeliver';





const DeliverJoke = ({
  getjokebytype,
  joke: { jokes, loading },
  auth: { user },
}) => {

  const { selectedOption } = useParams();
  console.log(selectedOption);
  useEffect(() => {
    getjokebytype(selectedOption);
  }, [getjokebytype]);

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

DeliverJoke.propTypes = {
  getjokebytype: PropTypes.func.isRequired,
  joke: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  joke: state.joke,
  auth: state.auth,
});

export default connect(mapStateToProps, { getjokebytype })(DeliverJoke);
