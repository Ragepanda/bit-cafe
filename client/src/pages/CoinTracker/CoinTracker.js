import React from "react";
import API from "../../utils/API";
import ListItem from "./ListItem";
import "./CoinTracker.css";

class CoinTracker extends React.Component{

	constructor(props){
        super(props);
		this.state = {
			coins: this.props.coins
		}
	}

	render(){
		return(
			<div>
			<br/>
			<br/>
			<div className="container">
				<p>AD SPACE</p>
				<p>AD SPACE</p>
			</div>
			<div className="container-fluid">
			<div className="row">
				<div className="col-sm">
					AD SPACE
					AD SPACE
				</div>
				<table className="col-10 table table-striped table-dark" id="coinTable">
				<thead>
				<tr>
					<th scope="col">Rank</th>
					<th scope="col">Name</th>
					<th scope="col">Market Cap</th>
					<th scope="col">Price USD</th>
					<th scope="col">Volume (24h)</th>
					<th scope="col">Total Supply</th>
					<th scope="col">Change (24h)</th>
				</tr>
				</thead>
				<tbody>
					 {
						this.state.coins.map((coins, index) =>
							(
								<ListItem 
									coins = {coins} key = {index} rank = {index}
								/>
							)
						) 
		    		} 
				</tbody>
				</table>
				<div className="col-sm">
					AD SPACE
					AD SPACE
				</div>
			</div>
			</div>
			<div className="container">
				<p>AD SPACE</p>
				<p>AD SPACE</p>
			</div>
			<div className="container">
				<p>Blah blah legal stuff</p>
			</div>
			<br/>
			
			</div>
	
	)}
}

export default CoinTracker;