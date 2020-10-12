import React, { Component } from 'react';
import { Form,Label } from 'reactstrap';

class PlannedSlots extends Component{
    render(){
        var tasks=[];
        var data=Object.values(this.props.data),head;
        if(this.props.planned){
            for(var i=0;i<this.props.config.length;i++){
                tasks.push(
                    <div><PlanTask name={this.props.config[i]} id={i}/><br/></div>
                )
            }
            head="Let's plan our day";
        }
        else{
            for(i=0;i<this.props.config.length;i++){
                tasks.push(
                    <div><ShowTask name={this.props.config[i]} id={i} data={data[i]}/><br/></div>
                )
            }        
            head="Your today's Plan";
        }
        return (<Form className="formslots">
        <div className="col-12 col-md-10">
            <h1>{head}</h1>
            <div className="inlineclass ">
                <h5 className="col">Task Name</h5>
                <h5 className="col">No. of Slots</h5>
            </div><br/>
            {tasks}
        </div>
    </Form>);
    }
}

class PlanTask extends Component{
    render(){
        var id="plan"+this.props.id;
        return(<div className="inlineclass pslots">
        <Label htmlFor="taskname" md={4}>{this.props.name}</Label>
        <input id={id} className="col" type="number" placeholder="Planned Slots" min="1" max="10" required />
    </div>);
    }
}
class ShowTask extends Component{
    render(){
        return(<div className="inlineclass pslots">
        <Label htmlFor="taskname" md={6}>{this.props.name}</Label>
        <Label htmlFor="taskslots" md={6}>{this.props.data}</Label>
    </div>);
    }
}
export default PlannedSlots;