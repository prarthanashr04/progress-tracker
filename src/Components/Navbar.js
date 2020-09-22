import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, Button, Form, FormGroup, Label, Input, Modal, ModalBody, ModalHeader } from 'reactstrap';
import Member from './Member';

class Header extends Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
  }
  


  handleLogin(event) {

    alert("Username: " + this.username.value + ";" + " Remember: " + this.remember.checked);
    event.preventDefault();

  }
  render() {
    return (<div className="Header" >
      <Navbar fixed="top" dark color="dark" >
        <div className="container">
          <NavbarBrand >
            <div id="nav">
              <div id="logo"><img src={this.props.logo} alt={this.props.title} height="70" width="70" /></div>
              <div id="heading">{this.props.title}</div></div></NavbarBrand>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <Member modalButton={this.props.modalButton}/>
            </NavItem>
          </Nav>
        </div>
      </Navbar>
    </div>);
  }
}

export default Header;