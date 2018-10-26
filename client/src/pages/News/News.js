import React from "react";
import API from "../../utils/API";
import ArticleCard from "../../components/News/Article";
var tweets = [];

class News extends React.Component {

    state = {
        tweets: [],
        articles: [],
        combinedAggregates: []
    }


    componentWillMount() {
        API.getArticles()
            .then(res => {
                this.setState({ articles: res.data });   
                API.getArticleBody(this.state.articles[1].source, this.state.articles[1].articleUrl)
                .then(response => {
                    console.log(response.data)
                })           
            })
            .catch(err => console.log(err));
    }



    render() {

        if (this.state.articles.length > 0) {
           // console.log(this.state.articles);
            
            return (
                <div>
                <br/>
                <br/>
                <div>
                AD SPACE
                AD SPACE
                </div>
                <div className="container">
                    <div className="row justify-content-center">
                        {/* {this.state.tweets.map(tweet => 
                            <TweetCard tweet = {tweet} key = {tweet.twitterId}/>          
                        )} */}
                        {
                            this.state.articles.map((article, index) => 
                            <ArticleCard article = {article} key = {index}> </ArticleCard> )
                            
                        }
                    </div>
                </div>
                <div>
                AD SPACE
                AD SPACE
                </div>
                <br/>
                <br/>
                </div>
            )
        }

        else return null;
    }
}

export default News;