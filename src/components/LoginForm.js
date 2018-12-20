import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { login: "", password: "" };
  }
  handleLoginChange = event => {
    this.setState({ login: event.target.value });
  };
  handlePaswordChange = event => {
    this.setState({ password: event.target.value });
  };

  render() {
    const { login, password } = this.state;
    return (
      <form onSubmit={this.props.handleSubmit(login, password)}>
        <label>
          Login:
          <input
            type="text"
            value={this.state.login}
            onChange={this.handleLoginChange}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={this.state.password}
            onChange={this.handlePaswordChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default LoginForm;
