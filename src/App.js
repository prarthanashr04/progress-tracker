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
      name: "",
      previous: {},
      isModalOpen: false,
      isActual:false,
      isPlanned:false
    };
    this.toggleModal = this.toggleModal.bind(this);
    this.login = this.login.bind(this);

  }

  componentDidMount(){
    
    if(this.state.name!==""){
      fetch("https://mj3a9u0swa.execute-api.ap-south-1.amazonaws.com/dev?UserName=HitJatin&Date=1600885800")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isActual:true,
            previous: result
          });console.log(result);
        },
        (error) => {
          this.setState({
            isActual: false
          });
        }
      )
    }
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



  render() {
    var date, actual, planned;
    document.body.style.backgroundImage = "url('./bgimage.jpg')";
    if (this.state.name!==""){
      actual = <ActualSlots apiUrl="https://mj3a9u0swa.execute-api.ap-south-1.amazonaws.com/dev" userName={this.state.name}/>;
      date = <Dat />;
      planned = <PlannedSlots />
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
    </div>
    );
  }
}

export default App;
