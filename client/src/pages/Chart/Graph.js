import React from "react";
import API from "../../utils/API";

class Graph extends React.Component{

	state ={
    	hourlyData: []
  	}

  	componentDidMount(){
  		this.loadData();

  		var c = document.getElementById("myCanvas");
		var contain = document.getElementById("chartDIV");

		var graphWidth = 200;
		var graphHeight = document.body.clientHeight * .2;
		var topTextOffset = 0;
		var bottomTextOffset = 0;
		var leftTextOffset = 0;
		var rightTextOffset = 0;
		var gridMultiplier = 1;
		var numDetails = 4;

		var dpr = window.devicePixelRatio || 1;



		c.width = graphWidth * dpr;
		c.height = graphHeight * dpr;
		var ctx = c.getContext("2d");

		ctx.scale(dpr, dpr);


		//Graph temp array
		
		var points = [];
		console.log(this.props.data.length);

		for(var i =0; i < this.props.data.length; i++){
			points.push(this.props.data[i].high);
			console.log(points[i]);
		}
		
		var pointMin = Math.min.apply(null, points);
		var pointMax = Math.max.apply(null, points);
		var topBuffer = 0.95;

		//BackGround
		ctx.fillStyle = "#0C0032" //bg color
		ctx.fillRect(0,0,graphWidth,graphHeight);

		//Grid
		var rows =(points.length-1) *gridMultiplier * graphHeight/graphWidth;
		var columns  =(points.length-1) * gridMultiplier;
		var currentHeight = 0;
		var currentWidth = 0;
		ctx.strokeStyle = "#E2DFEB"; //grid color
		for(var i =0; i < columns; i++){
			ctx.beginPath();
			ctx.lineWidth = 0.5;
			currentWidth = graphWidth/columns * i;
			ctx.moveTo(currentWidth,0);
			ctx.lineTo(currentWidth, graphHeight);
			ctx.stroke();
		}
		for(var j=0; j< rows; j++){
			ctx.beginPath();
			ctx.lineWidth = 0.5;
			currentHeight = graphHeight/rows * j;
			ctx.moveTo(0, currentHeight);
			ctx.lineTo(graphWidth, currentHeight);
			ctx.stroke();
		}

		//Make Graph

		var lastX = 0;
		ctx.beginPath();
		for (var i = 0; i < points.length; i++) {
			if(i - 1 < 0){
				ctx.moveTo(lastX, graphHeight - (points[i]/pointMax) *graphHeight *topBuffer);
			}
			else{
				ctx.moveTo(lastX, graphHeight - (points[i-1]/pointMax) *graphHeight *topBuffer);
			}
			lastX = (graphWidth /(points.length-1)) * (i);

			ctx.strokeStyle = "#E0DAF2";//graph color
			ctx.lineCap = "round";
			ctx.lineWidth = 3;
			ctx.lineTo((graphWidth /(points.length-1)) * i, graphHeight - (points[i]/pointMax) *graphHeight *topBuffer);
			ctx.stroke();
		}
		var lastX = 0;
		ctx.beginPath();
		for (var i = 0; i < points.length; i++) {
			if(i - 1 < 0){
				ctx.moveTo(lastX, graphHeight - (points[i]/pointMax) *graphHeight *topBuffer);
			}
		else{
			ctx.moveTo(lastX, graphHeight- (points[i-1]/pointMax) *graphHeight *topBuffer);
		}
		lastX = (graphWidth /(points.length-1)) * (i);

		ctx.strokeStyle = "#E0DAF2";//graph color
		ctx.lineCap = "round";
		ctx.lineWidth = 1;
		ctx.lineTo((graphWidth /(points.length-1)) * i, graphHeight - (points[i]/pointMax) *graphHeight *topBuffer);
		ctx.stroke();
		}


		//numbers
		ctx.beginPath();
		ctx.font = "5px Verdana";
		// Create gradient
		var gradient = ctx.createLinearGradient(0, 0, c.width, 0);
		gradient.addColorStop("0"," magenta");
		gradient.addColorStop("0.5", "blue");
		gradient.addColorStop("1.0", "red");
		// Fill with gradient
		ctx.fillStyle = gradient;
		for(var i = 0; i < rows; i++)
		{
			var num = Math.round(pointMax/rows*(rows-i)/topBuffer);
			currentHeight = graphHeight/rows * i;
			ctx.fillText(num.toString(), 5, currentHeight+5);
		}



		//guide line (gonna make this a func)
		ctx.setLineDash([5, 3]);
		ctx.beginPath();
		ctx.strokeStyle = "#00D39E";
		ctx.moveTo(0, graphHeight - (points[points.length-1]/pointMax *graphHeight* topBuffer));
		ctx.lineTo(graphWidth, graphHeight - (points[points.length-1]/pointMax * graphHeight* topBuffer));
		ctx.stroke();
		ctx.setLineDash([0,0]);


  	}

  	loadData(){
  	
  	}


  	render(){
  		return(
  			<div>

  	
  			<canvas id="myCanvas" />
  			</div>

  	)}





}
export default Graph;
