import React from 'react';
import {Label, Input } from 'reactstrap';
const Date = (props) => {
    return (<div className="Date" >
         <Label for="exampleDate">Date</Label>
        <Input
          type="date"
          name="date"
          id="exampleDate"
          placeholder="date placeholder"
        />
    
</div>);
}

export default Date;