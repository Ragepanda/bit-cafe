import React from "react";
import API from "../../utils/API";
import Graph from "./Graph";
import NewsContainer from "./NewsContainer";
import Moment from "moment";
import { Helmet } from "react-helmet";
import'./Chart.css';

class Chart extends React.Component{

	state ={
    	hourlyData: [],
      minutesData: [],
      dailyData: [],
      articles: []
  	}



	componentDidMount(){
			this.getChartHourly();
      this.getChartMinutes();
      this.getChartDaily();
		 
	}	

  componentWillMount() {
    if (this.props.symbol !== this.props.match.params.symbol) {
      if (this.props.match.params.symbol !== null) {
        this.props.changeSymbol(this.props.match.params.symbol);
      }
      if (typeof (this.props.match.params.symbol) === "undefined")
        this.props.history.push("./" + this.props.symbol);
    }
    API.getArticlesBySymbol(this.props.symbol)
    .then(res=>{
      this.setState({articles: res.data});

    })
      .catch(err => console.log(err));
  }



  getChartHourly(){
    API.getHourlyHistoryBySymbol(this.props.symbol)
      .then(res => {
        
        if (this.props.symbol !== this.props.match.params.symbol) {
          if (this.props.match.params.symbol !== null) {
            this.props.changeSymbol(this.props.match.params.symbol);
          }
          if (typeof(this.props.match.params.symbol) === "undefined")
            this.props.history.push("./"+this.props.symbol);
        }
    this.setState({hourlyData: res.data}, function(){
    
    
    });
    //console.log(test);
       })
      .catch(err => console.log(err));
  }

   getChartMinutes(){
    API.getMinuteHistoryBySymbol(this.props.symbol)
      .then(res => {
        
        if (this.props.symbol !== this.props.match.params.symbol) {
          if (this.props.match.params.symbol !== null) {
            this.props.changeSymbol(this.props.match.params.symbol);
          }
          if (typeof(this.props.match.params.symbol) === "undefined")
            this.props.history.push("./"+this.props.symbol);
        }
    this.setState({minutesData: res.data}, function(){
    
    
    });
    //console.log(test);
       })
      .catch(err => console.log(err));
  }

   getChartDaily(){
    API.getDailyHistoryBySymbol(this.props.symbol)
      .then(res => {
        console.log(res.data);
        if (this.props.symbol !== this.props.match.params.symbol) {
          if (this.props.match.params.symbol !== null) {
            this.props.changeSymbol(this.props.match.params.symbol);
          }
          if (typeof(this.props.match.params.symbol) === "undefined")
            this.props.history.push("./"+this.props.symbol);
        }
    this.setState({dailyData: res.data}, function(){
    
    
    });
    //console.log(test);
       })
      .catch(err => console.log(err));
  }

	addGraph(){
		if(this.state.hourlyData.length > 0 && this.state.minutesData.length > 0 && this.state.dailyData.length > 0){
  			return(<Graph 
          symbol = {this.props.symbol}
          data = {this.state.hourlyData}
          minutesData = {this.state.minutesData}
          dailyData = {this.state.dailyData}
          hourConverter = {this.convertTimeHours}
          minConverter = {this.convertTimeMin}
          multiDayConverter = {this.convertTimeDay}
          dayConverter = {this.convertTimeExactDay}
        />)
		}
  }

  addNews(){
    if(this.state.articles.length > 0){
      return(
        <NewsContainer articles = {this.state.articles}/>
      )
    }
  }


	  convertTimeHours(timeStamp){
		  //console.log(Moment.unix(timeStamp,"x").format("YYYY-MM-DD HH:mm:ss"));
      return Moment.unix(timeStamp,"x").format("HH:mm"); 
	  }
    convertTimeMin(timeStamp){
      //console.log(Moment.unix(timeStamp,"x").format("YYYY-MM-DD HH:mm:ss"));
      return Moment.unix(timeStamp,"x").format("hh:mm"); 
    }
    convertTimeDay(timeStamp){
      //console.log(Moment.unix(timeStamp,"x").format("YYYY-MM-DD HH:mm:ss"));
      return Moment.unix(timeStamp,"x").format("MM-DD"); 
    }
    convertTimeExactDay(timeStamp){
      //console.log(Moment.unix(timeStamp,"x").format("YYYY-MM-DD HH:mm:ss"));
      return Moment.unix(timeStamp,"x").format("YYYY-MM-DD"); 
    }

