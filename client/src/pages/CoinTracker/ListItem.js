import React from "react";


class ListItem extends React.Component{
	state = {
		color: "text-success"
	}

	componentDidMount(){
		if(this.props.coins.RAW.USD.CHANGEPCT24HOUR < 0){
			this.setState({
				color: "text-danger"
			})
		}
	}
	
	render(){
		return(
				<tr className="rowHover">
					<th scope="row">{this.props.rank+1}</th>
					<td><img alt="" height="15px" width="15px" src={"https://www.cryptocompare.com"+this.props.coins.CoinInfo.ImageUrl}/> {this.props.coins.CoinInfo.FullName} ({this.props.coins.CoinInfo.Name})</td>
					<td>{this.props.coins.DISPLAY.USD.MKTCAP.replace(/\s/g,'')}</td>
					<td>{this.props.coins.DISPLAY.USD.PRICE.replace(/\s/g,'')}</td>
					<td>{this.props.coins.DISPLAY.USD.VOLUME24HOURTO.replace(/\s/g,'')}</td>
					<td>{this.props.coins.DISPLAY.USD.SUPPLY}</td>

					<td className={this.state.color}>{this.props.coins.RAW.USD.CHANGEPCT24HOUR}</td>
									
				</tr>
	)}

}

export default ListItem;