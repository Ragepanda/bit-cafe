import React from "react";
import {NavLink } from 'react-router-dom'
import SearchBar from './SearchBar'
import './NavBar.css';
class Navbar extends React.Component{

  state = {
		coins: []
  }
  
  componentDidMount(){
    this.setState({coins: this.props.coins});
  }

  render(){
    return(
  <nav className="navbar navbar-expand-lg fixed-top navbar-dark" id="navyBar">
    <a className="navbar-brand" id="navyBar" href="/">
      BitCafe
     </a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    	<span className="navbar-toggler-icon"></span>
  	</button>

       <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <NavLink className="nav-link" to="/">Home</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/chart">{this.props.symbol} Chart</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/exchange">{this.props.symbol} Exchange</NavLink>
      </li>
      <li className="nav-item">
          <NavLink className="nav-link" to="/news">{this.props.symbol} News</NavLink>
      </li>
      <li className="nav-item">
          <NavLink className="nav-link" to="/calculator">{this.props.symbol} Calculator</NavLink>
      </li>
      <li className="nav-item">
          <NavLink className="nav-link" to="/about">About {this.props.symbol}</NavLink>
      </li>
     <li className="nav-item">
        <SearchBar classname="nav-link" symbol={this.props.symbol} coins = {this.props.coins} changeSymbol = {this.props.changeSymbol}> </SearchBar>
      </li>
    </ul>
  </div>
  </nav>
    );}
};

export default Navbar;