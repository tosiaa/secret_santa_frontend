import React from "react";
import { withRouter } from "react-router-dom";
import RegisterForm from "./RegisterForm";
import axios from "axios";
import { registerEndpoint } from "./Constants";
import AppContext from "../containers/AppContext";

class RegisterPage extends React.PureComponent {
  handleSubmit = (login, name, password) => event => {
    axios.post(registerEndpoint, { login, name, password });
    this.props.history.push(`/login`);
    event.preventDefault();
  };
  render() {
    return (
      <div>
        <RegisterForm handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}
RegisterPage.contextType = AppContext;
export default withRouter(RegisterPage);
