import React from "react";
import API from "../../utils/API";
import { Helmet } from "react-helmet";


class About extends React.Component {

  constructor(props) {
    super(props);

  }

  state = {
    coins: []
  }



  componentDidMount() {


  }

  loadMeta() {
    // We can do a big switch statement here and have the return value be the exact helmet element we want. For example: 

    switch (this.props.symbol) {
      case "BTC":
        return
        <Helmet>
          <meta charSet="utf-8" />
          <title>My Title</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>

      case "ETH":
        return
        <Helmet>
          <meta charSet="utf-8" />
          <title>My Title</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
    }
  }

  render() {

    return (
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
                    <h2 align="left">What is Bitcoin ?</h2>
                  </header>{/* /.section__head */}
                  <div className="section__body">
                    <article className="article">
                      <header className="article__head">
                      </header>{/* /.article__head */}
                      <div className="article__body">
                        <p>This page will help answer the question of, what is Bitcoin? Our what is Bitcoin page provides useful information about the cryptocurrency, Bitcoin. If you still don't know what is bitcoin, then read on.</p>
                        <h3>An overview of Bitcoin</h3>
                        <ul className="list-unstyled">
                          <li>What is Bitcoin?</li>
                          <ul><li>Bitcoin is an electronic payment system and the most popular cryptocurrency. Bitcoin was created by a mysterious person(s) named Satoshi Nakamoto to be a secure, peer-to-peer currency. To learn more about cryptocurrency in general, click here.</li></ul>
                          <li>What is Bitcoin mining?</li>
                          <ul><li>So what is Bitcoin mining? It is when a large network of computers process and solve how to chain together blocks of bitcoin transactions. When a bitcoin miner does this, they are given newly created Bitcoin and fees. This method of mining is called 'proof of work'.</li></ul>
                          <li>What is Bitcoin worth?</li>
                          <ul><li>Like most cryptocurrencies, and currencies, Bitcoin is a fiat currency. So technically the answer to what is Bitcoin worth, is nothing. That being said, since enough people agree to value it as a currency, it does have value.</li></ul>
                          <li>What is Bitcoin price?</li>
                          <div id="priceContainer" />
                          <li>What is Bitcoin marketcap?</li>
                          <div id="graphContainer" />
                          <li>What is a Bitcoin wallet?</li>
                          <ul><li>A Bitcoin wallet stores relevant information to access one's Bitcoin, such as the private key to access your Bitcoin and to make transactions with Bitcoin. A Bitcoin wallet can be a desktop program, a web program, a piece of hardware, or a mobile app.</li></ul>
                        </ul>
                        <h3><a href="./">News: What is Bitcoin?</a></h3>
                        <div id="newsContainer" />
                        {/*  Insert 625-728-Combo-Tag Code Here   */}
                        {/*#include virtual="/includes/625-728-Combo-Tag.shtml" */}
                        {/*  End of 625-728-Combo-Tag Code Here  */}

                        <table border={0} width="100%" cellPadding={0} cellSpacing={0}>
                          <tbody><tr>
                            <td align="center">
                              {/*#include virtual="/includes/300x250-Content.shtml" */}
                            </td>
                          </tr>
                          </tbody></table>
                        <div align="center"><b>Click here for more pages like this </b> <a href="./"><b>Overview: What is Bitcoin</b></a></div>

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
              <a href="./">What is Bitcoin ?</a>
            </div>{/* /.footer__site-map */}
          </div>{/* /.footer__content */}
        </footer>{/* /.footer */}
        {/* /.wrapper */}
        {/*  SET UP Addthis & Pinterest Pin Function  */}
        {/*#include virtual="/includes/addthis_pinterest.shtml" */}
        {/*  End of Addthis & Pinterest Pin Function  */}
      </div>

    )
  }
}

export default About;