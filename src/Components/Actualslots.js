import React, { Component } from 'react';
import { Form, Row, Label } from 'reactstrap';

class ActualSlots extends Component {
    
    render() {
        return (<div className="col-12 col-md-6 parentform"><Form className="formslots ">
            <div className="col-12 row offset-sm-3">
                <h1>Actual slots</h1>
            </div>
            <div className="col-12 col-md-10">

                <Row className="form-group">
                    <Label htmlFor="taskname" md={2}>Core</Label>
                    <Label htmlFor="planslots" md={2}>{this.props.data.Core}</Label>
                    <input className="col" id="coreActual" placeholder="Slots Given" type="number" min="1" max="10" required />

                </Row>

                <Row className="form-group">
                    <Label htmlFor="taskname" md={2}>Production</Label>
                    <Label htmlFor="taskslots" md={2}>{this.props.data.Production}</Label>
                    <input className="col" id="prodActual" placeholder="Slots Given" type="number" min="1" max="10" required />
                </Row>

                <Row className="form-group">
                    <Label htmlFor="message" md={2}>Notes </Label>
                    <textarea id="notes" rows="4" className="col" name="comment"></textarea>
                </Row>
            </div>
        </Form></div>);
    }
}

export default ActualSlots;
