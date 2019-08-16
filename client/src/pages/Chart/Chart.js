import React from "react";
import API from "../../utils/API";
import Graph from "./Graph";
import Moment from "moment";


class Chart extends React.Component{

	state ={
    	hourlyData: []
  	}



	componentDidMount(){
			API.getHourlyHistoryBySymbol(this.props.symbol)
      .then(res => {
		//console.log(res.data);
		this.setState({hourlyData: res.data}, function(){
			console.log(this.state.hourlyData);
			this.convertTime(res.data[0].time);
		});
		//console.log(test);
     	 })
		  .catch(err => console.log(err));
		 
	}	

	addGraph(){
		if(this.state.hourlyData.length > 0){
  			return(<Graph data = {this.state.hourlyData}/>)
		}
  	}

	  convertTime(timeStamp){
		   console.log(Moment.unix(timeStamp,"x").format("YYYY-MM-DD HH:mm:ss"));
	  }

	render(){
		return(
<div>
        <div className="wrapper">
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
                    <header className="section__head">
                      <div>
                        <h1 align="left"><a href="./">Bitcoin Tools</a></h1>
                        <h2 align="left">Bitcoin Price Overview</h2>
                      </div></header>{/* /.section__head */}
                  </section></div>
                <div className="section__body">
                  <article className="article">
                    <header className="article__head">
                    </header>{/* /.article__head */}
                  </article></div>
                <div className="article__body">
                  <p>This Bitcoin Price Chart will be helpful in determining the current bitcoin price, as well as trends in Bitcoin price. Our Bitcoin price chart is highly customizable to help you find and analyze the trends in Bitcoin price and bitcoin value.</p><br />
                </div>
                <div className="row">
                  <div className="col-md-7" id="chartDIV">
                    <h3>Bitcoin Price Chart</h3>
                    <div>
                    {this.addGraph()}
                    </div>
                  </div>
                  <div className="col-md-5">
                    <h3>News of Bitcoin Price</h3>
                    <div id="newsContainer">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</div>
                  </div>
                </div>
                {/* row */}
                <br />
                <h3 align="left"><a href="./">Exchanges to Track Bitcoin Price</a></h3>
                <div id="exchanges">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</div>
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
                <div align="center"><b>Click here for more pages like this </b> <a href="./"><b>Bitcoin Price Chart</b></a></div>
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
              <a href="./">Bitcoin Price Chart</a>
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