import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import http from "./services/httpService";
import { loadUser } from "./action/auth";
import HomePage from "./layout/HomePage";
import NavBar from "./layout/NavBar";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import CollectData from "./components/collectData/CollectData";
import TrainedData from "./components/trainedData/TrainedData";

import "./App.css";

if (localStorage.token) {
  http.setJwt(localStorage.token);
}
const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <NavBar />
          <Route exact path="/" component={HomePage}></Route>

          <Switch>
            <Route exact path="/login" component={Login}></Route>
            <Route exact path="/register" component={Register}></Route>
            <Route exact path="/collectData" component={CollectData}></Route>
            <Route exact path="/trainedData" component={TrainedData}></Route>
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
