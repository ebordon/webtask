import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import CarDetail from './components/CarDetail';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <CarDetail />
      </div>
    );
  }
}

export default App;
