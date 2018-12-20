import React from "react";

class RegisterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { login: "", name: "", password: "" };
  }
  handleLoginChange = event => {
    this.setState({ login: event.target.value });
  };
  handlePaswordChange = event => {
    this.setState({ password: event.target.value });
  };
  handleNameChange = event => {
    this.setState({ name: event.target.value });
  };
  render() {
    const { login, name, password } = this.state;
    return (
      <form onSubmit={this.props.handleSubmit(login, name, password)}>
        <label>
          Login:
          <input
            type="text"
            value={this.state.login}
            onChange={this.handleLoginChange}
          />
        </label>
        <label>
          Name:
          <input
            type="text"
            value={this.state.name}
            onChange={this.handleNameChange}
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
        <input type="submit" value="Register" />
      </form>
    );
  }
}

export default RegisterForm;
