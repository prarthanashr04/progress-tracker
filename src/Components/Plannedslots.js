import React, { Component } from 'react';
import { Button,Form } from 'reactstrap';
const PlanTask = (props) => {
    if (props.showCross)
        var cross = <Button>X</Button>;
    return (<div className="inlineclass">
        <input className="col" type="text" placeholder="Task Name" required />
        <input className="col" type="number" placeholder="Planned Slots" required />
        {cross}
    </div>)
}
var showCross = false, tasks = [<div><PlanTask showCross={showCross} /><br /></div>]
function Add() {
    alert();
    showCross = true;
    tasks.push(
        <div><PlanTask showCross={showCross} /><br /></div>
    );
}
function submit() {
    alert();
}
const PlannedSlots = (props) => {
    return (<Form className="formslots">
        <div className="col-12 col-md-10">
            <h1>Let's plan our day</h1>
            <div className="inlineclass">
                <h5 className="col">Task Name</h5>
                <h5 className="col">No. of Slots</h5>
            </div>
            <form>
                {tasks}
                <Button color="primary" onClick={Add}>Add</Button>
                <Button onClick={submit}>Submit</Button>
            </form>
        </div>
    </Form>);
}

export default PlannedSlots;