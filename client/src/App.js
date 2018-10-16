import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import API from "./utils/API";
import Navbar from "./components/NavBar/NavBar";
import Coinbar from "./components/CoinBar/CoinBar";
import CoinTracker from "./pages/CoinTracker/CoinTracker";
import News from "./pages/News/News";

class App extends Component {
  state = {
    result: {},
  }

  render() {
    return (

      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={CoinTracker} />
            <Route exact path="/tracker" component={CoinTracker} />
            <Route exact path="/aggregator" component={News} />
          </Switch>
          <Coinbar />
        </div>
      </Router>
    );
  }

}

export default App;
