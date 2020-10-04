import React, { Component } from 'react';
import './App.css';
import Header from './Components/Navbar';


import Login from './Components/Login'
import Submit from './Components/Submit';

import DailyPlan from './Components/dailyPlan';
import PastRecord from './Components/pastRecord';
import Consistency from './Components/consistency';

var templogin = [
  { "Username": "HitJatin", "Password": "#Jatin23" },
  { "Username": "Prarthana", "Password": "Prarthana" },
  { "Username": "Ritik", "Password": "Ritik" },
]

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      previous: {},
      isModalOpen: false,
      isActual: false,
      isPlanned: false,
      isDaily: true,
      isConsistency: false,
      isRecords: false
    };
    this.toggleModal = this.toggleModal.bind(this);
    this.login = this.login.bind(this);
    this.submit = this.submit.bind(this);

  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    });
  }

  login(userName, passWord) {
    var i, check = 0;
    for (i = 0; i < templogin.length; i++) {
      if (templogin[i].Username === userName && templogin[i].Password === passWord) {
        this.setState({
          name: userName,
          isPlanned: true
        });
        this.toggleModal();
        check = 1;
        break;
      }
    }
    if (check === 0)
      alert("Incorrect UserName or Password ");
  }

  submit() {
    var cDate = new Date();
    var timeInMilliSeconds = cDate.getTime();
    var timeInSeconds = Math.floor(timeInMilliSeconds / 1000);
    var hrs = cDate.getHours();
    var min = cDate.getMinutes();
    var sec = cDate.getSeconds();
    var hrsMinsInSecs = (hrs * 60 * 60) + (min * 60) + sec;
    var dateInSeconds = timeInSeconds - hrsMinsInSecs + 86400;
    if (document.getElementById("coreActual") !== null) {

      var coreActual = document.getElementById("coreActual").value;
      console.log(coreActual);
      var prodActual = document.getElementById("prodActual").value;
      var notes = document.getElementById("notes").value;
      // instantiate a headers object
      var myHeaders = new Headers();
      // add content type header to object
      myHeaders.append("Content-Type", "application/json");
      // using built in JSON utility package turn object to string and store in a variable
      var raw = JSON.stringify({
        "UserName": this.state.name,
        "Date": dateInSeconds - 86400,
        "Actual": {
          "Core": coreActual,
          "Production": prodActual
        },
        "Notes": notes

      });
      // create a JSON object with parameters for API call and store in a variable
      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };

      // make API call with parameters and use promises to get response
      fetch("https://mj3a9u0swa.execute-api.ap-south-1.amazonaws.com/dev/update", requestOptions)
        .then(response => response.text())
        .then(result => alert(JSON.parse(result).body))
        .catch(error => console.log('error', error));
    }

    var corePlan = document.getElementById("plan0").value;
    var prodPlan = document.getElementById("plan1").value;
    // instantiate a headers object
    var myHeaders2 = new Headers();
    // add content type header to object
    myHeaders2.append("Content-Type", "application/json");
    // using built in JSON utility package turn object to string and store in a variable
    var raw2 = JSON.stringify({
      "UserName": this.state.name,
      "Date": dateInSeconds,
      "Name": this.state.name,
      "Planned": {
        "Core": corePlan,
        "Production": prodPlan
      }

    });
    // create a JSON object with parameters for API call and store in a variable
    var requestOptions2 = {
      method: 'POST',
      headers: myHeaders2,
      body: raw2,
      redirect: 'follow'
    };

    // make API call with parameters and use promises to get response
    fetch("https://mj3a9u0swa.execute-api.ap-south-1.amazonaws.com/dev", requestOptions2)
      .then(response => response.text())
      .then(result => alert(JSON.parse(result).body))
      .catch(error => console.log('error', error));

    console.log(corePlan + " " + prodPlan);
  }



  render() {
    var date, actual, planned, current;
    if (this.state.name !== "") {
      if (this.state.isDaily)
        current = <DailyPlan  name = {this.state.name}/>;
      else if (this.state.isConsistency)
        current = <Consistency />;
      else if (this.state.isRecords)
        current = <PastRecord />;
      else
        alert("There is some error with components");
    }

    document.body.style.backgroundImage = "url('./bgimage.jpg')";

    
    

    return (/*<div className="App" >
      <Header logo='./skillpill.png' title="Progress Tracker" name={this.state.name} modalButton={this.toggleModal} />
      {current}
      <Login openModal={this.state.isModalOpen} modalButton={this.toggleModal} login={this.login} />
                <Submit onClick={this.submit} />
    </div>*/
<PastRecord />

    );
  }
}

export default App;
