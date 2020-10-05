import React, { Component} from 'react';
import {Button, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class Member extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            dropdownOpen : false,
            
        };
        this.toggle = this.toggle.bind(this);
    }

    toggle(){
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
          });
    }
    render(){
        if(this.props.name==="")
        return(<div>
            <Button onClick={this.props.modalButton}>
                Login
            </Button>
        </div>);
        else
        return(<ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle id="name" caret>
            {this.props.name}
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem onClick={this.props.profile}>Profile</DropdownItem>
              <DropdownItem divider />
              <DropdownItem onClick={this.props.dailyPlan}>Daily Progress</DropdownItem>
              <DropdownItem onClick={this.props.consistency}>Consistency</DropdownItem>
              <DropdownItem onClick={this.props.pastRecord}>Past Record</DropdownItem>
              <DropdownItem divider />
              <DropdownItem onClick={this.props.logout}>Log out</DropdownItem>
            </DropdownMenu>
          </ButtonDropdown>);
    }
}
export default Member;