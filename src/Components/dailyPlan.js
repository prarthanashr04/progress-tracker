import React, { Component } from 'react';
import '../App.css';
import { Button, Navbar } from 'reactstrap';
import PlannedSlots from './Plannedslots';
import ThisDate from './Date';
import ActualSlots from './Actualslots';
class DailyPlan extends Component {
    render() {
        return (
            <div>
                <ThisDate />;
                <div className="row ">
                    <div className="parentform">
                        <ActualSlots apiUrl="https://mj3a9u0swa.execute-api.ap-south-1.amazonaws.com/dev" userName={this.props.name} />;

                    </div>
                    <div className="parentform">
                        <PlannedSlots config={["Core", "Production"]} />
                    </div>
                </div>
               
            </div>
        )
    }
}
export default DailyPlan;