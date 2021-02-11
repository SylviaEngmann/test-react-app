import React, {Component} from 'react';
import Dialog from '@material-ui/core/Dialog';


class ViewTodo extends Component {

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
                        {/* <Dialog
                        open={this.state.open}
                        onClose={this.handleClose}
                        fullWidth={true}
                        maxWidth = {'md'}
                        >

                        </Dialog> */}
                    </div>
                )
            }
}

export default ViewTodo;