import { Switch, Route, Redirect } from "react-router-dom";
import React from "react";
import HomePage from "./components/HomePage";
import BitcoinPage from "./components/BitcoinPage";
import ErrorPage from "./components/ErrorPage";
import LoginPage from "./components/LoginPage";
import FailurePage from "./components/FailurePage";
import SuccessPage from "./components/SuccessPage";
import RegisterPage from "./components/RegisterPage";

export default () => (
  <Switch>
    <Route exact path="/login" component={LoginPage} />
    <Route exact path="/register" component={RegisterPage} />
    <Route exact path="/btc" component={BitcoinPage} />
    <Route exact path="/home" component={HomePage} />
    <Route exact path="/failure" component={FailurePage} />
    <Route exact path="/success" component={SuccessPage} />
    <Route exact path="/" render={() => <Redirect to="/login" />} />

    <Route component={ErrorPage} />
  </Switch>
);
