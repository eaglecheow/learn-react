import React from "react"
import ReactDOM from "react-dom"

var commentList = [
    {
        title: "Hello World",
        description: "This is a test"
    },
    {
        title: "Second Message",
        description: "Why is this still happening?"
    },
    {
        title: "It's a Test Anyway",
        description: "So why do you even bother?"
    },
    {
        title: "This is actually not easy",
        description: "Can only do static stuff for now 😢"
    }
];

class CommentBoard extends React.Component{

    constructor(props){
        super(props);
        console.log(props);
        this.edit = this.edit.bind(this);
        this.delete = this.delete.bind(this);
    }

    edit(){
        alert("Editing message for: " + this.props.title);
    }

    delete(){
        alert("Deleting message for: " + this.props.title);
    }

    render(){
        return(
            <div className="comment-board">
                <h1>{this.props.title}</h1>
                <h4>{this.props.description}</h4>
                <div className="btn-group">
                    <button className="btn btn-primary" onClick={this.edit}>Edit</button>
                    <button className="btn btn-danger" onClick={this.delete}>Remove</button>
                </div>
            </div>
        );
    }
}

class CommentBoardList extends React.Component{

    deleteAllComment(){
        commentList = [];
    }

    addComment(){
        commentList.push({
            title: "Test Item",
            description: "Test description"
        });
    }

    render(){
        return(
            <div>
                {
                    commentList.map(function (item) {
                        return(<CommentBoard title={item.title} description={item.description}/>);
                    })
                }
                <div className="btn-group">
                    <button className="btn btn-default">Add Comment</button>
                    <button className="btn btn-danger" onClick={this.deleteAllComment}>Delete All</button>
                </div>
            </div>
        )
    }
}

class App extends React.Component{
    render(){
        return(
            <div>
                <CommentBoardList/>
            </div>
        )
    }
}

export default App;