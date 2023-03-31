import React from 'react'
import { Link } from 'react-router-dom';
export const Landing = () => {
  return (
    <section className="landing">
  
      <div className="landing-inner">
        <h1 className="x-large">Laugh Factory</h1>
        <h1 className="x-large"></h1>
        <div className="buttons">
        <Link to="/type" class="btn btn-primary">View Jokes</Link>
          <Link to="/submit" class="btn btn-light">Submit a Joke</Link>
        </div>
     
    </div>
  </section>
  )
}

export default Landing;