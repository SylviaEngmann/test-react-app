import React, {Component} from 'react';
import '../App.css';

const buttonStyle = {
    backgroundColor: "rgba(229, 56, 85, 1)",
    border:"none",
    borderRadius: "35px",
    width: "160px",
    height: "60px",
    position: "absolute",
    bottom: "30px",
    left: "150px",
    color: "white",
    fontFamily: "Heebo",
    fontSize: "24px",
    fontWeight: "700"
};

export default class AddTodo extends Component {
    render () {
        const{
            onClick,
        } = this.props

        return (        
               <form onSubmit={this.handleSubmit}>
                    <h2>Create new task</h2>
                    <label for="task-title" className="formLabel">Task Title</label>
                    <input
                        type="text"
                        id="task-title"
                        value={this.state.taskTitle}
                        name="task-title"/>
                    <label for="task-description" className="formLabel">Description</label>
                    <input
                        type="text"
                        id="task-description"
                        value={this.state.taskDescription}
                        name="task-description"/>
                    <label for="due-date" className="formLabel">Due Date</label>
                    <input
                        type="date"
                        id="due-date"
                        value={this.state.dueDate}
                        name="due-date"/>
                    <label for="priority" className="formLabel">Priority</label>

                    <button
                    onClick={onClick}
                    style={buttonStyle}
            >Create Task</button>
                </form>
        )
    }
}
