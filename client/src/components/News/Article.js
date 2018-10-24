import React from "react"

class Article extends React.Component {
	state = {
		articles: []
	}

	


	componentDidMount() {
		console.log(this.props.article);
	}

	render() {

		return (
			<div className="card border-light col-md-5 m-1 ">
				<div className="card-body">
					<h5 className = "card-title">{this.props.article.title}</h5>
					<h6 className="card-subtitle mb-2 text-muted"> Source: {this.props.article.source}</h6>
					<img src={this.props.article.imageUrl}></img>
					<p className="card-text mt-3">{this.props.article.body}</p>
					<button ><a href={this.props.article.articleUrl} className="btn-dark">Embedded Link</a></button>
				</div>
			</div>
		);

	}
}

export default Article;