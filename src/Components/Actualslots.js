import React, { Component } from 'react';
import { Button, Form, Row, Col, Label, Input } from 'reactstrap';

class ActualSlots extends Component {
    constructor(props){
        super(props);
        this.state={
            isActual:false,
            data:{}
        }
    }
    componentDidMount(){
        var cDate=new Date();
        var timeInMilliSeconds = cDate.getTime(); 
        var timeInSeconds = Math.floor(timeInMilliSeconds / 1000);
        var hrs = cDate.getHours();
        var min = cDate.getMinutes();
        var sec = cDate.getSeconds();
        var hrsMinsInSecs=(hrs*60*60)+(min*60)+sec;
        var dateInSeconds=timeInSeconds-hrsMinsInSecs;
        console.log(dateInSeconds);
        var apiUrl=this.props.apiUrl+"?UserName="+this.props.userName+"&Date="+dateInSeconds;
        fetch(apiUrl)
        .then(res => res.json())
        .then(
            (result) => {
            this.setState({
                isActual:true,
                data: result[0]
            });console.log(result);
            },
            (error) => {
            this.setState({
                isActual: false
            });
            }
        )
        }
    render(){
        
    return (<Form className="formslots ">
    <div className="col-12 row offset-sm-3">
        <h1>Actual slots</h1>
    </div>
    <div className="col-12 col-md-10">

        <Row className="form-group">
            <Label htmlFor="taskname" md={2}>Core</Label>
            <Label htmlFor="planslots" md={2}>{this.state.data.Core}</Label>
            <input className="col" id="actualslot" placeholder="Slots Given" type="number" min="1" max="10" required />

        </Row>

        <Row className="form-group">
            <Label htmlFor="taskname" md={2}>Production</Label>
            <Label htmlFor="taskslots" md={2}>{this.state.data.Production}</Label>
            <input className="col" id="actualslot" placeholder="Slots Given" type="number" min="1" max="10" required />
        </Row>

        <Row className="form-group">
            <Label htmlFor="message" md={2}>Notes </Label>
            <textarea rows="4" className="col" name="comment"></textarea>
        </Row>
    </div>
</Form>);
    }    
}

export default ActualSlots;
