import React from "react";
import Coin from "./Coin";


class Scroller extends React.Component{
	state = {
		barposition: 0, //0 or 1, 1 starts bar offset by one whole bar
		bar_one_style: {}, //updateable styling so bar can move
		inited: "false" //checks to see if int() has been called
	
	}
	barlength = 0;
	
	//used for initialization
	scrollstyle = {
			position: "absolute",
			left: "0 px",
			listStyle: "none"
	}

	//temp styling, will later used in coin class
	itemStyle ={
		float: "left",
		textAlign: 'center',
	    padding: "8px"
	}

	//Sets barlength to actual width of list, and starting location offset
	init(){
		this.barlength = (document.getElementsByClassName("scroller")[0].getBoundingClientRect().width);
		console.log("barlength " + this.barlength);
		this.setState({
			inited: "true",
			barposition: (this.props.offset * this.barlength)
		});
	}

	tick() {
		
		if(this.props.coins.length >= 20){
			if(this.state.inited === "false"){

				this.init();
			}
		}

		//move bar
		if(this.state.barposition >= -this.barlength){
			var styleCopy = {
				position: "absolute",
				left: (this.state.barposition) + "px",
				listStyle: "none"
			}
    		this.setState({
     			barposition: (this.state.barposition - 1),
     			bar_one_style: styleCopy
    		});
    	}
    	else{
    		styleCopy = {
				position: "absolute",
				left: this.barlength,
				listStyle: "none"
			}
    		this.setState({
     			barposition: this.barlength,
     			bar_one_style: styleCopy
    		});
    	}
  	}

  	addCoin(){
  		if(this.props.coins.length > 0){
  			return this.props.coins.map((coins, index) => 
				<Coin 
				key = {index}
	    		style = {this.itemStyle}
	    		coin = {coins}
	    		/>)
	    			
  		}
  	}

	componentDidMount() {

		this.setState({bar_one_style: this.scrollstyle})
    	this.timerID = setInterval(
      	() => this.tick(),
      	30
    	);
  	}

  	componentWillUnmount() {
    	clearInterval(this.timerID);
  	}

  	
  	render(){
  		return(
  			 <ul className="scroller" style={this.state.bar_one_style}>
	    		{this.addCoin()}
	   	 	</ul>
  			
  	);}

}


export default Scroller;