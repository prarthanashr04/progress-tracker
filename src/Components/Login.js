import React, { Component } from 'react';
import {Button,Modal,ModalHeader,ModalBody,Form,FormGroup,Label,Input} from 'reactstrap';

class Login extends Component {
    constructor(props){
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
    }
    handleLogin(event) {
    
        //alert("Username: " + this.username.value + ";" +"Passowrd: "+ this.password.value + " Remember: " + this.remember.checked);
        var username=this.username.value;
        var password=this.password.value;
        this.props.login(username,password);
        event.preventDefault();
    
      }
    
    render(){
        return(<div>
            <Modal isOpen={this.props.openModal} toggle={this.props.modalButton} >
                <ModalHeader toggle={this.props.modalButton}>Login</ModalHeader>
                <ModalBody>
                <Form onSubmit={this.handleLogin} >
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
                    <Button type="submit" value="submit" color="primary" >Login</Button>
                </Form>
                </ModalBody>
            </Modal>
        </div>)
    }
}
export default Login;