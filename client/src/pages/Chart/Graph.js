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
			timeLabels.push(this.props.hourConverter(this.props.data[i].time))
			console.log(points[i]);
		}


		this.state={
			chartData: {
				labels: timeLabels,
				datasets: [{
					data: points,
					backgroundColor: 'rgba(224, 218, 242, 0.8)',//fill under line
					borderColor: 'rgba(224, 218, 242, 1)', //line


				}]
					
            },
            options: {
            	title: {
            		display: true,
            		text: this.props.symbol + " price " + this.props.dayConverter(this.props.data[0].time)
            	},
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
        		},
        		legend:{
        			display: false
        		},

        		tooltips: {
            		callbacks: {
                		label: function(tooltipItems, data) {
                    	return "$" + tooltipItems.yLabel.toString();
                		}
    				}
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