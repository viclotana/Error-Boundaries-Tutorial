import React, { Component } from 'react';
import './App.css';
import Artists from './Artists';

class App extends Component {
  render() {
    return (
      <div className="App">
      <h4>Artists Performing at Tonight's Grammy</h4>
       <Artists artistName='Davido'></Artists>
       <Artists artistName='Mayorkun'></Artists>
       <Artists artistName='Dremo'></Artists>
       <Artists artistName='Sinzu'></Artists>
      </div>
    );
  }
}

export default App;
