import React from "react";

const Navbar = props => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    <a className="navbar-brand" href="#">
      CoinTracker
     </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    	<span class="navbar-toggler-icon"></span>
  	</button>

       <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <a class="nav-link" href="#" onClick={() => props.handlePageChange("news")}>News</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#" onClick={() => props.handlePageChange("tracker")}>Tracker</a>
      </li>
    </ul>
  </div>
  </nav>
);

export default Navbar;