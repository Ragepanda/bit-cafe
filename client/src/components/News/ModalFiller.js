import React from "react"
import ReactDOM from"react-dom"

class ModalFiller extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            article: this.props.article,
            text: this.props.text
        }
        this.formatText = this.formatText.bind(this);

    }
    formatText(){
       var htmlText = [];
        console.log(this.state.text);
        this.state.text.articleBody.forEach(element => {
            if('p' in element){
                htmlText.push(<p>{element.p}</p>);
            }
            if('h2' in element){
                htmlText.push(<h2>{element.h2}</h2>);
            }
        })
        // ReactDOM.render(htmlText, document.getElementById("modal-filler-"+this.props.article.id));
        // console.log(htmlText);
        return htmlText;

    }

    componentWillMount(){
       
    }


    render() {
        return (
           
            <div className="text-center p-4 pt-2" id={"modal-filler-"+this.props.article.id}>
               {this.formatText()}
            </div>
           
        );
    }

}

export default ModalFiller;