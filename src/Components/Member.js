import React, { Component } from 'react';
import {Button} from 'reactstrap';

class Member extends Component {
    render(){
        if(this.props.name==="")
        return(<div>
            <Button onClick={this.props.modalButton}>
                Login
            </Button>
        </div>)
        else
        return(<div id="name">{this.props.name}</div>)
    }
}
export default Member;