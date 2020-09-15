import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Navbar';
import Dat from './Components/Date';
import PlannedSlots from './Components/Plannedslots';
import ActualSlots from './Components/Actualslots';
function App() {
  return (<div className="App">
   <Header logo = './skillpill.png' title  = "progress tracker"  name = "Ritik"  />
   <Dat />
   {/*
   <PlannedSlots />
   <ActualSlots />
   */}
   </div>   
  );
}

export default App;
