import React from "react"

class Coin extends React.Component{
	state = {
		color: "text-success"
	}


	itemStyle ={
		float: "left",
		textAlign: 'center',
	    padding: "8px"
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
	    	<span className="text-light">| {this.props.coin.CoinInfo.Internal} {this.props.coin.DISPLAY.USD.PRICE}</span><span className={this.state.color}> {this.props.coin.DISPLAY.USD.CHANGEPCT24HOUR}% </span>
		</li>
	)}
}

export default Coin;