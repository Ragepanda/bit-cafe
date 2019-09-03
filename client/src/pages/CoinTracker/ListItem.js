import React from "react";


class ListItem extends React.Component{
	state = {
		color: "text-success"
	}

	componentDidMount(){
		if(this.props.coins.changePct24 < 0){
			this.setState({
				color: "text-danger"
			})
		}
	}
	
	render(){
		return(
				<tr className="rowHover">
					<th scope="row">{this.props.rank+1}</th>
					<td><img alt="" height="15px" width="15px" src={"https://www.cryptocompare.com"+this.props.coins.imageUrl}/> {this.props.coins.fullName} ({this.props.coins.symbol})</td>
					<td>{this.props.coins.marketCapString.replace(/\s/g,'')}</td>
					<td>{this.props.coins.price.replace(/\s/g,'')}</td>
					<td>{this.props.coins.volume24H.replace(/\s/g,'')}</td>
					<td>{this.props.coins.supply}</td>

					<td className={this.state.color}>{Math.round(100*this.props.coins.changePct24)/100 + "%"}</td>
									
				</tr>
	)}

}

export default ListItem;