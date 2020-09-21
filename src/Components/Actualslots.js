import React from 'react';
import { Button, Form, Row, Col, Label, Input } from 'reactstrap';
function submit() {
    alert();
}
const ActualSlots = (props) => {
    return (<div>
        <div className="col-12 row row-content offset-2">
            <h1>Actual slots</h1>
        </div>
        <div className="col-12 col-md-6">
            <Form>
                <Row className="form-group">
                    <Label htmlFor="taskname" md={2}>{props.config[0].name}</Label>
                    <Label htmlFor="planslots" md={2}>{props.config[0].Slots}</Label>
                    <input className="col" id="actualslot" placeholder="Slots Given" type="number" min="1" max="10" required />
                
                </Row>

                <Row className="form-group">
                    <Label htmlFor="taskname" md={2}>{props.config[1].name}</Label>
                    <Label htmlFor="taskslots" md={2}>{props.config[1].Slots}</Label>
                    <input className="col"id="actualslot" placeholder="Slots Given" type="number" min="1" max="10" required />
                </Row>

                <Row className="form-group">
                    <Label htmlFor="message" md={2}>Notes </Label>
                    <textarea rows="4" className="col" name="comment"></textarea>
                </Row>

                <Row className="form-group">
                    <Col md={{size: 10, offset: 2}}>
                        <Button onClick={submit}>Submit</Button>
                    </Col>
                </Row>
            </Form>
        </div>



    </div>);
}

export default ActualSlots;
