import React, { Component } from 'react';
import '../App.css';
import Submit from './Submit';
import PlannedSlots from './Plannedslots';
import ThisDate from './Date';
import ActualSlots from './Actualslots';
class DailyPlan extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isActual: false,
            data: {},
            isPlanned:true,
            plannedData:{}
        }
        this.onSubmit=this.onSubmit.bind(this);
    }
    componentDidMount() {
        var cDate = new Date();
        var timeInMilliSeconds = cDate.getTime();
        var timeInSeconds = Math.floor(timeInMilliSeconds / 1000);
        var hrs = cDate.getHours();
        var min = cDate.getMinutes();
        var sec = cDate.getSeconds();
        var hrsMinsInSecs = (hrs * 60 * 60) + (min * 60) + sec;
        var dateInSeconds = timeInSeconds - hrsMinsInSecs-86400;
        console.log(dateInSeconds);
        var apiUrl = "https://mj3a9u0swa.execute-api.ap-south-1.amazonaws.com/dev?UserName=" + this.props.name + "&Date=" + dateInSeconds;
        fetch(apiUrl)
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result);
                    if(result.isActual)
                    this.setState({
                        isActual: true,
                        data: result.actual[0]
                    });
                    if(!result.isPlanned){
                        this.setState({
                            isPlanned:false,
                            plannedData:result.planned[0]
                        })
                    }
                }
            )
    }
    
    onSubmit(){
        var output=false;
        output=this.props.submit(this.state.isActual);
        if(output!==false){
            var data={
                "Core":output[0],
                "Production":output[1]
            }   
            this.setState({
                isActual:false,
                isPlanned:false,
                plannedData:data
            });
        }
    }
    render() {
        var actual,submit;
        if(this.state.isActual)
        actual=<ActualSlots data={this.state.data} />;
        if(this.state.isPlanned)
        submit=<Submit onClick={this.onSubmit}/>;
        return (
            <div>
                <ThisDate />;
                <div className="row ">
                {actual}
                    <div className="col-12 col-md-6 parentform">
                        <PlannedSlots config={["Core", "Production"]} planned={this.state.isPlanned} data={this.state.plannedData}/>
                    </div>
                    {submit}
                </div>
            </div>
        )
    }
}
export default DailyPlan;