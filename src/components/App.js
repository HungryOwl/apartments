import React, { Component } from 'react';
import MainRoutes from './MainRoutes'
import 'normalize.css';
import './App.css';

class App extends Component {
    render() {
        console.log('App');
        return (
            <div className='App'>
                <MainRoutes/>
            </div>
        );
    }
}

export default App;
