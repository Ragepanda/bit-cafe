import React from "react"

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
    }

    componentWillMount(){
        this.formatText();
    }


    render() {
        return (
            <div className = "modal-filler">
                <h2> Hello Wolrd! </h2>
                <p> Sentence 1 </p>
                <p> Sentence 2 </p>
            </div>
        );
    }

}

export default ModalFiller;