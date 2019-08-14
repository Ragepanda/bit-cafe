import React from "react";
import SearchBarItem from "./SearchBarItem"
import './SearchBar.css';
//Container for scroller class
class SearchBar extends React.Component {
	state = {
		coins: []
	}


	componentDidMount() {


	}


	render() {

		return (
			<div className="dropdown">
				<a className="nav-link btn dropdown-toggle" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
					Coin to View
            </a>
				<div className="dropdown-menu" aria-labelledby="dropdownMenu2">

					{this.props.coins.map((coin, index) =>
	    		
						<SearchBarItem coin = {coin} key={index} changeSymbol={this.props.changeSymbol}></SearchBarItem>

					)}
              
				</div>
			</div>
		);
	}
}

export default SearchBar;