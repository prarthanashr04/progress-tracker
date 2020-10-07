import React, { Component } from 'react'
import axios from 'axios';
import ReactTable from "react-table"; 
import 'react-table/react-table.css';
import '../App.css';
export default class PastRecord extends Component {
  constructor(props){
    super(props)
    this.state = {
      users: [],
      loading:true
    }
  }
  async getUsersData(){
    const res = await axios.get('https://mj3a9u0swa.execute-api.ap-south-1.amazonaws.com/dev/dataanalysis?UserName=Ritikagarwal')
    
console.log(res.data[0]["Date"])
for(var i = 0 ; i<11 ; i++)
{ 
var date = new Date(res.data[i]["Date"]*1000);
var day = date.getDate();
var month = date.getMonth();
var year = date.getFullYear();
var fullDate = day + "-" +(month + 1) + "-" + year;
res.data[i]["Date"] = fullDate
}
    this.setState({loading:false, users: res.data})
  }
  componentDidMount(){
    this.getUsersData()
  }
  render() {
    const columns = [{  
      Header: 'Date',  
      accessor: 'Date',
     }
     ,
{  
     Header: 'Username',  
     accessor: 'UserName' ,
     },
{  
      Header: 'Production-planned',  
      accessor: 'Planned.Production' ,
     
      }
     
     ,
{  
     Header: 'production-actual',  
     accessor: 'Actual.Production',
     },
{  
     Header: 'Core - planned',  
     accessor: 'Planned.Core',
     },
{  
     Header: 'Core - actual',  
     accessor: 'Actual.Core',
     },


     
  ]
    return (
      <ReactTable  
      data={this.state.users}  
      columns={columns}  
   />
    )
  }
}

