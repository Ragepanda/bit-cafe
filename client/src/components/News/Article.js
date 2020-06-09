import React from "react"
import './Article.css';
// import ReactDOM from "react-dom"
// import API from "../../utils/API"
// import ModalFiller from "./ModalFiller"

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

		return (
			<div className="card border-0 col-md-5 m-1 justify-content-left">
				<div className="card-body">
				<a href={this.props.article.articleUrl} target="_blank"><h5 className="card-title">{this.props.article.title}</h5></a>
					<h6 className="card-subtitle mb-2 text-muted"> Source: {this.props.article.source}</h6>
					<a href={this.props.article.articleUrl} target="_blank"><img className="news-image" alt ="" src={this.props.article.imageUrl}></img></a>
					<p className="card-text mt-3">{this.props.article.body}</p>
					{/* <button onClick={this.retriveBody} className="btn btn-dark" role="button" data-toggle="modal" data-target={"#article-modal-" + this.props.article.id}>Read More</button> */}

				</div>

				{/* <div className="modal fade" id={"article-modal-" + this.props.article.id} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
					<div className="modal-dialog modal-lg" role="document">
						<div className="modal-content md-8">
							<div className="modal-header">
								<h1 className="modal-title" id={"title-" + this.props.article.id}>{this.props.article.title}</h1>
								<button type="button" className="close" data-dismiss="modal" aria-label="Close">
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
							
							<div id={this.props.article.id}>
								
							</div>
						</div>
					</div>
				</div> */}
			</div >
		);

	}
}

export default Article;

