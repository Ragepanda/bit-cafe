import React from "react";
import API from "../../utils/API";


class Chart extends React.Component{

	state ={
    	coins: []
  	}



	componentDidMount(){
		API.getHourlyHistoryBySymbol(this.props.symbol)
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
				<h1> This page will reflect our {this.props.symbol} information! </h1>
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