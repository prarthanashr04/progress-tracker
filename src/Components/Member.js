import React, { Component, useState } from 'react';
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
              <DropdownItem >Past Record</DropdownItem>
              <DropdownItem >Consistency</DropdownItem>
              <DropdownItem>Profile</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Log out</DropdownItem>
            </DropdownMenu>
          </ButtonDropdown>);
    }
}
export default Member;