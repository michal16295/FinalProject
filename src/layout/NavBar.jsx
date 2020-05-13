import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../action/auth";
import "./homePage.css";

const NavBar = ({ auth: { isAuthenticated, loading, user }, logout }) => {
  const guestLinks = (
    <Fragment>
      <li class="fade-in wow" id="delay-2" data-wow-delay=".5s">
        <Link to="/login">Login</Link>
      </li>
      <li class="nav-end fade-in wow" id="delay-3" data-wow-delay=".5s">
        <Link to="register">Register</Link>
      </li>
    </Fragment>
  );

  const authLink = (
    <Fragment>
      <li>
        <Link to="/currentUser">My Profile</Link>
      </li>
      <li>
        <a onClick={logout} href="#!">
          <i className="fas fa-sign-out-alt"></i>
          Logout
        </a>
      </li>
    </Fragment>
  );
  return (
    <div class="main-header">
      <nav>
        <h1 class="fade-in wow" data-wow-delay=".5s">
          <Link to="/">
            <span class="title-color">Gym</span> Fix{" "}
          </Link>
          {user && <span className="welcome"> Hello {user.userName}</span>}
        </h1>

        <ul>{user ? authLink : guestLinks}</ul>
      </nav>
    </div>
  );
};
NavBar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { logout })(NavBar);
