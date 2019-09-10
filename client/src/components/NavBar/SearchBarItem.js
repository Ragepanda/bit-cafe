import React from "react";
import {NavLink} from 'react-router-dom'


class SearchBarItem extends React.Component {

	constructor(props){
        super(props);
		this.test = this.test.bind(this);
		this.state = {
			coin: this.props.coin
		}
	}
	
	
	test(){
		this.props.changeSymbol(this.props.coin.symbol);
	}

	componentDidMount(){
		// console.log(this.state.coin);
		//console.log(this.props);
	}	


	render() {
		
		
		return (								
			<NavLink to={"./"+this.state.coin.symbol}><button onClick={()=>{this.test();}} className="dropdown-item" type="button"> <img height="15px" width="15px" alt={this.props.coin.symbol}src={"https://www.cryptocompare.com"+this.props.coin.imageUrl}></img>{this.props.coin.fullName}</button></NavLink>		
		);
	}
}

export default SearchBarItem;