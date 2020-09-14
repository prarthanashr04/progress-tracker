import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Navbar';
import Date from './Components/Date';
import PlannedSlots from './Components/Plannedslots';
import ActualSlots from './Components/Actualslots';
function App() {
  return (<div>
   <Header logo = './skillpill.png' title  = "progress tracker"  name = "Ritik"  />
   <Date />
   {/*
   <PlannedSlots />
   <ActualSlots />
   */}
   </div >
   
  );
}

export default App;
