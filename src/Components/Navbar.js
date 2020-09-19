import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, Button, Form, FormGroup, Label, Input, Modal, ModalBody, ModalHeader } from 'reactstrap';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false
    };
    this.toggleModal = this.toggleModal.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }
  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    });
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
          <div id="name">
            {this.props.name}
          </div>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <Button onClick={this.toggleModal}>
                Login
              </Button>
            </NavItem>
          </Nav>
        </div>
      </Navbar>
      <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal} >
        <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
        <ModalBody>
          <Form onSubmit={this.handleLogin}>
            <FormGroup>
              <Label htmlFor="username">Username</Label>
              <Input type="text" id="username" name="username"
                innerRef={(input) => this.username = input} />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="password">Password</Label>
              <Input type="password" id="password" name="password"
                innerRef={(input) => this.password = input} />
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="checkbox" name="remember"
                  innerRef={(input) => this.remember = input} />
                    Remember me
              </Label>
            </FormGroup>
            <Button type="submit" value="submit" color="primary">Login</Button>
          </Form>
        </ModalBody>
      </Modal>
    </div>);
  }
}

export default Header;