import React from "react";


class ListItem extends React.Component{
	state = {
		color: "text-success"
	}

	componentDidMount(){
		if(this.props.coins.percent_change_24h < 0){
			this.setState({
				color: "text-danger"
			})
		}
	}

	render(){
		return(
				<tr>
					<th scope="row">{this.props.coins.rank}</th>
					<td>{this.props.coins.name} (  {this.props.coins.symbol}  )</td>
					<td>{this.props.coins.market_cap_usd}</td>
					<td>{this.props.coins.price_usd}</td>
					<td>{this.props.coins["24h_volume_usd"]}</td>
					<td>{this.props.coins.total_supply}</td>

					<td className={this.state.color}>{this.props.coins.percent_change_24h}</td>
									
				</tr>
	)}

}

export default ListItem;