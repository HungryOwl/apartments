import React, { Component } from 'react';
import CardList from './CardList/CardList'
import 'normalize.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <header className='App-header'/>

        <main>
          <CardList title='Объекты недвижимости'/>
        </main>
      </div>
    );
  }
}

export default App;
