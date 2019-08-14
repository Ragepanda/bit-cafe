import React from "react";
import API from "../../utils/API";


class Chart extends React.Component{

	state ={
    	coins: []
  	}



	componentDidMount(){
		API.getHourlyHistoryBySymbol("BTC")
      .then(res => {
		this.setState({coins: res.data});
        console.log(this.state.coins);
      })
      .catch(err => console.log(err));
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
<<<<<<< HEAD
				<h1> Lots of things go here </h1>
				

=======
				<h1> This page will reflect our {this.props.symbol} information! </h1>
>>>>>>> e76fc14048a9f7ed53f6f36a2f0bd2889cefeb9a
				<div className="col-sm">
					AD SPACE
					AD SPACE
				</div>
			</div>
			</div>

			<div>	
				<canvas id="myCanvas" />
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

export default Chart;