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
			<div className="card border-0 col-md-5 m-1 justify-content-left">
				<div className="card-body">
					<h5 className = "card-title">{this.props.article.title}</h5>
					<h6 className="card-subtitle mb-2 text-muted"> Source: {this.props.article.source}</h6>
					<img src={this.props.article.imageUrl}></img>
					<p className="card-text mt-3">{this.props.article.body}</p>
					<button onClick={this.retriveBody} className="btn btn-dark" role="button" data-toggle="modal" data-target="#exampleModalLong">Read More</button>
					
				</div>
				<div className="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
  				<div className="modal-dialog modal-lg" role="document">
    				<div className="modal-content md-8">
     				 <div className="modal-header">
        				<h5 className="modal-title" id="exampleModalLongTitle">{this.props.article.title}</h5>
        				<button type="button" className="close" data-dismiss="modal" aria-label="Close">
          				<span aria-hidden="true">&times;</span>
        				</button>
      				</div>
      				<div className="modal-body">
        			<h2>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.

Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</h2>


<p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.

Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.

Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
<p>

Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.

Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.

Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
<h2>

Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.

Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.

Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</h2>
<p>

Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.

Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.

Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
<p>

Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.

Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.

Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
<h2>

Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.
</h2>      				
      				</div>
    				</div>
  					</div>
				</div>
			</div>
		);

	}
}

export default Article;

