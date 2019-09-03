import React from "react";

class Coin extends React.Component {
	state = {
		color: "text-success",
		coinCost: ""
	}


	itemStyle = {
		float: "left",
		textAlign: 'center',
		padding: "8px",
		color: "#E5E4E7",
		backgroundColor: "#2C2640"
	}


	componentDidMount() {
		if (this.props.coin.changePct24 < 0) {
			this.setState({
				color: "text-danger"
			})
		}


	}

	render() {
		if (typeof (this.props.coin) === "undefined")
			return <div />

		else {
			return (
				<li className="" style={this.itemStyle}>
					<span className="">| <img alt="" height="15px" width="15px" src={"https://www.cryptocompare.com" + this.props.coin.imageUrl} /> {this.props.coin.symbol} {this.props.coin.price.replace(/\s/g, '')}</span><span className={this.state.color}> {Math.round(100 * this.props.coin.changePct24) / 100 + "%"} </span>
				</li>
			)
		}
	}
}

export default Coin;