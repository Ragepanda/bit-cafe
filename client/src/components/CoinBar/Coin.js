import React from "react";

class Coin extends React.Component{
	state = {
		color: "text-success",
		coinCost: ""
	}


	itemStyle ={
		float: "left",
		textAlign: 'center',
	    padding: "8px",
	    color: "#E5E4E7",
	    backgroundColor: "#2C2640"
	}

	
	componentDidMount(){
		if(this.props.coin.RAW.USD.CHANGEPCT24HOUR < 0){
			this.setState({
				color: "text-danger"
			})
		}
		

	}

	render(){
		return(
		<li className="" style={this.itemStyle}>
	    	<span className="">| <img alt="" height="15px" width="15px" src={"https://www.cryptocompare.com"+this.props.coin.CoinInfo.ImageUrl}/> {this.props.coin.CoinInfo.Internal} {this.props.coin.DISPLAY.USD.PRICE.replace(/\s/g,'')}</span><span className={this.state.color}> {this.props.coin.DISPLAY.USD.CHANGEPCT24HOUR}% </span>
		</li>
	)}
}

export default Coin;