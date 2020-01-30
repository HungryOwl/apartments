import React, { Component } from 'react';
import MainRoutes from './MainRoutes'
import 'normalize.css';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className='App'>
                <MainRoutes/>
            </div>
        );
    }
}

export default App;
