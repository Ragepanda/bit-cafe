import React from "react";
import API from "../../utils/API";


class Exchange extends React.Component{

    constructor(props){
        super(props);

    }
    
	state ={
    	coins: []
  	}



	componentDidMount(){


	}

	render(){
		return(
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
                    <h1 align="left"><a href="./">Bitcoin Tools</a></h1>
                    <h2 align="left">Bitcoin Exchange Rate Overview</h2>
                  </header>{/* /.section__head */}
                  <div className="section__body">
                    <article className="article">
                      <header className="article__head">
                      </header>{/* /.article__head */}
                      <div className="article__body">
                        <p>This Bitcoin Exchange Rate Overview page will help you locate a bitcoin exchange to use to track the price of bitcoin as well as the current bitcoin exchange rate. This page also includes a bitcoin exchange rate calculator to help you track the bitcoin exchange rate for bitcoin to usd or other currencies.</p><br />
                        <h3>Bitcoin Exchange</h3>
                        <p>This is a bitcoin exchange repository, populated with many of the most used bitcoin exchanges. You can click a bitcoin exchange to get a more in-depth view of that bitcoin exchange.</p>
                        <div id="exchangeContainer" />
                        <h3>Bitcoin Exchange Rate Calculator</h3>
                        <p>This bitcoin exchange calculator will allow you to determine the bitcoin exchange rate to USD, and many other currencies.</p>
                        <div id="calculatorContainer" />
                        <p>For more useful calculators, click <a href="./">here</a></p>
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
                        <div align="center"><b>Click here for more pages like this </b> <a href="./"><b>Bitcoin Exchange Overview</b></a></div>
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
              <a href="./">Bitcoin Exchange</a>
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

export default Exchange;