import React from "react";
import {NavLink } from 'react-router-dom';
import './ListItem.css';

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
				<NavLink to={"/chart/"+this.props.coins.CoinInfo.Name}>
				<div>
				<tr className="rowHover">
					<th scope="row">{this.props.rank+1}</th>
					<td><img alt="" height="15px" width="15px" src={"https://www.cryptocompare.com"+this.props.coins.CoinInfo.ImageUrl}/> {this.props.coins.CoinInfo.FullName} ({this.props.coins.CoinInfo.Name})</td>
					<td>{this.props.coins.DISPLAY.USD.MKTCAP.replace(/\s/g,'')}</td>
					<td>{this.props.coins.DISPLAY.USD.PRICE.replace(/\s/g,'')}</td>
					<td>{this.props.coins.DISPLAY.USD.VOLUME24HOURTO.replace(/\s/g,'')}</td>
					<td>{this.props.coins.DISPLAY.USD.SUPPLY}</td>
					<td className={this.state.color}>{Math.round(100*this.props.coins.RAW.USD.CHANGEPCT24HOUR)/100 + "%"}</td>
									
				</tr>
				</div>
				</NavLink>
	)}

}

export default ListItem;