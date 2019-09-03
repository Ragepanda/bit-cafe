import React from "react";
import API from "../../utils/API";
import ArticleCard from "../../components/News/Article";
import './News.css';
import { Helmet } from "react-helmet";

class News extends React.Component {

  state = {
    tweets: [],
    articles: [],
    combinedAggregates: []
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



  render() {
    if (typeof(this.props.coin) ==="undefined" || this.state.articles.length === 0) return <div></div>;
    if (this.state.articles.length > 0) {
      // console.log(this.state.articles);
        return(
                <div className="wrapper">
                <Helmet>
                  <title>{this.props.coin.fullName + " | "+ this.props.coin.fullName + " News Aggregator"}</title>
                  <meta name="description" content={"This is our "+this.props.coin.fullName+" news aggregator. Here you can find recent "+this.props.coin.fullName+" news that can help you understand "+this.props.coin.fullName+" trends and possibly provide insight into "+this.props.coin.fullName+" price trends. This "+this.props.coin.fullName+" news page is updated constantly. Please enjoy using our "+this.props.coin.fullName+" news aggregator."}/>
                  <meta name="keywords" content={"cryptocurrency,crypto,coin,"+this.props.coin.fullName+","+this.props.symbol+",price,value,news,aggregator,new,info"} />
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
                                    <h1 align="left"><a href={"./"+this.props.symbol}>{this.props.coin.fullName}</a></h1>
                                    <h2 align="left">{this.props.coin.fullName} News Aggregator</h2>
                                  </header>{/* /.section__head */}
                                  <div className="section__body">
                                    <article className="article">
                                      <header className="article__head">
                                      </header>{/* /.article__head */}
                                      <div className="article__body">
                                        <p>This is our {this.props.coin.fullName} news aggregator. Here you can find recent {this.props.coin.fullName} news that can help you understand {this.props.coin.fullName} trends and possibly provide insight into {this.props.coin.fullName} price trends. This {this.props.coin.fullName} news page is updated constantly. Please enjoy using our {this.props.coin.fullName} news aggregator.</p><br />
                                        <h3>Current {this.props.coin.fullName} News</h3>
                    <div className="col-12">
                    <div className="row justify-content-center">
                        {/* {this.state.tweets.map(tweet => 
                            <TweetCard tweet = {tweet} key = {tweet.twitterId}/>          
                        )} */}
                              {
                                this.state.articles.map((article, index) =>
                                  <ArticleCard article={article} key={index}> </ArticleCard>)

                              }
                            </div>
                          </div>
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
                          <div align="center"><b>Click here for more pages like this </b> <a href={"./"+this.props.symbol}><b>{this.props.coin.fullName} News Aggregator</b></a></div>
                          <div style={{ height: '1200px' }} />
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
                <a href={"./"+this.props.symbol}>{this.props.coin.fullName} News Aggregator</a>
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

    else return null;
  }
}

export default News;