	render(){
    if (typeof(this.props.coin) ==="undefined") return <div></div>;
		return(
<div>
        <div className="wrapper">
        <Helmet>
          <title>{this.props.coin.fullName + " | "+ this.props.coin.fullName + " Price Chart"}</title>
          <meta name="description" content={"This "+this.props.coin.fullName+" Price Chart will be helpful in determining the current "+this.props.coin.fullName+" price, as well as trends in "+this.props.coin.fullName+" price. Our "+this.props.coin.fullName+" price chart is highly customizable to help you find and analyze the trends in "+this.props.coin.fullName+" price and "+this.props.coin.fullName+" value."}/>
          <meta name="keywords" content={"cryptocurrency,crypto,coin,"+this.props.coin.fullName+","+this.props.symbol+",price,value,usd, chart, charts, trends, trend, prices, values"} />
          <meta name="author" content="bitcoinsama.com"/>
          <meta http-equiv="Content-Language" content="en-US"/>
          <meta name="rating" content="kids"/>
          <meta http-equiv="content-type" content="text/html" charSet="utf-8" />
        </Helmet>
          <div className="container">
            <div className="content">
              {/* SET UP Logo Top of Page */}
              {/*#include virtual="/includes/logo-header.shtml" */}
              {/* END of Logo Top of Page */}
              <div className="main">
                {/* SET UP Menu Code */}
                {/*#include virtual="/includes/menu-topic.shtml" */}
                {/* END of Menu Code */}
                <div className="main__content">
                  {/* SET UP Menu Code */}
                  {/*#include virtual="/includes/hamburger-menu-controls.shtml" */}
                  {/* END of Menu Code */}
                  <section className="section">
                    {/* SET UP Menu Code */}
                    {/*#include virtual="/includes/728x15-ATF-Link-Ad.shtml" */}
                    {/* END of Menu Code */}
                    <hr />
                    <hr />
                    <hr />
                    <header className="section__head">
                      <div>
                        <h1 align="left"><a href={"./"+this.props.symbol}>{this.props.coin.fullName}</a></h1>
                        <h2 align="left">{this.props.coin.fullName} Price Chart Overview</h2>
                      </div></header>{/* /.section__head */}
                  </section></div>
                <div className="section__body">
                  <article className="article">
                    <header className="article__head">
                    </header>{/* /.article__head */}
                  </article></div>
                <div className="article__body">
                  <p>This {this.props.coin.fullName} Price Chart will be helpful in determining the current {this.props.coin.fullName} price, as well as trends in {this.props.coin.fullName} price. Our {this.props.coin.fullName} price chart is highly customizable to help you find and analyze the trends in {this.props.coin.fullName} price and {this.props.coin.fullName} value.</p><br />
                </div>
                <div className="row">
                  <div className="col-md-7">
                    <h3>{this.props.coin.fullName} Price Chart</h3>
                    <div>
                    {this.addGraph()}
                    </div>
                  </div>
                  <div className="col-md-5">
                    <h3>News of {this.props.coin.fullName} Price</h3>
                    <div id="scroller">
                      {this.addNews()}
                    </div>
                  </div>
                </div>
                {/* row */}
                <br />
                <br/>
                <h3 align="center"><a href={"/exchange/"+this.props.symbol}>Exchanges to Track {this.props.coin.fullName} Price</a></h3>
                <div id="exchanges"></div>
                {/*  Insert 625-728-Combo-Tag Code Here   */}
                {/*#include virtual="/includes/625-728-Combo-Tag.shtml" */}
                {/*  End of 625-728-Combo-Tag Code Here  */}
                <br /><br />
                <table border={0} width="100%" cellPadding={0} cellSpacing={0}>
                  <tbody><tr>
                      <td align="center">
                        {/*#include virtual="/includes/300x250-Content.shtml" */}
                      </td>
                    </tr>
                  </tbody></table>
                <br /><br /><br /><br />
                <div align="center"><b>Click here for more pages like this </b> <a href={"./"+this.props.symbol}><b>{this.props.coin.fullName} Price Chart</b></a></div>
                <div style={{height: '1200px'}} />
              </div>{/* /.article__body */}
              {/* /.article */}
            </div>{/* /.section__body */}
            {/* /.section */}
            <section className="section-ads">
              <div className="ad-bar">
                {/* Start 728x15-BTF-Link-Ad */}
                {/*#include virtual="/includes/728x15-BTF-Link-Ad.shtml" */}
                {/* End 728x15-BTF-Link-Ad */}
              </div>{/* /.ad-bar */}
            </section>{/* /.section */}
          </div>{/* /.main__content */}
        </div>{/* /.main */}
        {/* /.content */}
        <aside className="sidebar sticky-sidebar">
          <div className="ads">
            <div className="ad-box">
              {/* START Ad Zone 1 Right Column */}
              {/*#include virtual="/includes/Ad-Zone-1-Right-Column.shtml" */}
              {/* END Ad Zone 1 Right Column */}
            </div>{/* /.ad-box */}
            <div className="ad-box">
              {/* START Ad Zone 2 Right Column */}
              {/*#include virtual="/includes/Ad-Zone-2-Right-Column.shtml" */}
              {/* END Ad Zone 2 Right Column */}
            </div>{/* /.ad-box */}
            <div className="ad-box ad-box--large">
              {/* START Ad Zone 3 Right Column */}
              {/*#include virtual="/includes/Ad-Zone-3-Right-Column.shtml" */}
              {/* END Ad Zone 3 Right Column */}
            </div>{/* /.ad-box ad-box-/-large */}
          </div>{/* /.ads */}
        </aside>{/* /.sidebar */}
        {/* /.container */}
        <footer className="footer">
          <div className="footer__ads hidden-xs">
            <div className="ad728BTF">
              {/* START 728x90-BTF */}
              {/*#include virtual="/includes/728x90-BTF-Code.shtml" */}
              {/* END 728x90-BTF */}
            </div>{/* /.ad */}
          </div>{/* /.footer__ads */}
          {/* START Bottom Menu */}
          {/*#include virtual="/includes/bottom-menu.shtml" */}
          {/* END Bottom Menu */}
          <div className="footer__content">
            {/* START Footer */}
            {/*#include virtual="/includes/footer.shtml" */}
            {/* END Footer */}
            <div className="footer__site-map">
              <a href={"./"+this.props.symbol}>{this.props.coin.fullName} Price Chart</a>
            </div>{/* /.footer__site-map */}
          </div>{/* /.footer__content */}
          {/* /.footer */}
        {/* /.wrapper */}
        {/*  SET UP Addthis & Pinterest Pin Function  */}
        {/*#include virtual="/includes/addthis_pinterest.shtml" */}
        {/*  End of Addthis & Pinterest Pin Function  */}
        </footer>
      </div>
	
	)}
}

export default Chart;