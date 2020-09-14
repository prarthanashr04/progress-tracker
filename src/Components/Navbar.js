import React from 'react';
import {Navbar,NavbarBrand} from 'reactstrap';
const Header = (props) => {
    return (<div className="Header" >
    <Navbar fixed="top" dark color ="dark" >
      <div className="container">
        <NavbarBrand >
            <div id="logo"><img src={props.logo} alt={props.title} height="70" width="70" /></div>
        <div id="heading">{props.title}</div></NavbarBrand>
        <div id ="name">
         {props.name}
        </div>
      </div>
    </Navbar>
</div>);
}

export default Header;