import React, { Component } from 'react';
import ApartmentList from './ApartmentList/ApartmentList'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Apartments
          </p>
            <ApartmentList/>
        </header>
      </div>
    );
  }
}

export default App;
