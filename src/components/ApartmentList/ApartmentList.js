import React, { Component } from 'react';
import axios from 'axios';

export default class ApartmentList extends Component {
    constructor() {
        super();
        this.state = { apartmentList: [] };
    }

    componentDidMount() {
        console.log('componentDidMount');
        this.resetList();
    }

    resetList = async () => {
        const response = await axios.get('http://134.209.138.34/items');
        this.setState({ apartmentList: response.data });
        console.log(this.state.apartmentList);
    };

    render() {
        const { apartmentList } = this.state;
        const title = apartmentList.length > 0 && apartmentList[0].title;
        const id = apartmentList.length > 0 && apartmentList[0].id;
        const address = apartmentList.length > 0 && apartmentList[0].address;
        const price = apartmentList.length > 0 && apartmentList[0].price;
        const previewImage = apartmentList.length > 0 && apartmentList[0].previewImage;

        return (
            <div>
              Список аппартаментов
                <br/>
                <ul>
                    <li>{title}</li>
                    <li>{id}</li>
                    <li>{address}</li>
                    <li>{price}</li>
                    <li><img src={previewImage}/></li>
                </ul>
            </div>
        );
    }
}
