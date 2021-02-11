import React, {Component} from 'react';
import '../App.css';
import NavBar from './NavBar';
import Dialog from '@material-ui/core/Dialog';
import Modal from 'react-modal';
import AddTodo from './AddTodo';
import TodoList from './TodoList';


const backgroundRectangle = {
    position: "absolute",
    backgroundColor: "white",
    boxShadow: "0px 10px 13px rgba(0, 0, 0, 0.161)",
    flexShrink: "0",
    width: "700px",
    height: "700px",
    border: "none",
    borderRadius: "8px",
    top: "75px",
    left: "500px"
};

const buttonStyle = {
    backgroundColor: "rgba(229, 56, 85, 1)",
    border:"none",
    borderRadius: "35px",
    width: "170px",
    height: "65px",
    position: "absolute",
    bottom: "30px",
    left: "270px",
    color: "white",
    fontFamily: "Heebo",
    fontSize: "24px",
    fontWeight: "700"
};


class TodoArea extends Component {
    constructor(props){
        super(props);
        this.state = {
            open:false
        };
        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }
    handleOpen = () => {
        this.setState({open: true})
    }
    handleClose = () => {
        this.setState({open: false})
    }

    componentDidMount() {
        Modal.setAppElement('body');
     }

    render () {

        return (
        <div style={backgroundRectangle}>
            <NavBar></NavBar>
            <TodoList></TodoList>
            <button
              onClick={this.handleOpen}
              style={buttonStyle}
            >ADD TASK</button>
            <Dialog 
            open={this.state.open}
            onClose={this.handleClose}
            fullWidth={true}
            maxWidth = {'md'}
            >
            <AddTodo></AddTodo>
            </Dialog>

        </div>
        )
    }
}

export default TodoArea;