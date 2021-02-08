import React, {Component} from 'react';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'
//import Dialog from '@material-ui/core/Dialog';


export default class TodoList extends Component {
    constructor(props){
        super(props);
        this.state = {
            items:[],
        };
        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
        
    }
    handleOpen = (task) => {
        this.setState({open: true})
        this.setState({task : task});
        console.log('View details clicked');
    }
    handleClose = () => {
        this.setState({open: false})
    }

    /*
    componentDidMount() {
        Modal.setAppElement('body');
     }*/
    
    componentDidMount(){
        fetch('http://localhost:3600/todolist')
        .then(response => response.json())
        .then(items => this.setState({items}))
        .then(items => console.log(items))
        .catch(err => console.log(err));
    }
    render () {
        return (
            <div>
            {this.state.items.map((item) => {
                return (
                    <div key={item.id} className='todo-rect'>
                        <div className='todo'>
                            {item.taskname}
                            <span className='icon-style'>
                                <FontAwesomeIcon 
                                icon={faArrowCircleRight} 
                                onClick={() => {this.handleOpen(item.id)}}
                                />
                            </span>
                        </div>  
                    </div>
                )
            })}
            </div>
        )
    }
}