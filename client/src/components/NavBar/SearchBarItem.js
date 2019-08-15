import React from "react";


class SearchBarItem extends React.Component {

	constructor(props){
        super(props);
		this.test = this.test.bind(this);
		this.state = {
			coin: this.props.coin
		}
	}
	
	
	test(){
		this.props.changeSymbol(this.props.coin.CoinInfo.Internal);
	}

	componentDidMount(){
		console.log(this.state.coin);
	}

	render() {
		
		return (								
			<li><button onClick={()=>{this.test();}} className="dropdown-item" type="button"> <img height="15px" width="15px" alt={this.props.coin.CoinInfo.Internal}src={"https://www.cryptocompare.com"+this.props.coin.CoinInfo.ImageUrl}></img>{this.props.coin.CoinInfo.FullName}</button></li>				
		);
	}
}

export default SearchBarItem;