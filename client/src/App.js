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
    current_page: "home"
  }

  handlePageChange = page => {
    this.setState({ current_page: page });
  };

  renderPage = () => {
    if (this.state.current_page === "home") 
      return <CoinTracker />;
    else (this.state.current_page === "news")
      return <News />;
    
  };

  render() {
    return (

      
        <div className="App">
          <Navbar
            currentPage = {this.state.current_page} 
            handlePageChange = {this.handlePageChange}/>
          {this.renderPage()}
          <Coinbar />
        </div>
      
    );
  }

}

export default App;
