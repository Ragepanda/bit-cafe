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
		color: 'white',
		backgroundColor: "#2C2640"

	}

	componentDidMount(){
		this.loadCoins();
	}

	loadCoins()
	{
		API.getMarketCapData()
      .then(res => {
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
	  		<div className="fixed-bottom" style={this.navStyle}>
	   			<Scroller offset="0"
	   				coins = {this.state.coins}
	   				loadCoins = {this.loadCoins}
	   			/>
	   			<Scroller offset="1"
	   				coins = {this.state.coins}
	   				loadCoins = {this.loadCoins}
	   			/>
	   	 	
	  		</div>
  		);}
}

export default Coinbar;