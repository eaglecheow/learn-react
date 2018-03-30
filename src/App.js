import React from "react"

var commentList = [
    {
        id: 0,
        title: "Hello World",
        description: "This is a test"
    },
    {
        id: 1,
        title: "Second Message",
        description: "Why is this still happening?"
    },
    {
        id: 2,
        title: "It's a Test Anyway",
        description: "So why do you even bother?"
    },
    {
        id: 3,
        title: "This is actually not easy",
        description: "Can only do static stuff for now 😢"
    }
];

class CommentBoard extends React.Component{

    constructor(props){
        super(props);
        console.log(props);
        this.state = {
            itemId: this.props.itemId,
            title: this.props.title,
            description: this.props.description,
            isHidden: false
        };
        this.edit = this.edit.bind(this);
        this.delete = this.delete.bind(this);
    }

    edit(){
        alert("Editing: " + this.state.title);
    }

    delete(){
        commentList.splice(this.state.itemId, 0);
        this.setState({isHidden: true});
    }

    render(){
        return(
            <div className="comment-board" hidden={this.state.isHidden}>
                <h1>{this.state.title}</h1>
                <h4>{this.state.description}</h4>
                <div className="btn-group">
                    <button className="btn btn-primary" onClick={this.edit}>Edit</button>
                    <button className="btn btn-danger" onClick={this.delete}>Remove</button>
                </div>
            </div>
        );
    }
}

class CommentBoardList extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            commentList: commentList
        };
        this.deleteAllComment = this.deleteAllComment.bind(this);
        this.addComment = this.addComment.bind(this);
    }

    deleteAllComment(){
        commentList = [];
        this.setState({commentList: commentList});
    }

    addComment(){
        commentList.push({
            id: commentList.length,
            title: "Test Comment",
            description: "Test message LOL 😆"
        });
        this.setState({commentList: commentList});
    }

    render(){
        return(
            <div className="comment-app">
                <div className="btn-group button-bar">
                    <button className="btn btn-default" onClick={this.addComment}>Add Comment</button>
                    <button className="btn btn-danger" onClick={this.deleteAllComment}>Delete All</button>
                </div>
                {
                    this.state.commentList.map(function (item) {
                        console.log(item);
                        return(<CommentBoard title={item.title} description={item.description} itemId={item.id}/>);
                    })
                }
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