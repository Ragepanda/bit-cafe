import React from "react"
import ReactDOM from "react-dom"
import API from "../../utils/API"
import ModalFiller from "./ModalFiller"

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
		console.log(this.props.article);
	}

	retriveBody(){
		
		API.getArticleBody(this.props.article.source, this.props.article.articleUrl)
		.then(response =>{
			console.log(response.data);
			const articleText = <ModalFiller></ModalFiller>;
			ReactDOM.render(articleText, document.getElementById(this.props.article.id));
			
		})
	}

	render() {

		return (
			<div className="card border-0 col-md-5 m-1 justify-content-left">
				<div className="card-body">
					<h5 className = "card-title">{this.props.article.title}</h5>
					<h6 className="card-subtitle mb-2 text-muted"> Source: {this.props.article.source}</h6>
					<img src={this.props.article.imageUrl}></img>
					<p className="card-text mt-3">{this.props.article.body}</p>
					<a onClick={this.retriveBody} className="btn btn-dark" role="button">Embedded Link</a>					
				</div>

				<div id = {this.props.article.id} >
					
				</div>

			</div>
		);

	}
}

export default Article;