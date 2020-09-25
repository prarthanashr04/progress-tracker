import React, { Component } from 'react';
import './App.css';
import Header from './Components/Navbar';
import Dat from './Components/Date';
import PlannedSlots from './Components/Plannedslots';
import ActualSlots from './Components/Actualslots';
import Login from './Components/Login'
var templogin = [
  { "Username": "HitJatin", "Password": "#Jatin23" },
  { "Username": "Prarthana", "Password": "Prarthana" },
  { "Username": "Ritik", "Password": "Ritik" },
]

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      member: {
        "name": "",
        "previous": {}
      },
      isModalOpen: false
    };
    this.toggleModal = this.toggleModal.bind(this);
   
  }
  
  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    });
  }

  login(userName,passWord) {
    var i;
    for (i = 0; i < templogin.length; i++) {
      if (templogin[i].Username === userName) {
        if (templogin[i].Password === passWord)
          
          {
            alert("hgu");
            this.setState({name : userName});
          }
      }
    }
    alert("failed");
  }

  

  render() {
    document.body.style.backgroundImage = "url('./bgimage.jpg')";
    if (this.state.member.name !== "") {
      var date, actual, planned
      date = <Dat />;
      actual = <ActualSlots config={[{ "name": "Production", "Slots": 4 }, { "name": "Core", "Slots": 2 }]} />;
      planned = <PlannedSlots />

    }
    return (<div className="App" >
      <Header logo='./skillpill.png' title="Progress Tracker" name="Jatin" modalButton={this.toggleModal} />
      {date}
      <div className="row ">
        <div className="col-12 col-md-6 parentform">
          {actual}
        </div>
        <div className="col-12 col-md-6 parentform">
          {planned}
        </div>
      </div>
      <Login openModal={this.state.isModalOpen} modalButton={this.toggleModal} login={this.login}/>
    </div>
    );
  }
}

export default App;
