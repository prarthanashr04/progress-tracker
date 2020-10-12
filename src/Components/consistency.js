import React, { Component } from 'react';
import '../App.css';
import { Table } from 'reactstrap';

class ConsistencyTable extends Component {
 render() {
   const red ={
    backgroundColor: "red",
    color:"white"
   };
   const yellow={
    backgroundColor:"yellow",
    color:"black"
   };
   const green={
    backgroundColor:"rgb(71, 253, 71)",
    color:"black"
   };
   var core,prod;
   if(this.props.core>=90)
      core=green;
    else if(this.props.core>=75)
      core=yellow;
    else
      core=red;

      if(this.props.prod>=90)
      prod=green;
    else if(this.props.prod>=75)
      prod=yellow;
    else
      prod=red;

  return (
      <div className="column">
        <h1 style={{ color: 'black' }} >{this.props.head}</h1>
        <Table dark>
          <thead>
            <tr>
              <th>Task</th>
              <th>Consistency</th>
            </tr>
          </thead>
          <tbody>

            <tr style={core} className="core">
              <td >Core</td>
              <td>{parseInt(this.props.core)}</td>
            </tr>
            <tr style={prod} className="prod">
              <td >Production</td>
              <td>{parseInt(this.props.prod)}</td>

            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}
class Consistency extends Component {
  constructor(props) {
    super(props);
    this.state={
      week:{},
      month:{},
      quarter:{},
      isConsistency:false
    }
  }
  componentDidMount(){
    var apiUrl = this.props.apiUrl + "?UserName=" + this.props.name + "&Date=" + 7;
    var apiUrl2 = this.props.apiUrl+"?UserName="+ this.props.name+"&Date="+28;

    var apiUrl3 = this.props.apiUrl + "?UserName=" + this.props.name + "&Date=" + 84;
        fetch(apiUrl)
            .then(res => res.json())
            .then(
                (result) => {
                  this.setState({
                    week:result.body
                  })
                    console.log(result);
                }
                
            );
            fetch(apiUrl2)
            .then(res => res.json())
            .then(
                (result) => {
                  this.setState({
                    month:result.body
                  })
                  console.log(result);
                }
                
            );
            fetch(apiUrl3)
            .then(res => res.json())
            .then(
                (result) => {
                  this.setState({
                    quarter:result.body,
                    isConsistency: true
                  })
                  console.log(result);
                }
                
            );
  }
  render() {
    if(this.state.isConsistency)
    return (
      <div className="row">
        
        <ConsistencyTable core={this.state.week.Core} prod={this.state.week.Production} head="Week"/>
        
        <ConsistencyTable core={this.state.month.Core} prod={this.state.month.Production} head="Month"/>
        
        <ConsistencyTable core={this.state.quarter.Core} prod={this.state.quarter.Production} head="Quarter" />
      </div>
    );
    else
      return(<div>
        
      </div>);
  }
}
export default Consistency;