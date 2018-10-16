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
		if(this.props.coin.percent_change_24h < 0){
			this.setState({
				color: "text-danger"
			})
		}
	}

	render(){
		return(
		<li className="" style={this.itemStyle}>
	    	<span className="text-light">| {this.props.coin.symbol} ${Math.round(this.props.coin.price_usd*100)/100}</span><span className={this.state.color}> {this.props.coin.percent_change_24h}% </span>
		</li>
	)}
}

export default Coin;