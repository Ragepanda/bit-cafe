import React, { Component } from 'react';
import {BrowserRouter as
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


class App extends Component {
  state = {
    result: {},
    coins: [],
    symbol: "BTC"
  }

  changeSymbol = (newSymbol)=>{
    console.log(newSymbol);
    this.setState({symbol: newSymbol});
    console.log(this.state.symbol);
  }

  componentDidMount(){
    API.getMarketCapData()
    .then(res =>{
      this.setState({coins: res.data});
    })
    .catch(err =>{
      console.log(err);
    })
  }

  render() {

    return (

      <Router>
        <div className="App">
          <Navbar
            coins = {this.state.coins} changeSymbol = {this.changeSymbol}/>
          <Switch>
            <Route
              exact
              path="/"
              component={ (props) => <CoinTracker {...props} symbol = {this.state.symbol} changeSymbol = {this.changeSymbol}/>} />

            <Route
              exact
              path="/news"
              component={ (props) => <News {...props} symbol = {this.state.symbol} changeSymbol = {this.changeSymbol}/>} /> 

            <Route
              exact
              path="/chart"
              component={ (props) => <Chart {...props} symbol = {this.state.symbol} changeSymbol = {this.changeSymbol}/>} /> 

          </Switch>
          <Coinbar />
        </div>
      </Router>
    );
  }

}

export default App;
