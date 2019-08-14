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
        <NavLink className="nav-link" to="/">Tracker</NavLink>
      </li>
      <li className="nav-item">
          <NavLink className="nav-link" to="/news">News</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/chart">Chart</NavLink>
      </li>
      <li>
        <SearchBar classname="nav-link" coins = {this.props.coins} changeSymbol = {this.props.changeSymbol}> </SearchBar>
      </li>
    </ul>
  </div>
  </nav>
    );}
};

export default Navbar;