import React from "react";
import API from "../../utils/API";
import Moment from "moment";
import { Helmet } from "react-helmet";

import './ExchangeCalc.css';

class Converter extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          coin: this.props.coin,
          symbol: this.props.symbol,
          result: null,
          fromCurrency: this.props.symbol,
          toCurrency: "USD",
          amount: 2,
          currencies: [this.props.symbol,"USD"],
        }
    }

    // Initializes the currencies with values from the api
    componentDidMount() {

    }


    convertHandler = () => {
            if (this.state.fromCurrency !== this.state.toCurrency) {
                    if (this.state.fromCurrency === this.props.symbol){
                        const result = this.state.amount * this.props.coin.rawPrice;
                        this.setState({ result: "$" + result.toFixed(7) })
                    }
                    else {
                        const result = this.state.amount / this.props.coin.rawPrice;
                        this.setState({ result: result.toFixed(7) + this.props.symbol })
                    }
            }
            else {
                this.setState({ result: "You cant convert the same currency!" })
            }
    };

    selectHandler = (event) => {
            if (event.target.name === "from") {
                this.setState({ fromCurrency: event.target.value })
            }
            if (event.target.name === "to") {
                this.setState({ toCurrency: event.target.value })
            }
    }

    render() {
        return (
            <div className="Converter">
                <div className="Form">
                    <input
                        name="amount"
                        type="text"
                        value={this.state.amount}
                        onChange={event =>
                            this.setState({ amount: event.target.value })
                        }
                    />
                    <select
                        name="from"
                        onChange={(event) => this.selectHandler(event)}
                        value={this.state.fromCurrency}
                    >
                        {this.state.currencies.map(cur => (
                            <option key={cur}>{cur}</option>
                        ))}
                    </select>
                    <div>TO</div>
                    <select
                        name="to"
                        onChange={(event) => this.selectHandler(event)}
                        value={this.state.toCurrency}
                    >
                        {this.state.currencies.map(cur => (
                            <option key={cur}>{cur}</option>
                        ))}
                    </select>

                    <button onClick={this.convertHandler}>Convert</button>
                </div>
                {this.state.result && 
                    <h3>{this.state.result}</h3>
                }
            </div>
        );
    }
}

export default Converter;