import React from "react";
import ArticleHead from "./ArticleHead";

class NewsContainer extends React.Component{

constructor(props) {
		super(props);
		this.state = {
			article: []
		}
		this.retriveBody = this.retriveBody.bind(this);
		//console.log(this.state);
	}

	componentDidMount() {
		 //console.log(this.props.article);
	}

	retriveBody() {

		// API.getArticleBody(this.props.article.source, this.props.article.articleUrl)
		// 	.then(response => {
		// 		console.log(response.data);
		// 		const articleText = <ModalFiller text={response.data} article={this.props.article}></ModalFiller>;
		// 		ReactDOM.render(this.props.article.title, document.getElementById("title-" + this.props.article.id));
		// 		ReactDOM.render(articleText, document.getElementById(this.props.article.id));

		// 	})
	}

	render() {

		return(
        this.props.articles.map((article, index) =>
        	<ArticleHead article={article} key={index}> </ArticleHead>)
      	
		);

	}
}

export default NewsContainer