import React from "react";
import ListItem from "./ListItem";
import "./CoinTracker.css";
import { Helmet } from "react-helmet";

class CoinTracker extends React.Component{

	constructor(props){
        super(props);
		this.state = {
			coins: this.props.coins
		}
	}

	render(){
		if (typeof(this.props.coin) ==="undefined") return <div></div>;
		return(
			<div>
			<Helmet>
			  <title>{"BitcoinSama | "+this.props.coin.fullName+" News & "+this.props.coin.fullName+" Charts"}</title>
			  <meta name="description" content={"This page will help answer the question of, what is "+this.props.coin.fullName+"? Our what is "+this.props.coin.fullName+" page provides useful information about the cryptocurrency, "+this.props.coin.fullName+". If you still don't know what is "+this.props.coin.fullName+", then read on."}/>
			  <meta name="keywords" content={"cryptocurrency,crypto,coin,"+this.props.coin.fullName+","+this.props.symbol+",price,value,news,aggregator,new"} />
			  <meta name="author" content="bitcoinsama.com"/>
			  <meta http-equiv="Content-Language" content="en-US"/>
			  <meta name="rating" content="kids"/>
			  <meta http-equiv="content-type" content="text/html" charSet="utf-8" />
			</Helmet>
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