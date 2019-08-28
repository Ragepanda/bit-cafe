import React from "react";
import {Chart, Line} from 'react-chartjs-2'
import "./Graph.css"
//import Chart from "chart.js"




class Graph extends React.Component{
	constructor(props){
		super(props);



    this.redoChartDaily = this.redoChartDaily.bind(this);
    this.redoChartMinutes = this.redoChartMinutes.bind(this);
    this.redoChartHourly = this.redoChartHourly.bind(this);

		var points = [];
    var pointsMinute =[];
    var pointsDaily = [];
		var timeLabelsHour = [];
    var timeLabelsDay = [];
    var timeLabelsMinute = [];

		for(var i =0; i < this.props.data.length; i++){
			points.push({x: i *5, y: this.props.data[i].high});
			timeLabelsHour.push(this.props.hourConverter(this.props.data[i].time));
			//console.log(points[i]);
		}

    for(var i =0; i < this.props.minutesData.length; i++){
      pointsMinute.push({x: i *5, y: this.props.minutesData[i].high});
      timeLabelsMinute.push(this.props.minConverter(this.props.minutesData[i].time));
    }


    for(var i =0; i < this.props.dailyData.length; i++){
      pointsDaily.push({x: i *5, y: this.props.dailyData[i].high});
      timeLabelsDay.push(this.props.multiDayConverter(this.props.dailyData[i].time));
      //console.log(points[i]);
    }


		this.state={

      dailyPoints: pointsDaily,
      minutePoints: pointsMinute,
      hourPoints: points,

      dayLabel: timeLabelsDay,
      minuteLabel: timeLabelsMinute,
      hourLabel: timeLabelsHour,
      lineChart: {},
			chartData: {
        
				labels: timeLabelsHour,

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
	
  redoChartDaily(){
    //let lineChart = this.reference.chartInstance;
    this.state.chartData.datasets[0].data = this.state.dailyPoints;
    this.state.chartData.labels = this.state.dayLabel;
    this.state.lineChart.update();
    
    console.log(this.state.chartData.labels);
  }
  redoChartMinutes(){
    //let lineChart = this.reference.chartInstance;
    this.state.chartData.datasets[0].data = this.state.minutePoints;
    this.state.chartData.labels = this.state.minuteLabel;
    this.state.lineChart.update();
    
    console.log(this.state.chartData.labels);
  }
  redoChartHourly(){
    //let lineChart = this.reference.chartInstance;
    this.state.chartData.datasets[0].data = this.state.hourPoints;
    this.state.chartData.labels = this.state.hourLabel;
    this.state.lineChart.update();
    
    console.log(this.state.chartData.labels);
  }


	componentDidMount(){
		//console.log(this.state.chartData);
		Chart.plugins.register({
 			 beforeDraw: function(chartInstance) {
    			var ctx = chartInstance.chart.ctx;
    			ctx.fillStyle = "#0C0032";
    			ctx.fillRect(0, 0, chartInstance.chart.width, chartInstance.chart.height);

  			}
		});
    this.state.lineChart = this.reference.chartInstance;
  }

  	render()
  	{
  		return(
  			<div>
          <button type="button" className="btn btn-dark" onClick={this.redoChartMinutes}>minutes</button>
          
          <button type="button" className="btn btn-dark" onClick={this.redoChartHourly}>hourly</button>
          
          <button type="button" className="btn btn-dark" onClick={this.redoChartDaily}>daily</button>
  				<Line
  					data={this.state.chartData}
  					width={50}
  					options={this.state.options}
            ref = {(reference) => this.reference = reference}
				/>

  			</div>

  	);}

}

export default Graph;