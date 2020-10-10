import React, { Component } from 'react';
import { Form,Label } from 'reactstrap';

class PlannedSlots extends Component{
    render(){
        var tasks=[];
        for(var i=0;i<this.props.config.length;i++){
            tasks.push(
                <PlanTask name={this.props.config[i]} id={i}/>
            )
        }
        return (<Form className="formslots">
        <div className="col-12 col-md-10">
            <h1>Let's plan our day</h1>
            <div className="inlineclass ">
                <h5 className="col">Task Name</h5>
                <h5 className="col">No. of Slots</h5>
            </div>
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
        <input id={id} className="col" type="number" placeholder="Planned Slots" required />
    </div>);
    }
}
export default PlannedSlots;