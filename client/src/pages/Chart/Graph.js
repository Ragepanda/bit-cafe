import React from "react";
import {Chart, Line} from 'react-chartjs-2'
//import Chart from "chart.js"




class Graph extends React.Component{
	constructor(props){
		super(props);

		var points = [];
		var timeLabels = []
		console.log(this.props.data.length);

		for(var i =0; i < this.props.data.length; i++){
			points.push({x: i *5, y: this.props.data[i].high});
			timeLabels.push(this.props.data[i].time/60/24)
			console.log(points[i]);
		}


		this.state={
			chartData: {
				backgroundColor: "#0C0032",
				labels: timeLabels,
				datasets: [{
					label: 'price',
					data: points,
					backgroundColor: 'rgba(224, 218, 242, 0.8)',//fill under line
					borderColor: 'rgba(224, 218, 242, 1)', //line


				}]
					
            },
            options: {
        		elements: {
            		line: {
                		tension: 0 // disables bezier curves
            		}
        		},

        		maintainAspectRatio: false,
        		scales: {
        			xAxes:[{
        				gridLines:{
        					color:"#E2DFEB"
        				}
        			}],
        			yAxes:[{
        				gridLines:{
        					color:"#E2DFEB"
        				}
        			}],
        		}
    		}
		}
	}
	


	componentDidMount(){
		console.log(this.state.chartData);
		Chart.plugins.register({
 			 beforeDraw: function(chartInstance) {
    			var ctx = chartInstance.chart.ctx;
    			ctx.fillStyle = "#0C0032";
    			ctx.fillRect(0, 0, chartInstance.chart.width, chartInstance.chart.height);
  			}
		});
  	}

  	render()
  	{
  		return(
  			<div className="col-xs-4">
  				<Line
  					data={this.state.chartData}
  					width={50}
  					options={this.state.options}
				/>

  			</div>

  	);}

}

export default Graph;