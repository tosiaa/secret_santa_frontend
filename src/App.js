import React, { Component } from "react";
import "./App.css";
import Routes from "./routes";
import { BrowserRouter as Router } from "react-router-dom";
import AppContext from "./containers/AppContext";

class App extends Component {
  state = {
    token: null,
    updateToken: newToken => {
      this.setState({ token: newToken });
    }
  };
  render() {
    return (
      <div className="App">
        <AppContext.Provider value={this.state}>
          <Router>
            <Routes />
          </Router>
        </AppContext.Provider>
      </div>
    );
  }
}

export default App;
