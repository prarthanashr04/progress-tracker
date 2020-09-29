import React, { Component } from 'react';
import './App.css';
import Header from './Components/Navbar';
import Dat from './Components/Date';
import PlannedSlots from './Components/Plannedslots';
import ActualSlots from './Components/Actualslots';
import Login from './Components/Login'
import Submit from './Components/Submit';
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
      isActual:false,
      isPlanned:false
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
          isPlanned:true
        });
        this.toggleModal();
        check = 1;
        break;
      }
    }
    if (check === 0)
      alert("Incorrect UserName or Password ");
  }

  submit(){
    if(document.getElementById("coreActual")!==null){
      var coreActual=document.getElementById("coreActual").value;
      console.log( coreActual);
      var prodActual=document.getElementById("prodActual").value;
      
        // instantiate a headers object
        var myHeaders = new Headers();
        // add content type header to object
        myHeaders.append("Content-Type", "application/json");
        // using built in JSON utility package turn object to string and store in a variable
        var raw = JSON.stringify({
"UserName": "ritik",
"Date":19862,
"Name": "jojo",
"Planned": {
  "Core" : coreActual,
  "Production":prodActual
}

});
        // create a JSON object with parameters for API call and store in a variable
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };
       
        // make API call with parameters and use promises to get response
        fetch("https://mj3a9u0swa.execute-api.ap-south-1.amazonaws.com/dev/", requestOptions)
        .then(response => response.text())
        .then(result => alert(JSON.parse(result).body))
        .catch(error => console.log('error', error));
    }

    var corePlan=document.getElementById("plan0").value;
    var prodPlan=document.getElementById("plan1").value;
       // instantiate a headers object
       var myHeaders = new Headers();
       // add content type header to object
       myHeaders.append("Content-Type", "application/json");
       // using built in JSON utility package turn object to string and store in a variable
       var raw = JSON.stringify({
"UserName": "ritik",
"Date":19862,
"Name": "jojo",
"Planned": {
 "Core" : corePlan,
 "Production":prodPlan
}

});
       // create a JSON object with parameters for API call and store in a variable
       var requestOptions = {
           method: 'POST',
           headers: myHeaders,
           body: raw,
           redirect: 'follow'
       };
      
       // make API call with parameters and use promises to get response
       fetch("https://mj3a9u0swa.execute-api.ap-south-1.amazonaws.com/dev/", requestOptions)
       .then(response => response.text())
       .then(result => alert(JSON.parse(result).body))
       .catch(error => console.log('error', error));
   
    console.log(corePlan+" "+prodPlan);
  }



  render() {
    var date, actual, planned;
    document.body.style.backgroundImage = "url('./bgimage.jpg')";
    if (this.state.name!==""){
      actual = <ActualSlots apiUrl="https://mj3a9u0swa.execute-api.ap-south-1.amazonaws.com/dev" userName={this.state.name}/>;
      date = <Dat />;
      planned = <PlannedSlots config={["Core","Production"]}/>
    }
    return (<div className="App" >
      <Header logo='./skillpill.png' title="Progress Tracker" name={this.state.name} modalButton={this.toggleModal} />
      {date}
      <div className="row ">
        <div className="col-12 col-md-6 parentform">
          {actual}
        </div>
        <div className="col-12 col-md-6 parentform">
          {planned}
        </div>
      </div>
      <Login openModal={this.state.isModalOpen} modalButton={this.toggleModal} login={this.login} />
      <Submit onClick={this.submit}/>
    </div>
    );
  }
}

export default App;
