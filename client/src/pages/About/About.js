import React from "react";
import { Helmet } from "react-helmet";

class About extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      coin: this.props.coin,
      symbol: this.props.symbol
    }
  }

  componentDidMount() {

    if (this.props.symbol !== this.props.match.params.symbol) {
      if (this.props.match.params.symbol !== null) {
        this.props.changeSymbol(this.props.match.params.symbol);
      }
      if (typeof(this.props.match.params.symbol) === "undefined")
        this.props.history.push("./"+this.props.symbol);
    }
  }


  render() {

    
    if (this.props.coin.CoinInfo == null || this.props.symbol == null) return <div></div>;

    const aboutInfo = [
      {symbol: "BTC", p1: "Bitcoin is an electronic payment system and the most popular cryptocurrency. Bitcoin was created by a mysterious person(s) named Satoshi Nakamoto to be a secure, peer-to-peer currency. To learn more about cryptocurrency in general, click here.", p2: "So what is Bitcoin mining? It is when a large network of computers process and solve how to chain together blocks of bitcoin transactions. When a bitcoin miner does this, they are given newly created Bitcoin and fees. This method of mining is called 'proof of work'.", p3: "Like most cryptocurrencies, and currencies, Bitcoin is a fiat currency. So technically the answer to what is Bitcoin worth, is nothing. That being said, since enough people agree to value it as a currency, it does have value.", p4: "A Bitcoin wallet stores relevant information to access one's Bitcoin, such as the private key to access your Bitcoin and to make transactions with Bitcoin. A Bitcoin wallet can be a desktop program, a web program, a piece of hardware, or a mobile app."},
      {symbol: "ETH", p1: "p1 text here", p2: "p2 text here", p3: "p3 text here"},
       {symbol: "XRP", p1: "p1 text here", p2: "p2 text here", p3: "p3 text here"}
    ]

    let aboutText = aboutInfo.find(e => e.symbol === this.props.symbol);
    console.log(aboutText);

    return (
      <div className="wrapper">
        <Helmet>
          <title>{this.props.coin.CoinInfo.FullName + " | What is " + this.props.coin.CoinInfo.FullName}</title>
          <meta name="description" content={"This page will help answer the question of, what is " + this.props.coin.CoinInfo.FullName + "? Our what is " + this.props.coin.CoinInfo.FullName + " page provides useful information about the cryptocurrency, " + this.props.coin.CoinInfo.FullName + ". If you still don't know what is " + this.props.coin.CoinInfo.FullName + ", then read on."} />
          <meta name="keywords" content={"cryptocurrency,crypto,coin," + this.props.coin.CoinInfo.FullName + "," + this.props.symbol + ",price,value,news,aggregator,new"} />
          <meta name="author" content="bitcoinsama.com" />
          <meta http-equiv="Content-Language" content="en-US" />
          <meta name="rating" content="kids" />
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
                    <h1 align="left"><a href={"./"+this.props.symbol}>{this.props.coin.CoinInfo.FullName}</a></h1>
                    <h2 align="left">What is {this.props.coin.CoinInfo.FullName} ?</h2>
                  </header>{/* /.section__head */}
                  <div className="section__body">
                    <article className="article">
                      <header className="article__head">
                      </header>{/* /.article__head */}
                      <div className="article__body">
                        <p>This page will help answer the question of, what is {this.props.coin.CoinInfo.FullName}? Our what is {this.props.coin.CoinInfo.FullName} page provides useful information about the cryptocurrency, {this.props.coin.CoinInfo.FullName}. If you still don't know what is {this.props.coin.CoinInfo.FullName}, then read on.</p>
                        <h3>An overview of {this.props.coin.CoinInfo.FullName}</h3>
                        <ul className="list-unstyled">
                          <li>What is {this.props.coin.CoinInfo.FullName}?</li>
                          <ul><li>{aboutText.p1}</li></ul>
                          <li>What is {this.props.coin.CoinInfo.FullName} mining?</li>
                          <ul><li>{aboutText.p2}</li></ul>
                          <li>What is {this.props.coin.CoinInfo.FullName} worth?</li>
                          <ul><li>{aboutText.p3}</li></ul>
                          <li>What is {this.props.coin.CoinInfo.FullName} price?</li>
                          <div id="priceContainer" />
                          <li>What is {this.props.coin.CoinInfo.FullName} marketcap?</li>
                          <div id="graphContainer" />
                          <li>What is a {this.props.coin.CoinInfo.FullName} wallet?</li>
                          <ul><li>{aboutText.p4}</li></ul>
                        </ul>
                        <h3><a href={"/news/"+this.props.symbol}>News: What is {this.props.coin.CoinInfo.FullName}?</a></h3>
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
                        <div align="center"><b>Click here for more pages like this </b> <a href={"./"+this.props.symbol}><b>Overview: What is {this.props.coin.CoinInfo.FullName}</b></a></div>

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
              <a href={"./"+this.props.symbol}>What is {this.props.coin.CoinInfo.FullName} ?</a>
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