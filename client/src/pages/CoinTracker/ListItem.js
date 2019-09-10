import React from "react";
import './ListItem.css';

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
					<th scope="row"><div className="bigDiv"><a className="bigLink" href={"/chart/"+this.props.coins.symbol}>{this.props.rank+1}</a></div></th>
					<td><div className="bigDiv"><a className="bigLink" href={"/chart/"+this.props.coins.symbol}><img alt="" height="15px" width="15px" src={"https://www.cryptocompare.com"+this.props.coins.imageUrl}/> {this.props.coins.fullName} ({this.props.coins.symbol})</a></div></td>
					<td><div className="bigDiv"><a className="bigLink" href={"/chart/"+this.props.coins.symbol}>{this.props.coins.marketCapString.replace(/\s/g,'')}</a></div></td>
					<td><div className="bigDiv"><a className="bigLink" href={"/chart/"+this.props.coins.symbol}>{this.props.coins.price.replace(/\s/g,'')}</a></div></td>
					<td><div className="bigDiv"><a className="bigLink" href={"/chart/"+this.props.coins.symbol}>{this.props.coins.volume24H.replace(/\s/g,'')}</a></div></td>
					<td><div className="bigDiv"><a className="bigLink" href={"/chart/"+this.props.coins.symbol}>{this.props.coins.supply}</a></div></td>
					<td className={this.state.color}><div className="bigDiv"><a className="bigLink" href={"/chart/"+this.props.coins.symbol}>{Math.round(100*parseFloat(this.props.coins.changePct24))/100 + "%"}</a></div></td>
									
				</tr>
	)}

}

export default ListItem;