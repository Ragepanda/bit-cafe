import React, { Component } from 'react';
import {BrowserRouter as
  Router,
  Route,
  Redirect,
  Switch
  // BrowserRouter
  // Switch
} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import API from "./utils/API";
import Navbar from "./components/NavBar/NavBar";
import Coinbar from "./components/CoinBar/CoinBar";
import CoinTracker from "./pages/CoinTracker/CoinTracker";
import News from "./pages/News/News";
import Chart from "./pages/Chart/Chart";
import { BrowserRouter } from 'react-router-dom';

class App extends Component {
  state = {
    result: {},
    current_page: "news"
  }

  handlePageChange = page => {
    this.setState({ current_page: page });
  };

  // renderPage = () => {
  //   return (
   
      
    
  //   );

  //   {/* // if (this.state.current_page === "tracker") 
  //   //   return <CoinTracker />;
  //   // else if (this.state.current_page === "news")
  //   //   return <News />;
  //   // else if (this.state.current_page === "chart")
  //   //   return <Chart />; */}

  // }

  render() {
    return (

      <Router>
        <div className="App">
          <Navbar
            currentPage={this.state.current_page}
            handlePageChange={this.handlePageChange} />
          <Switch>
            <Route
              exact
              path="/"
              component={CoinTracker} />

            <Route
              exact
              path="/news"
              component={News} />

            <Route
              exact
              path="/chart"
              component={Chart} />

          </Switch>
          <Coinbar />
        </div>
      </Router>
    );
  }

}

export default App;
