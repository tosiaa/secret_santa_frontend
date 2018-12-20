import React from "react";
import { withRouter } from "react-router-dom";
import LoginForm from "./LoginForm";
import axios from "axios";
import { loginEndpoint } from "./Constants";
import AppContext from "../containers/AppContext";

class LoginPage extends React.PureComponent {
  handleSubmit = (login, password) => event => {
    axios
      .post(loginEndpoint, { login, password })
      .then(response => {
        const { data, meta } = response.data;
        this.context.updateToken(meta.token);
        this.props.history.push(`/success?name=${data.name}`);
      })
      .catch(error => {
        console.log(error);
        this.props.history.push("/failure?reason=Invalid login or password");
      });
    event.preventDefault();
  };
  render() {
    return (
      <div>
        <LoginForm handleSubmit={this.handleSubmit} />
        <button onClick={() => this.props.history.push("/register")}>
          register
        </button>
      </div>
    );
  }
}
LoginPage.contextType = AppContext;
export default withRouter(LoginPage);
