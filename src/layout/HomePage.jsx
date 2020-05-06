import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import "./homePage.css";

const HomePage = ({ auth: { isAuthenticated, loading } }) => {
  return (
    <Fragment>
      <p className="header-p"></p>
      <div class="call-to-action">
        <h2>Start your journey today!</h2>
        <p>
          <a href="join-now.html">Join now</a>
        </p>
      </div>

      <Fragment>
        <section class="section-1">
          <div class="container">
            <h3 class="section-1-title fade-in wow" data-wow-delay=".5s">
              Why work with us?
            </h3>
            <span class="line fade-in wow" data-wow-delay=".5s">
              Future me is gonna kill me
            </span>
            <p class="section-title-content fade-in wow" data-wow-delay=".5s">
              Because we are the best at what we do!
            </p>
            <div class="flex-container">
              <div class="item-1 fade-in wow" data-wow-delay=".5s">
                <i class="fas fa-x-ray fa-4x"></i>
                <h3>Biggest Gyms</h3>
                <p>
                  Our gyms come with a variety of sections for all types of
                  athletes. They range from tennis courts, basketball courts,
                  swimming pools and gymnasiums,.
                </p>
              </div>

              <div class="item-2 fade-in wow" data-wow-delay=".5s">
                <i class="fas fa-user-md fa-4x"></i>
                <h3>Experienced Personal Trainers</h3>
                <p>
                  The trainers at Strictly Fitness have over 10 years of
                  experience in fitness. You'll get your pick of trainer to best
                  fit your training style and personality.
                </p>
              </div>

              <div class="item-3 fade-in wow" data-wow-delay=".5s">
                <i class="fas fa-stopwatch fa-4x"></i>
                <h3>Best Programs</h3>
                <p>
                  Courses engineered by top athletes from many sports all being
                  thought by our instructors. To ensure you get the best raining
                  in the industry.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section class="section-2">
          <div class="container">
            <h3 class="section-2-title"> Pricing </h3>
            <span class="line-2">Future me is gonna kill me</span>
            <p class="section-title-content section-2-content">
              Pricing structure for our services that cannot be beaten...
            </p>
            <div class="flex-container">
              <div class="item-1">
                <h4 class="pricing-title">Basic</h4>
                <p class="pricing-content">
                  <b>1</b> Pass
                </p>
                <p class="pricing-content">
                  <b>$10</b> /month
                </p>
                <p class="pricing-content">
                  <b>Machine</b> Access
                </p>
                <p class="pricing-content">
                  <b>0</b> Trainers
                </p>
                <p class="pricing-content">
                  <b>0</b> Perks
                </p>
                <p class="pricing-content sign-up-container">
                  <a href="join-now.html" class="sign-up">
                    Sign up
                  </a>
                </p>
              </div>

              <div class="item-2">
                <h4 class="pricing-title-big">STANDARD</h4>
                <p class="pricing-content">
                  <b>2</b> Passes
                </p>
                <p class="pricing-content">
                  <b>$20</b> /month
                </p>
                <p class="pricing-content">
                  <b>Full</b> Access
                </p>
                <p class="pricing-content">
                  <b>1</b> Trainer
                </p>
                <p class="pricing-content">
                  <b>2</b> Perks
                </p>
                <p class="pricing-content sign-up-container">
                  <a href="join-now.html" class="sign-up">
                    Sign up
                  </a>
                </p>
              </div>

              <div class="item-3">
                <h4 class="pricing-title">PRO</h4>
                <p class="pricing-content">
                  <b>3</b> Passes
                </p>
                <p class="pricing-content">
                  <b>$30</b> /month
                </p>
                <p class="pricing-content">
                  <b>Full</b> Access
                </p>
                <p class="pricing-content">
                  <b>5</b> Trainers
                </p>
                <p class="pricing-content">
                  <b>10</b> Perks
                </p>
                <p class="pricing-content sign-up-container">
                  <a href="join-now.html" class="sign-up">
                    Sign up
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>

        <section class="section-3">
          <div class="container fade-in wow" data-wow-delay=".5s">
            <h3>Contact Us</h3>
            <span class="line">Future me is gonna kill me</span>
            <p class="section-title-content">
              Need to get in touch? Fill in the form below for more information:
            </p>
            <form action="index.html" method="post">
              <div class="flex-container">
                <div class="item-1">
                  <input
                    type="email"
                    name="user_email"
                    placeholder="email"
                    class="input"
                  />
                  <input
                    type="text"
                    name="user_name"
                    placeholder="name..."
                    class="input"
                  />
                  <input
                    type="text"
                    name="user_subject"
                    placeholder="subject..."
                    class="input"
                  />
                </div>

                <div class="item-2">
                  <textarea placeholder="message..." class="input"></textarea>
                  <p class="contact-button">
                    <a href="#">Submit</a>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </section>
      </Fragment>
      <footer class="main-footer">
        <div class="flex-container">
          <section class="item-1">
            <h1>
              About{" "}
              <a href="index.html">
                <span class="title-color">Strictly</span> Fitness
              </a>
            </h1>
            <p>
              Strictly Fitness was founded by Derek Hale in 1998 during his
              golden bodybuilding days. He always struggled to find the right
              advice from credible mentors, as the industry filled with fake
              gurus and bodybuilding products. Derek Hale envisioned Strictly
              Fitness as the #1 source for fitness enthusiast. Now it serves as
              training grounds for people all over the country whom are trying
              to take their fitness journey's to the next level.
            </p>
            <p>
              Strictly Fitness will be taking the next step in becoming a
              worldwide gym by opening 22 new locations all over the world in
              2018.
            </p>
            <div class="social-bar">
              <a href="www.facebook.com">
                <i class="social-icon fab fa-facebook-f"></i>
              </a>
              <a href="#">
                <i class="social-icon fab fa-twitter"></i>
              </a>
              <a href="#">
                <i class="social-icon fab fa-instagram"></i>
              </a>
              <a href="#">
                <i class="social-icon fab fa-pinterest-p"></i>
              </a>
              <a href="#">
                <i class="social-icon fab fa-google-plus-g"></i>
              </a>
              <a href="#">
                <i class="social-icon fas fa-rss"></i>
              </a>
            </div>
          </section>

          <section class="item-2">
            <p class="hello">Say hello:</p>
            <p class="contact-info">
              <i class="contact-icon fas fa-map-marker-alt"></i>
              <b>Address:</b> 200 Santa Monica Pier, Santa Monica, CA 90401
            </p>
            <p class="contact-info">
              <i class="contact-icon fas fa-envelope"></i>
              <b>Email:</b>la45@strictlyfitness.com
            </p>
            <p class="contact-info">
              <i class="contact-icon fas fa-phone"></i>
              <b>Phone:</b> (547) 657 9459
            </p>
          </section>
        </div>

        <p class="copyright">
          2018&copy; copyrighted by{" "}
          <a href="index.html">
            <span class="title-color">Strictly</span> Fitness
          </a>
          .
        </p>
        <a href="#top" class="back-to-top">
          <i class="fas fa-angle-up"></i>
        </a>
      </footer>
    </Fragment>
  );
};
HomePage.propTypes = {
  isAuthenticated: PropTypes.bool,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, null)(HomePage);
