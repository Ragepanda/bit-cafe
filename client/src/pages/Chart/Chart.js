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
			<div class="container-fluid">
			<div class="row">
				<div className="col-sm">
					AD SPACE
					AD SPACE
				</div>
				<h1> Lots of things go here </h1>
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

export default Chart;