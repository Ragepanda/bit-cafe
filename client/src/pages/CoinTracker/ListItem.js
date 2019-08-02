import React from "react";


class ListItem extends React.Component{
	state = {
		color: "text-success"
	}

	componentDidMount(){
		console.log(this.props);
		if(this.props.coins.RAW.USD.CHANGEPCT24HOUR < 0){
			this.setState({
				color: "text-danger"
			})
		}
	}
	
	render(){
		return(
				<tr>
					<th scope="row">{this.props.rank+1}</th>
					<td>{this.props.coins.CoinInfo.FullName} ({this.props.coins.CoinInfo.Name})</td>
					<td>{this.props.coins.DISPLAY.USD.MKTCAP}</td>
					<td>{this.props.coins.DISPLAY.USD.PRICE}</td>
					<td>{this.props.coins.DISPLAY.USD.VOLUME24HOURTO}</td>
					<td>{this.props.coins.DISPLAY.USD.SUPPLY}</td>

					<td className={this.state.color}>{this.props.coins.RAW.USD.CHANGEPCT24HOUR}</td>
									
				</tr>
	)}

}

export default ListItem;