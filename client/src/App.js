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
      coin: {},
      symbol: "BTC",
      symbolCoin: []
    }
  }

  changeSymbol = (newSymbol) => {
    this.setState({ symbol: newSymbol });

    var coin = {};
        
    this.state.coins.forEach(coinData => {
      if (coinData.CoinInfo.Internal === newSymbol) {
        coin = coinData;
      }
    });
    console.log(coin);
    this.setState({ coin: coin });
  }

  componentDidMount() {
    API.getMarketCapData()
      .then(res => {
        this.setState({ coins: res.data });
        var coin = {};
        
        this.state.coins.forEach(coinData => {
          if (coinData.CoinInfo.Internal === this.state.symbol) {
            coin = coinData;
          }
        });
        this.setState({ coin: coin });
      })
      .catch(err => {
        console.log(err);
      })
  }

  render() {
    if (this.state.coins.length === 0 && this.state.coin === {}) {
      return <div />
    }

    return (

      <Router>
        <div className="App">
          <Navbar
            symbol={this.state.symbol} coins={this.state.coins} changeSymbol={this.changeSymbol} />
          <Switch>
          <Route
              exact
              path="/"
              component={(props) => <CoinTracker {...props} coins={this.state.coins} symbol={this.state.symbol} coin={this.state.coin} />} />

            <Route
              exact
              path="/home"
              component={(props) => <CoinTracker {...props} coins={this.state.coins} symbol={this.state.symbol} coin={this.state.coin} />} />

            <Route
              exact
              path="/news"
              component={(props) => <News {...props} coin={this.state.coin} symbol={this.state.symbol} />} />

            <Route
              exact
              path="/chart"
              component={(props) => <Chart {...props} coin={this.state.coin}  symbol={this.state.symbol} />} />

            <Route
              exact
              path="/calculator"
              component={(props) => <Calculator {...props} symbol={this.state.symbol} coin={this.state.coin} />} />

            <Route
              exact
              path="/exchange"
              component={(props) => <Exchange {...props} symbol={this.state.symbol} coin={this.state.coin} />} />

            <Route
              exact
              path="/about"
              component={(props) => <About {...props} symbol={this.state.symbol} coin={this.state.coin} />} />

              {/* EXPERIMENTAL STUFF, VARIABLE BASED URLS */}

                <Route
              exact
              path="/"
              component={(props) => <CoinTracker {...props} coins={this.state.coins} symbol={this.state.symbol} coin={this.state.coin} />} />

            <Route
              exact
              path="/home"
              component={(props) => <CoinTracker {...props} coins={this.state.coins} symbol={this.state.symbol} coin={this.state.coin} />} />

            <Route
              exact
              path="/news/:symbol"
              component={(props) => <News {...props} coin={this.state.coin} symbol={this.state.symbol} />} />

            <Route
              exact
              path="/chart/:symbol"
              component={(props) => <Chart {...props} coin={this.state.coin}  symbol={this.state.symbol} />} />

            <Route
              exact
              path="/calculator/:symbol"
              component={(props) => <Calculator {...props} symbol={this.state.symbol} coin={this.state.coin} />} />

            <Route
              exact
              path="/exchange/:symbol"
              component={(props) => <Exchange {...props} symbol={this.state.symbol} coin={this.state.coin} />} />

            <Route
              exact
              path="/about/:symbol"
              component={(props) => <About {...props} symbol={this.state.symbol} coin={this.state.coin} />} />

          </Switch>
          <Coinbar />
        </div>
      </Router>
    );
  }

}

export default App;
