import React from 'react';

const configTask = (props) =>{
    return(
        <div className="inlineclass" >
            <div>{props.taskName}</div>
            <Button></Button>
        </div>
    );
}
const ActualSlots = (props) => {
    return (<div>
        <h1>Actual Slots</h1>
        {props.config[0]}
        {props.config[1]}
          
</div>);
}

export default ActualSlots;