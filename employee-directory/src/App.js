import React from 'react';
import './App.css';
import Header from "./components/Header";
import ListEmployees from "./components/ListEmployees";
//import axios from 'axios';
function App() {
  return (
    <>
      <Header />
      <ListEmployees />
    </>
  );
}

export default App;