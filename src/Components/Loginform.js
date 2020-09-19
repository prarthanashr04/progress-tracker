import React, {Component } from 'react';
import {Form,FormGroup,Label,Input,Button} from 'reactstrap';

class Login extends Component {
    constructor(props){
        super(props);
        this.state={
        username:'',
        password:''
        }
        this.handleLogin = this.handleLogin.bind(this);
    }
    handleLogin(event){
        
        alert("Username: " + this.username.value + " Password: " + this.password.value
            + " Remember: " + this.remember.checked);
        event.preventDefault();
    
    }
    render (){
        return(
        <div>
            <h1>Login</h1>
            <Form onSubmit={this.handleLogin}>
                <FormGroup>
                    <Label htmlFor="username">Username</Label>
                    <Input type="text" id="username" name="username"
                    innerRef={(input) => this.username = input}/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="password">Password</Label>
                    <Input />
                    <Label check>
                        <Input type="checkbox" name="remember"
                        innerRef={(input) => this.remember = input}/>
                                    Remember me
                    </Label>
                </FormGroup>
                <Button type="submit" value="submit" color="primary">Login</Button>
                <h5>Don't Have an Account?Create Account</h5>
            </Form>
        </div>
        );
    }
}

    export default Login;

