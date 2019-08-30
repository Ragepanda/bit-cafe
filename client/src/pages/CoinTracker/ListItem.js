import React from "react";
import {NavLink } from 'react-router-dom';
//import './ListItem.css';

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
					<th scope="row"><div className="bigDiv"><a className="bigLink" href={"/chart/"+this.props.coins.CoinInfo.Name}>{this.props.rank+1}</a></div></th>
					<td><div className="bigDiv"><a className="bigLink" href={"/chart/"+this.props.coins.CoinInfo.Name}><img alt="" height="15px" width="15px" src={"https://www.cryptocompare.com"+this.props.coins.CoinInfo.ImageUrl}/> {this.props.coins.CoinInfo.FullName} ({this.props.coins.CoinInfo.Name})</a></div></td>
					<td><div className="bigDiv"><a className="bigLink" href={"/chart/"+this.props.coins.CoinInfo.Name}>{this.props.coins.DISPLAY.USD.MKTCAP.replace(/\s/g,'')}</a></div></td>
					<td><div className="bigDiv"><a className="bigLink" href={"/chart/"+this.props.coins.CoinInfo.Name}>{this.props.coins.DISPLAY.USD.PRICE.replace(/\s/g,'')}</a></div></td>
					<td><div className="bigDiv"><a className="bigLink" href={"/chart/"+this.props.coins.CoinInfo.Name}>{this.props.coins.DISPLAY.USD.VOLUME24HOURTO.replace(/\s/g,'')}</a></div></td>
					<td><div className="bigDiv"><a className="bigLink" href={"/chart/"+this.props.coins.CoinInfo.Name}>{this.props.coins.DISPLAY.USD.SUPPLY}</a></div></td>
					<td className={this.state.color}><div className="bigDiv"><a className="bigLink" href={"/chart/"+this.props.coins.CoinInfo.Name}>{Math.round(100*this.props.coins.RAW.USD.CHANGEPCT24HOUR)/100 + "%"}</a></div></td>
									
				</tr>
	)}

}

export default ListItem;