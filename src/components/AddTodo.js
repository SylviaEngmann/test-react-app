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
    constructor(props) {
        super(props);
        this.state = {
            taskname: '',
            taskdescription: '',
            duedate: '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = e => {
        const value = e.target.value;
        this.setState({
            [e.target.name]: value
        });
    }

    handleSubmit = e => {
        console.log (this.state);
        fetch('http://localhost:3600/todolist', {
        method: 'POST',
        body: JSON.stringify(this.state)})
        .then((response) => {
            console.log(response)
            return response.json();
        })
        .then();
        e.preventDefault();
    }

    render () {
        return (        
               <form onSubmit={this.handleSubmit}>
                    <h2>Create new task</h2>
                    <label htmlFor="task-name" className="formLabel">Task Name</label>
                    <input
                        type="text"
                        id="task-name"
                        value={this.state.taskname}
                        name="taskname"
                        onChange={this.handleChange}
                        />
                    <label htmlFor="task-description" className="formLabel">Description</label>
                    <input
                        type="text"
                        id="task-description"
                        value={this.state.taskdescription}
                        name="taskdescription"
                        onChange={this.handleChange}
                        />
                    <label htmlFor="due-date" className="formLabel">Due Date</label>
                    <input
                        type="date"
                        id="due-date"
                        value={this.state.duedate}
                        name="duedate"
                        onChange={this.handleChange}
                        />
                    <label htmlFor="priority" className="formLabel">Priority</label>

                    <button
                    type="submit"
                    style={buttonStyle}
            >Create Task</button>
                </form>
        )
    }
}
