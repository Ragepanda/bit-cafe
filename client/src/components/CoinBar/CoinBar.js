import React from "react";
import Scroller from "./Scroller";
import API from "../../utils/API";
//Container for scroller class
class Coinbar extends React.Component {
	state ={
    	coins: [],
    	barDif: -1,
    	barPos1: -1,
    	barpos2: -1
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
		this.timerID = setInterval(
      	() => this.loadCoins(),
      	10000
    	);
	}

	addBarPos = (barPos, id) =>{
		if(id == 0){
			this.setState({barPos1: barPos});
			//console.log("bar1 "+ this.state.barPos1);
		}
		else{
			this.setState({barPos2: barPos});;
			//console.log("bar2 "+ this.state.barPos2);
		}
		//console.log(this.state.barPos2 - this.state.barPos1);
	}
	
	checkdif = () =>{
		this.setState({barDif: this.state.barPos2 - this.state.barPos1})
		if(this.state.barDif > 3881){
			return 1;
		}
		if(this.state.barDif < 0 && this.state.barDif > -3866){
			return 1;
		}

		return 0;
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
	   				addBarPos = {this.addBarPos}
	   				checkdif = {this.checkdif}
	   			/>
	   			<Scroller offset="1"
	   				coins = {this.state.coins}
	   				loadCoins = {this.loadCoins}
	   				addBarPos = {this.addBarPos}
	   				checkdif = {this.checkdif}
	   			/>
	   	 	
	  		</div>
  		);}
}

export default Coinbar;