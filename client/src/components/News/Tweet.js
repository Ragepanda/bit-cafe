import React from "react"

class Tweet extends React.Component {
	state = {

		tweets: []
		// text: this.props.text,
		// user: this.props.user,
		// userProfilePicture: this.props.userProfilePicture,
		// embeddedLink: this.props.embeddedLink 
	}


	// itemStyle ={
	// 	float: "left",
	// 	textAlign: 'center',
	//     padding: "8px"
	// }


	render() {

		return (
			<div className="card col-sm-6" style={{ width: "25%" }}>
				<div className="card-body">
					<h6 className="card-subtitle mb-2 text-muted">  <span><img src={this.props.tweet.userProfilePicture}></img></span> Tweet From @{this.props.tweet.user}</h6>
					<p className="card-text">{this.props.tweet.text}</p>
					<a href={this.props.tweet.embeddedLink} className="card-link">Embedded Link</a>
				</div>
			</div>

		);

	}
}

export default Tweet;