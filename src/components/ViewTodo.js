import React, {Component} from 'react';
import Dialog from '@material-ui/core/Dialog';


export default class ViewTodo extends Component {

            constructor(props) {
                super(props);
        
                this.state = {
                    items: []
                };
            }
            
            componentDidMount(){
                
            }
            render () {
                return (
                    <div>
                        <Dialog></Dialog>
                    </div>
                )
            }
}