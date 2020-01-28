import React, { Component } from 'react';
import axios from 'axios';

export default class ApartmentList extends Component {
    constructor() {
        super();
        this.state = { apartmentList: [] };
    }

    componentDidMount() {
        console.log('componentDidMount');
        this.resetTasks();
    }

    resetTasks = async () => {
        const response = await axios.get('http://134.209.138.34/items');
        this.setState({ apartmentList: response.data });
        console.log(this.state.apartmentList);
    };

    render() {
        return (
            <div>
              Список аппартаментов
            </div>
        );
    }
}
