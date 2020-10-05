import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavItem} from 'reactstrap';
import Member from './Member';
import Login from './Login';

class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false
    }
    this.toggleModal = this.toggleModal.bind(this);
  }
  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    });
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
              <Member modalButton={this.toggleModal} name={this.props.name} pastRecord={this.props.pastRecord} consistency={this.props.consistency} logout={this.props.logout} dailyPlan={this.props.dailyPlan} profile={this.props.profile}/>
            </NavItem>
          </Nav>
          <Login openModal={this.state.isModalOpen} modalButton={this.toggleModal}  login={this.props.login}/>
        </div>
      </Navbar>
    </div>);
  }
}

export default Header;