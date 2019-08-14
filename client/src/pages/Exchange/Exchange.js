import React from "react";
import API from "../../utils/API";


class Exchange extends React.Component{

    constructor(props){
        super(props);

    }
    
	state ={
    	coins: []
  	}



	componentDidMount(){


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
				<h1> This page will reflect our {this.props.symbol} Exchange rate and Exchange trading info</h1>
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

export default Exchange;