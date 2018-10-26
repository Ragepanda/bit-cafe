import React from "react"
import API from "../../utils/API"

class Article extends React.Component {
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

	retriveBody(){
		
		API.getArticleBody(this.props.article.source, this.props.article.articleUrl)
		.then(response =>{
			console.log(response.data);
		})
	}

	render() {

		return (
			<div className="card border-light col-md-5 m-1 ">
				<div className="card-body">
					<h5 className = "card-title">{this.props.article.title}</h5>
					<h6 className="card-subtitle mb-2 text-muted"> Source: {this.props.article.source}</h6>
					<img src={this.props.article.imageUrl}></img>
					<p className="card-text mt-3">{this.props.article.body}</p>
					<button onClick={this.retriveBody}>Embedded Link</button>
				</div>
			</div>
		);

	}
}

export default Article;