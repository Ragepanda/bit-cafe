import React from "react";
import { Helmet } from "react-helmet";
import API from "../../utils/API";
import "./About.css";
import NewsContainer from "../Chart/NewsContainer";
class About extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      coin: this.props.coin,
      symbol: this.props.symbol,
      articles: []
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
        API.getArticlesBySymbol(this.props.symbol)
    .then(res=>{
      this.setState({articles: res.data});

    })
      .catch(err => console.log(err));
  }

    addNews(){
    if(this.state.articles.length > 0){
      return(
        <NewsContainer articles = {this.state.articles}/>
      )
    }
  }


  render() {

    
    if (this.props.coin == null || this.props.symbol == null) return <div></div>;

    const aboutInfo = [
      {symbol: "BTC", p1: "Bitcoin is an electronic payment system and the most popular cryptocurrency. Bitcoin was created by a mysterious person(s) named Satoshi Nakamoto to be a secure, peer-to-peer currency. To learn more about cryptocurrency in general, click here.", p2: "So what is Bitcoin mining? It is when a large network of computers process and solve how to chain together blocks of bitcoin transactions. When a bitcoin miner does this, they are given newly created Bitcoin and fees. This method of mining is called 'proof of work'.", p3: "Like most cryptocurrencies, and currencies, Bitcoin is a fiat currency. So technically the answer to what is Bitcoin worth, is nothing. That being said, since enough people agree to value it as a currency, it does have value.", p4: "A Bitcoin wallet stores relevant information to access one's Bitcoin, such as the private key to access your Bitcoin and to make transactions with Bitcoin. A Bitcoin wallet can be a desktop program, a web program, a piece of hardware, or a mobile app."},
      {symbol: "ETH", p1: "Ethereum is an electronic payment system and a popular cryptocurrency. Ethereum was the first cryptocurrency to employ smart contracts. Smart contracts are programs that can do things such as: exchange money, content, or anything of value. To learn more about cryptocurrency in general, click here.", p2: "So what is Ethereum mining? It is when a large network of computers process and solve how to chain together blocks of Ethereum transactions. When a Ethereum miner does this, they are given newly created Ethereum and fees. This method of mining is called 'proof of work'.", p3: "Like most cryptocurrencies, and currencies, Ethereum is a fiat currency. So technically the answer to what is Ethereum worth, is nothing. That being said, since enough people agree to value it as a currency, it does have value.", p4:"A Ethereum wallet stores relevant information to access one's Ethereum, such as the private key to access your Ethereum and to make transactions with Ethereum. A Ethereum wallet can be a desktop program, a web program, a piece of hardware, or a mobile app."},
      {symbol: "XRP", p1: "Ripple, or XRP, is an electronic payment system and a popular cryptocurrency. Unlike other cryptocurrencies, ripple does not have a blockchain and is a centralized currency. To learn more about cryptocurrency in general, click here.", p2: "Ripple is one of the few cryptocurrencies that does not have mining, so you can't mine Ripple.", p3: "Like most cryptocurrencies, and currencies, Ripple is a fiat currency. So technically the answer to what is Ripple worth, is nothing. That being said, since enough people agree to value it as a currency, it does have value.", p4:"A Ripple wallet stores relevant information to access one's Ripple, such as the private key to access your Ripple and to make transactions with Ripple. A Ripple wallet can be a desktop program, a web program, a piece of hardware, or a mobile app."},
      {symbol: "BCH", p1 : "Bitcoin Cash, or BCH, is an electronic payment system and a popular cryptocurrency. Bitcoin Cash came about when it was forked from Bitcoin. Bitcoin Cash was made to aid in scaling the underlying Bitcoin technology. To learn more about cryptocurrency in general, click here.", p2: "So what is Bitcoin Cash mining? It is when a large network of computers process and solve how to chain together blocks of bitcoin transactions. When a bitcoin cash miner does this, they are given newly created Bitcoin Cash and fees. This method of mining is called 'proof of work'.", p3: "Like most cryptocurrencies, and currencies, Bitcoin Cash is a fiat currency. So technically the answer to what is Bitcoin Cash worth, is nothing. That being said, since enough people agree to value it as a currency, it does have value.", p4: "A Bitcoin Cash wallet stores relevant information to access one's Bitcoin Cash, such as the private key to access your Bitcoin Cash and to make transactions with Bitcoin Cash. A Bitcoin Cash wallet can be a desktop program, a web program, a piece of hardware, or a mobile app."},
      {symbol: "BNB", p1 : "Binance Coin, or BNB, is a cryptocurrency issued by Binance exchange. Binance Coin is similar to Ether and the Ethereum blockchain. To learn more about cryptocurrency in general, click here.", p2: "So what is Binance Coin mining? It is when a large network of computers process and solve how to chain together blocks of bitcoin transactions. When a Binance Coin miner does this, they are given newly created Binance Coin and fees. This method of mining is called 'proof of work'.", p3: "Like most cryptocurrencies, and currencies, Binance Coin is a fiat currency. So technically the answer to what is Binance Coin worth, is nothing. That being said, since enough people agree to value it as a currency, it does have value.", p4: "A Binance Coin wallet stores relevant information to access one's Binance Coin, such as the private key to access your Binance Coin and to make transactions with Binance Coin. A Binance Coin wallet can be a desktop program, a web program, a piece of hardware, or a mobile app."},
      {symbol: "USDT", p1 : "Tether, or USDT, is a cryptocurrency meant to mirror the value of the U.S. Dollar. This stable cryptocurrency can then be used like digital US Dollars. To learn more about cryptocurrency in general, click here.", p2: "Tether mining is not possible, as this goes against the whole point of Tether.", p3: "Unlike most currencies, Tether is actually backed in real life by another fiat currency, the US dollar. So each Tether is worth $1.", p4: "A Tether wallet stores relevant information to access one's Tether, such as the private key to access your Tether and to make transactions with Tether. A Tether wallet can be a desktop program, a web program, a piece of hardware, or a mobile app."},
      {symbol: "EOS", p1 : "EOS is a blockchain protocol from EOS.IO. This protocol emulates most attributes of a real computer, with those resources distributed to all EOS cryptocurrency holders. To learn more about cryptocurrency in general, click here.", p2: "So what is EOS mining? It is a little different, as EOS does not have a mining pool. So you need to mine Ethereum and then convert that Ether into EOS.", p3: "The EOS token is said by the creators to have no monetary value or worth, but enough people agree that it has value.", p4: "A EOS wallet stores relevant information to access one's EOS, such as the private key to access your EOS and to make transactions with EOS. A EOS wallet can be a desktop program, a web program, a piece of hardware, or a mobile app."},
      {symbol: "BSV", p1 : "Bitcoin SV, or BSV, is an electronic payment system and a popular cryptocurrency. Bitcoin SV has a larger block size than Bitcoin Cash and Bitcoin so can allow for more transactions and a larger network scale. To learn more about cryptocurrency in general, click here.", p2: "So what is Bitcoin SV mining? It is when a large network of computers process and solve how to chain together blocks of bitcoin transactions. When a Bitcoin SV miner does this, they are given newly created Bitcoin SV and fees. This method of mining is called 'proof of work'.", p3: "Like most cryptocurrencies, and currencies, Bitcoin SV is a fiat currency. So technically the answer to what is Bitcoin SV worth, is nothing. That being said, since enough people agree to value it as a currency, it does have value.", p4: "A Bitcoin SV wallet stores relevant information to access one's Bitcoin SV, such as the private key to access your Bitcoin SV and to make transactions with Bitcoin SV. A Bitcoin SV wallet can be a desktop program, a web program, a piece of hardware, or a mobile app."},
      {symbol: "XLM", p1 : "Stellar, or XLM, is an electronic payment system similar to Ripple, that looks to reduce the cost and time needed for cross-border transfers. However, Stellar is an open source system while Ripple is closed. To learn more about cryptocurrency in general, click here.", p2: "So what is Stellar mining? Not possible. Much like Ripple, Stellar is designed to not be mined.", p3: "Like most cryptocurrencies, and currencies, Stellar is a fiat currency. So technically the answer to what is Stellar worth, is nothing. That being said, since enough people agree to value it as a currency, it does have value.", p4: "A Stellar wallet stores relevant information to access one's Stellar, such as the private key to access your Stellar and to make transactions with Stellar. A Stellar wallet can be a desktop program, a web program, a piece of hardware, or a mobile app."},
      {symbol: "ATOM", p1 : "Cosmos is a decentralized network of independent parallel blockchains. Essentially, Cosmos is like an internet of blockchains.", p2: "So what is Cosmos mining? It is when a large network of computers process and solve how to chain together blocks of Cosmos transactions. When a Cosmos miner does this, they are given newly created Cosmos and fees.", p3: "Like most cryptocurrencies, and currencies, Cosmos is a fiat currency. So technically the answer to what is Cosmos worth, is nothing. That being said, since enough people agree to value it as a currency, it does have value.", p4: "A Cosmos wallet stores relevant information to access one's Cosmos, such as the private key to access your Cosmos and to make transactions with Cosmos. A Cosmos wallet can be a desktop program, a web program, a piece of hardware, or a mobile app."},
      {symbol: "MIOTA", p1 : "IOTA uses a distributed ledger called Tangle. For a transaction to occur, that transaction has to do some 'Proof of Work' on two previous transactions. This allows for rapid scalability.", p2: "IOTA mining is not a thing, since this directly goes against IOTA's vision as a cryptocurrency.", p3: "Like most cryptocurrencies, and currencies, IOTA is a fiat currency. So technically the answer to what is IOTA worth, is nothing. That being said, since enough people agree to value it as a currency, it does have value.", p4: "A IOTA wallet stores relevant information to access one's IOTA, such as the private key to access your IOTA and to make transactions with IOTA. A IOTA wallet can be a desktop program, a web program, a piece of hardware, or a mobile app."},
      {symbol: "NEO", p1 : "NEO, formerly Antshares, aims to build a 'smart economy'. Neo's dual-token ecosystem can be used for creating dApps and ICOs. Its consensus algorithm is purportedly faster than those of Ethereum and Bitcoin.", p2: "So what is NEO mining? It is when a large network of computers process and solve how to chain together blocks of NEO transactions. When a NEO miner does this, they are given newly created NEO and fees.", p3: "Like most cryptocurrencies, and currencies, NEO is a fiat currency. So technically the answer to what is NEO worth, is nothing. That being said, since enough people agree to value it as a currency, it does have value.", p4: "A NEO wallet stores relevant information to access one's NEO, such as the private key to access your NEO and to make transactions with NEO. A NEO wallet can be a desktop program, a web program, a piece of hardware, or a mobile app."},
      {symbol: "LINK", p1 : "Chainlink (LINK) is a decentralized oracle service, which aims to connect smart contracts with data from the real world. Oracles provide external data (e.g. temperature, weather) that trigger smart contract executions upon the fulfillment of pre-defined conditions.", p2: "LINK is one of the cryptocurrencies that is not mineable, so you cannot mine LINK.", p3: "Like most cryptocurrencies, and currencies, LINK is a fiat currency. So technically the answer to what is LINK worth, is nothing. That being said, since enough people agree to value it as a currency, it does have value.", p4: "A Chainlink wallet stores relevant information to access one's Chainlink, such as the private key to access your Chainlink and to make transactions with Chainlink. A Chainlink wallet can be a desktop program, a web program, a piece of hardware, or a mobile app."},
      {symbol: "XTZ", p1 : "Texos (XTZ) is a multi-purpose platform that supports smart contracts that can self correct and govern to manage network modifications.", p2: "Because Tezos is a Proof of Stake blockchain, it is not mineable.", p3: "Like most cryptocurrencies, and currencies, Tezos is a fiat currency. So technically the answer to what is Tezos worth, is nothing. That being said, since enough people agree to value it as a currency, it does have value.", p4: "A Tezos wallet stores relevant information to access one's Tezos, such as the private key to access your Tezos and to make transactions with Tezos. A Tezos wallet can be a desktop program, a web program, a piece of hardware, or a mobile app."},
      {symbol: "DASH", p1 : "Dash (DASH) describes itself as digital cash that aims to offer financial freedom to everyone. Built to support real-life use cases, Dash aims to provide a fully-decentralized payments solution. Users can reportedly purchase goods at thousands of merchants.", p2: "So what is DASH mining? It is when a large network of computers process and solve how to chain together blocks of DASH transactions. When a DASH miner does this, they are given newly created DASH and fees. This method of mining is called 'proof of work'.", p3: "Like most cryptocurrencies, and currencies, DASH is a fiat currency. So technically the answer to what is DASH worth, is nothing. That being said, since enough people agree to value it as a currency, it does have value.", p4: "A Dash wallet stores relevant information to access one's Dash, such as the private key to access your Dash and to make transactions with Dash. A Dash wallet can be a desktop program, a web program, a piece of hardware, or a mobile app."},
      {symbol: "LEO", p1 : "UNUS SED LEO (LEO) is a cryptocurrency token and operates on the Ethereum platform. It has a Proof of Stake consensus algorithm.", p2: "LEO coin doesn't do mining in the typical sense. If you hold a large number of LEO coin you will start getting more however.", p3: "Like most cryptocurrencies, and currencies, LEO is a fiat currency. So technically the answer to what is LEO worth, is nothing. That being said, since enough people agree to value it as a currency, it does have value.", p4: "A UNUS SED LEO wallet stores relevant information to access one's UNUS SED LEO, such as the private key to access your UNUS SED LEO and to make transactions with UNUS SED LEO. A UNUS SED LEO wallet can be a desktop program, a web program, a piece of hardware, or a mobile app."},
      {symbol: "ADA", p1 : "Cardano (ADA) is a decentralized platform that will allow complex programmable transfers of value in a secure and scalable fashion. Cardano will use a democratic governance system that allows the project to evolve over time, and fund itself sustainably through a treasury system.", p2: "Because Cardano is not a Proof of Work coin, it cannot be mined.", p3: "Like most cryptocurrencies, and currencies, Cardano is a fiat currency. So technically the answer to what is Cardano worth, is nothing. That being said, since enough people agree to value it as a currency, it does have value.", p4: "A Cardano wallet stores relevant information to access one's Cardano, such as the private key to access your Cardano and to make transactions with Cardano. A Cardano wallet can be a desktop program, a web program, a piece of hardware, or a mobile app."},
      {symbol: "TRX", p1 : "TRON (TRX) strives to build the future of a truly decentralized internet and global free content entertainment system that utilizes blockchain technology.", p2: "TRON uses a Delegated Proof of Stake algorithm, and therefore can not be mined in the traditional sense.", p3: "Like most cryptocurrencies, and currencies, TRON is a fiat currency. So technically the answer to what is TRON worth, is nothing. That being said, since enough people agree to value it as a currency, it does have value.", p4: "A TRON wallet stores relevant information to access one's TRON, such as the private key to access your TRON and to make transactions with TRON. A TRON wallet can be a desktop program, a web program, a piece of hardware, or a mobile app."},
      {symbol: "XMR", p1 : "Monero (XMR) is a private, secure, and untraceable cryptocurrency that was launched April 18th, 2014. With Monero, it is said you are in complete control of your funds and privacy no one else can see anyone else's balances or transactions.", p2: "So what is Monero mining? It is when a large network of computers process and solve how to chain together blocks of Monero transactions. When a Monero miner does this, they are given newly created Monero and fees. This method of mining is called 'proof of work'.", p3: "Like most cryptocurrencies, and currencies, Monero is a fiat currency. So technically the answer to what is Monero worth, is nothing. That being said, since enough people agree to value it as a currency, it does have value.", p4: "A Monero wallet stores relevant information to access one's Monero, such as the private key to access your Monero and to make transactions with Monero. A Monero wallet can be a desktop program, a web program, a piece of hardware, or a mobile app."},
      {symbol: "AION", p1 : "The Aion Network is meant to be a blockchain platform to build Java applications upon. It hopes to leverage blockchain technology to get developers to adopt its platform.", p2: "So what is AION mining? It is when a large network of computers process and solve how to chain together blocks of AION transactions. When a AION miner does this, they are given newly created AION and fees. This method of mining is called 'proof of work'.", p3: "Like most cryptocurrencies, and currencies, AION is a fiat currency. So technically the answer to what is AION worth, is nothing. That being said, since enough people agree to value it as a currency, it does have value.", p4: "A AION wallet stores relevant information to access one's AION, such as the private key to access your AION and to make transactions with AION. A AION wallet can be a desktop program, a web program, a piece of hardware, or a mobile app."}
    ]

    let aboutText = aboutInfo.find(e => e.symbol === this.props.symbol);

    return (
      <div className="wrapper">
        <Helmet>
          <title>{this.props.coin.fullName + " | What is " + this.props.coin.fullName}</title>
          <meta name="description" content={"This page will help answer the question of, what is " + this.props.coin.fullName + "? Our what is " + this.props.coin.fullName + " page provides useful information about the cryptocurrency, " + this.props.coin.fullName + ". If you still don't know what is " + this.props.coin.fullName + ", then read on."} />
          <meta name="keywords" content={"cryptocurrency,crypto,coin," + this.props.coin.fullName + "," + this.props.symbol + ",price,value,news,aggregator,new"} />
          <meta name="author" content="bitcoinsama.com" />
          <meta http-equiv="Content-Language" content="en-US" />
          <meta name="rating" content="kids" />
          <meta http-equiv="content-type" content="text/html" charSet="utf-8" />
        </Helmet>
        <div className="container">
          <div className="content">
            <div className="main">
              <div className="main__content">
                <section className="section">
                  {/* SET UP Menu Code */}
                  {/*#include virtual="/includes/728x15-ATF-Link-Ad.shtml" */}
                  {/* END of Menu Code */}
                  <hr />
                  <hr />
                  <hr />
                  <header className="section__head">
                    <h1 align="left"><a href={"./"+this.props.symbol}>{this.props.coin.fullName}</a></h1>
                    <h2 align="left">What is {this.props.coin.fullName} ?</h2>
                  </header>{/* /.section__head */}
                  <div className="section__body">
                        <p>This page will help answer the question of, what is {this.props.coin.fullName}? Our what is {this.props.coin.fullName} page provides useful information about the cryptocurrency, {this.props.coin.fullName}. If you still don't know what is {this.props.coin.fullName}, then read on.</p>
                        <section className="accordion-section clearfix mt-3" aria-label="Question Accordions">
                          <div className="container">
                          
                            <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">

                            <div className="panel panel-default">
                              <div className="panel-heading p-3 mb-3" role="tab" id="heading0">
                              <h3 className="panel-title">
                                <a className="collapsed" role="button" title="" data-toggle="collapse" data-parent="#accordion" href="#collapse0" aria-expanded="true" aria-controls="collapse0">
                                What is {this.props.coin.fullName}?
                                </a>
                              </h3>
                              </div>
                              <div id="collapse0" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading0">
                              <div className="panel-body px-3 mb-4">
                                <p>{aboutText.p1}</p>
                              </div>
                              </div>
                            </div>
                            
                            <div className="panel panel-default">
                              <div className="panel-heading p-3 mb-3" role="tab" id="heading1">
                              <h3 className="panel-title">
                                <a className="collapsed" role="button" title="" data-toggle="collapse" data-parent="#accordion" href="#collapse1" aria-expanded="true" aria-controls="collapse1">
                                What is {this.props.coin.fullName} mining?
                                </a>
                              </h3>
                              </div>
                              <div id="collapse1" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading1">
                              <div className="panel-body px-3 mb-4">
                                <p>{aboutText.p2}</p>
                              </div>
                              </div>
                            </div>
                            
                            <div className="panel panel-default">
                              <div className="panel-heading p-3 mb-3" role="tab" id="heading2">
                              <h3 className="panel-title">
                                <a className="collapsed" role="button" title="" data-toggle="collapse" data-parent="#accordion" href="#collapse2" aria-expanded="true" aria-controls="collapse2">
                                What is {this.props.coin.fullName} worth?
                                </a>
                              </h3>
                              </div>
                              <div id="collapse2" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading2">
                              <div className="panel-body px-3 mb-4">
                                <p>{aboutText.p3}</p>
                              </div>
                              </div>
                            </div>
                            
                            <div className="panel panel-default">
                              <div className="panel-heading p-3 mb-3" role="tab" id="heading3">
                              <h3 className="panel-title">
                                <a className="collapsed" role="button" title="" data-toggle="collapse" data-parent="#accordion" href="#collapse3" aria-expanded="true" aria-controls="collapse3">
                                What is {this.props.coin.fullName} price?
                                </a>
                              </h3>
                              </div>
                              <div id="collapse3" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading3">
                              <div className="panel-body px-3 mb-4">
                                <p>{this.props.coin.price}</p>
                              </div>
                              </div>
                            </div>

                            <div className="panel panel-default">
                              <div className="panel-heading p-3 mb-3" role="tab" id="heading4">
                              <h3 className="panel-title">
                                <a className="collapsed" role="button" title="" data-toggle="collapse" data-parent="#accordion" href="#collapse4" aria-expanded="true" aria-controls="collapse4">
                                What is {this.props.coin.fullName} marketcap?
                                </a>
                              </h3>
                              </div>
                              <div id="collapse4" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading4">
                              <div className="panel-body px-3 mb-4">
                                <p>{this.props.coin.marketCapString}</p>
                              </div>
                              </div>
                            </div>

                            <div className="panel panel-default">
                              <div className="panel-heading p-3 mb-3" role="tab" id="heading5">
                              <h3 className="panel-title">
                                <a className="collapsed" role="button" title="" data-toggle="collapse" data-parent="#accordion" href="#collapse5" aria-expanded="true" aria-controls="collapse5">
                                What is a {this.props.coin.fullName} wallet?
                                </a>
                              </h3>
                              </div>
                              <div id="collapse5" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading5">
                              <div className="panel-body px-3 mb-4">
                                <p>{aboutText.p4}</p>
                              </div>
                              </div>
                            </div>
                            </div>
                          
                          </div>
                        </section>

                        <br/>
                        <br/>
                        <h3><a href={"/news/"+this.props.symbol}>News: What is {this.props.coin.fullName}?</a></h3>
                        <div id="newsscroll">
                          {this.addNews()}
                        </div>
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
                          <br/>
                          <br/>
                        <div align="center"><b>Click here for more pages like this </b> <a href={"./"+this.props.symbol}><b>What is {this.props.coin.fullName}</b></a></div>
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
              <a href={"./"+this.props.symbol}>What is {this.props.coin.fullName} ?</a>
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