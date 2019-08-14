import React, { Component } from 'react';
import {
  BrowserRouter as
    Router,
  Route,
  Switch
  // BrowserRouter
  // Switch
} from 'react-router-dom';
import './App.css';
import API from "./utils/API";
import Navbar from "./components/NavBar/NavBar";
import Coinbar from "./components/CoinBar/CoinBar";
import CoinTracker from "./pages/CoinTracker/CoinTracker";
import News from "./pages/News/News";
import Chart from "./pages/Chart/Chart";
import Calculator from "./pages/Calculator/Calculator";
import About from "./pages/About/About";
import Exchange from "./pages/Exchange/Exchange";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coins: [],
      symbol: "BTC"
    }
  }

  changeSymbol = (newSymbol) => {
    this.setState({ symbol: newSymbol });

  }

  componentDidMount() {
    API.getMarketCapData()
      .then(res => {
        this.setState({ coins: res.data });
      })
      .catch(err => {
        console.log(err);
      })
  }

  render() {
    if (this.state.coins.length === 0) {
      return <div />
    }
    console.log(this.state.symbol);
    return (

      <Router>
        <div className="App">
          <Navbar
            symbol={this.state.symbol} coins={this.state.coins} changeSymbol={this.changeSymbol} />
          <Switch>
            <Route
              exact
              path="/"
              component={(props) => <CoinTracker {...props} coins={this.state.coins} symbol={this.state.symbol} />} />

            <Route
              exact
              path="/news"
              component={(props) => <News {...props} symbol={this.state.symbol} />} />

            <Route
              exact
              path="/chart"
              component={(props) => <Chart {...props} symbol={this.state.symbol} />} />

            <Route
              exact
              path="/calculator"
              component={(props) => <Calculator {...props} symbol={this.state.symbol} />} />

            <Route
              exact
              path="/exchange"
              component={(props) => <Exchange {...props} symbol={this.state.symbol} />} />

            <Route
              exact
              path="/about"
              component={(props) => <About {...props} symbol={this.state.symbol} />} />

          </Switch>
          <Coinbar />
        </div>
      </Router>
    );
  }

}

export default App;
