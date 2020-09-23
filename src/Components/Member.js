import React, { Component } from 'react';
import {Button} from 'reactstrap';

class Member extends Component {
    render(){
        return(<div>
            <Button onClick={this.props.modalButton}>
                Login
            </Button>
        </div>)
    }
}
export default Member;