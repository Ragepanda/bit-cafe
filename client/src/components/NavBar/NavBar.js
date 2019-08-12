import React from "react";
import { Link, NavLink } from 'react-router-dom'
const Navbar = props => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    <a className="navbar-brand" href="/">
      BitCafe
     </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    	<span class="navbar-toggler-icon"></span>
  	</button>

       <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <NavLink className="nav-link" to="/">Tracker</NavLink>
      </li>
      <li class="nav-item">
          <NavLink className="nav-link" to="/news">News</NavLink>
      </li>
      <li class="nav-item">
        <NavLink className="nav-link" to="/chart">Chart</NavLink>
      </li>
    </ul>
  </div>
  </nav>
);

export default Navbar;