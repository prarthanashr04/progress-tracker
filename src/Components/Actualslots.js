import React from 'react';
import { Button } from 'reactstrap';
function submit(){
    alert();
}
const ActualSlots = (props) => {
    return (<div>
        <div>
            <h1>Actual slots</h1>
        </div>
        <div className="inlineclass">
        <h3 className="col">{props.config[0].name}</h3>
        <h3 className="col">{props.config[0].Slots}</h3>
        <input className="col" type="number" min="1" max="10" required/>
        </div>
        <br />
        <div className="inlineclass">
        <h3 className="col">{props.config[1].name}</h3>
        <h3 className="col">{props.config[1].Slots}</h3>
        <input className="col" type="number" min="1" max="10" required/>
        </div>
        <br />
        <div className="inlineclass">
           <h3> Notes </h3>
           <textarea rows="4" cols="50" name="comment"></textarea>
        </div >
        <br/>
        <div className="inlineclass">
        <Button onClick={submit}>Submit</Button>
        </div >
        
        
        
</div>);
}

export default ActualSlots;
