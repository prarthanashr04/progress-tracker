import React, { Component } from 'react';
import '../App.css';
import { Table } from 'reactstrap';

class ConsistencyTable extends Component {
  render() {
    return (
      <div className="column">
        <Table dark>
          <thead>
            <tr>
              <th>Task</th>
              <th>Consistency</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Core</td>
              <td>{this.props.core}</td>
            </tr>
            <tr>
              <td>Production</td>
              <td>{this.props.prod}</td>
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
        <ConsistencyTable core={this.state.week.Core} prod={this.state.week.Production} />
        <ConsistencyTable core={this.state.month.Core} prod={this.state.month.Production} />
        <ConsistencyTable core={this.state.quarter.Core} prod={this.state.quarter.Production} />
      </div>
    );
    else
      return(<div>
        
      </div>);
  }
}
export default Consistency;