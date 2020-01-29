import React, { Component } from 'react';
import { Link } from "react-router-dom";
import MainRoutes from './MainRoutes'
import 'normalize.css';
import './App.css';

const Header = () => (
    <header className='App-header'>
        <nav>
            <div><Link to='/'>Home</Link></div>
            <div><Link to='/apartment'>apartment</Link></div>
        </nav>
    </header>
);

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
