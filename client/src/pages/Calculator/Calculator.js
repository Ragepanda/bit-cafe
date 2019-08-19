import React from "react";
import API from "../../utils/API";
import { Helmet } from "react-helmet";

class Calculator extends React.Component{

    constructor(props){
        super(props);

    }
    
	state ={
    	coins: []
  	}



	componentDidMount(){


	}

	render(){
    if (!this.props.coin) return <div></div>;
		return(
		<div className="wrapper">
        <Helmet>
          <title>{this.props.coin.CoinInfo.FullName + " | "+ this.props.coin.CoinInfo.FullName + " Calculator"}</title>
          <meta name="description" content={"This "+this.props.coin.CoinInfo.FullName+" Calculator overview page will provide you with a "+this.props.coin.CoinInfo.FullName+" calculator for the "+this.props.coin.CoinInfo.FullName+" exchange rate as well as a "+this.props.coin.CoinInfo.FullName+" calculator to determine the profitability of mining "+this.props.coin.CoinInfo.FullName+"."}/>
          <meta name="keywords" content={"cryptocurrency,crypto,coin,"+this.props.coin.CoinInfo.FullName+","+this.props.symbol+",price,value,calculator,calculators, exchange, rate, mining,profitability"} />
          <meta name="author" content="calc-aids.com"/>
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
                    <h1 align="left"><a href="./">{this.props.coin.CoinInfo.FullName}</a></h1>
                    <h2 align="left">{this.props.coin.CoinInfo.FullName} Calculator Overview</h2>
                  </header>{/* /.section__head */}
                  <div className="section__body">
                    <article className="article">
                      <header className="article__head">
                      </header>{/* /.article__head */}
                      <div className="article__body">
                        <p>This {this.props.coin.CoinInfo.FullName} Calculator overview page will provide you with a {this.props.coin.CoinInfo.FullName} calculator for the {this.props.coin.CoinInfo.FullName} exchange rate as well as a {this.props.coin.CoinInfo.FullName} calculator to determine the profitability of mining {this.props.coin.CoinInfo.FullName}.</p><br />
                        <h3>{this.props.coin.CoinInfo.FullName} Calculator - Exchange Rate {this.props.coin.CoinInfo.FullName} to USD</h3>
                        <p>This {this.props.coin.CoinInfo.FullName} calculator will allow you to determine the {this.props.coin.CoinInfo.FullName} exchange rate to USD, and many other currencies.</p>
                        <div id="exchangeCalcContainer" />
                        <h3>{this.props.coin.CoinInfo.FullName} Calculator - Mining Profitability</h3>
                        <p>This {this.props.coin.CoinInfo.FullName} calculator will allow you to determine the mining profitability of mining {this.props.coin.CoinInfo.FullName}.</p>
                        <div id="miningCalcContainer" />
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
                        <div align="center"><b>Click here for more pages like this </b> <a href="./"><b>{this.props.coin.CoinInfo.FullName} Calculator</b></a></div>
                        <div style={{height: '1200px'}} />
                      </div>{/* /.article__body */}
                    </article>{/* /.article */}
                  </div>{/* /.section__body */}
                </section>{/* /.section */}
                <section className="section-ads">
                  <div className="ad-bar">
                    {/* Start 728x15-BTF-Link-Ad */}
                    {/*#include virtual="/includes/728x15-BTF-Link-Ad.shtml" */}
                    {/* End 728x15-BTF-Link-Ad */}
                  </div>{/* /.ad-bar */}
                </section>{/* /.section */}
              </div>{/* /.main__content */}
            </div>{/* /.main */}
          </div>{/* /.content */}
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
        </div>{/* /.container */}
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
              <a href="./">{this.props.coin.CoinInfo.FullName} Calculator</a>
            </div>{/* /.footer__site-map */}
          </div>{/* /.footer__content */}
        </footer>{/* /.footer */}
        {/* /.wrapper */}
      {/*  SET UP Addthis & Pinterest Pin Function  */}
      {/*#include virtual="/includes/addthis_pinterest.shtml" */}
      {/*  End of Addthis & Pinterest Pin Function  */}
      </div>
	
	)}
}

export default Calculator;