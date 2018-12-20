import React from "react";
import axios from "axios";
import { get } from "lodash";
import { withRouter } from "react-router-dom";

class BitcoinPage extends React.Component {
  state = { price: null };

  constructor(props) {
    super(props);
    this.updatePrice();
  }

  componentDidMount() {
    this.interval = setInterval(this.updatePrice, 10000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  updatePrice = () => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/api/v1/users`)
      .then(response => console.log(response));
    axios
      .get("https://api.coindesk.com/v1/bpi/currentprice/PLN.json")
      .then(response => {
        const newPrice = get(response, "data.bpi.PLN.rate");
        if (newPrice) {
          this.setState({ price: newPrice });
        }
      });
  };

  render() {
    return (
      <div className="BitcoinPage">
        {`Current bitcoin price: ${this.state.price} PLN.`}
        <br />
        <button onClick={() => this.props.history.push("/home")}>
          TAKE ME HOME
        </button>
      </div>
    );
  }
}

export default withRouter(BitcoinPage);
