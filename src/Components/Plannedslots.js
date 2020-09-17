import React, { Component } from 'react';
import { Button } from 'reactstrap';
const PlanTask = (props) => {
    if(props.showCross)
    var cross=<Button>X</Button>;
    return (<div className="inlineclass">
    <input className="col" type="text" placeholder="Task Name" required/>
    <input className="col" type="number" required/>
    {cross}
    </div>)
}
var showCross=false,tasks=[<div><PlanTask showCross={showCross}/><br/></div>]
function Add(){
    alert();
    showCross=true;
    tasks.push(
        <div><PlanTask showCross={showCross}/><br/></div>
    );
}
const PlannedSlots = (props) => {
    return (<div>
    <h3>Let's plan our day</h3>
    <div className="inlineclass">
        <h5 className="col">Task Name</h5>
        <h5 className="col">No. of Slots</h5>
    </div>
    <form>
    {tasks}
    <Button onClick={Add}>Add</Button>
    <input type="submit"/>
    </form>
</div>);
}

export default PlannedSlots;