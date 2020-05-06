import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../action/auth";
import "./homePage.css";

const NavBar = ({ auth: { isAuthenticated, loading, user }, logout }) => {
  const guestLinks = (
    <ul>
      <li>
        <Link to="/register">Register</Link>
      </li>
      <li>
        <Link to="/login">
          <i className="fas fa-sign-in-alt"> </i> Login
        </Link>
      </li>
    </ul>
  );

  const authLink = (
    <ul>
      <li>
        <Link to="/currentUser">My Profile</Link>
      </li>
      <li>
        <a onClick={logout} href="#!">
          <i className="fas fa-sign-out-alt"></i>
          Logout
        </a>
      </li>
    </ul>
  );
  return (
    <div class="main-header">
      <nav>
        <h1 class="fade-in wow" data-wow-delay=".5s">
          <Link to="/">
            <span class="title-color">Gym</span> Fix
          </Link>
        </h1>
        <ul>
          <li class="fade-in wow" id="delay-1" data-wow-delay=".5s">
            <a href="index.html">Home</a>
          </li>
          <li class="fade-in wow" id="delay-2" data-wow-delay=".5s">
            <Link to="/login">Login</Link>
          </li>
          <li class="nav-end fade-in wow" id="delay-3" data-wow-delay=".5s">
            <Link to="register">Register</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
NavBar.propTypes = {
  isAuthenticated: PropTypes.bool,
  logout: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { logout })(NavBar);
