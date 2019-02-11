import React, { Component } from 'react';
import './App.css';
import Artists from './Artists';
import ErrorBoundary from './ErrorBoundary'

class App extends Component {
  render() {
    return (
      <div className="App">
      <h4>Artists Performing at Tonight's Grammy</h4>
      <ErrorBoundary>
        <Artists artistName='Davido'></Artists>
      </ErrorBoundary>
      <ErrorBoundary>
        <Artists artistName='Dremo'></Artists>
      </ErrorBoundary>
      <ErrorBoundary>
        <Artists artistName='peruzzi'></Artists>
      </ErrorBoundary>
      <ErrorBoundary>
        <Artists artistName='Mayorkun'></Artists>
      </ErrorBoundary>
      
      </div>
    );
  }
}

export default App;
