import React from "react";
import Scroller from "./Scroller";
import API from "../../utils/API";
//Container for scroller class
class Coinbar extends React.Component {
	state ={
    	coins: []
  	}

	//style to be moved to css sheet
	navStyle = {
		height: '40px',
		minWidth: '100000000px',
		color: 'white'
		

	}

	componentDidMount(){
		API.getMarketCapData()
      .then(res => {
		  console.log(res.data);
        this.setState({coins: res.data});
      })
      .catch(err => console.log(err));

	}

	// testRender(){
	// 	if (this.state.coins.length > 0) {
  	// 		return this.state.coins[0].id;
	// 	}
	// }

	render(){
		
		return(
	  		<div className="navbar-dark bg-dark fixed-bottom" style={this.navStyle}>
	   			<Scroller offset="0"
	   				coins = {this.state.coins}
	   			/>
	   			<Scroller offset="1"
	   				coins = {this.state.coins}
	   			/>
	   	 	
	  		</div>
  		);}
}

export default Coinbar;