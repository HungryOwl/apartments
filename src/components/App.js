import React, { Component } from 'react';
import MainRoutes from './MainRoutes'
import 'normalize.css';
import './App.css';
import Header from "./Header/Header";

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header/>
        <MainRoutes/>
      </div>
    );
  }
}

export default App;
