import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';
export const Navbar = ({auth: { isAuthenticated }, logout}) => {
  const authLinks = (
   <><Link to={'/'}> <button type="button" class="btn btn-primary mr-2" onClick={logout}>Logout</button></Link>
    <Link to="/moderate"> <button type="button" class="btn btn-light">Review Jokes</button></Link>
   </>
      
  );

  const guestLinks = (
    <><Link to={'/login'}><button type="button" class="btn btn-primary mr-2">Login</button></Link>
    <Link to="/submit"> <button type="button" class="btn btn-light">Submit a Joke</button></Link>
    </>
  );
  return (
    <nav class="navbar ">
  
    <div class="container-fluid">
      <h1 class="navbar-brand"><Link to="/">
         
         <i class="fa fa-home" style={{'font-size':'24px','color':'black' }}></i>
         </Link></h1>

      <div className="ml-auto">
        
      {isAuthenticated ? authLinks : guestLinks}</div>
      
    </div>
  </nav>
  )
}

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logout })(Navbar);