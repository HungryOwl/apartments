import React, { Component } from 'react';
import axios from 'axios';
import hosts from '../hosts';
import Card from '../Card/Card'

export default class CardList extends Component {
    constructor(props) {
        super(props);
        this.state = { apartmentList: [] };
    }

    get apartmentList() {
        return this.state.apartmentList;
    }

    set apartmentList(value) {
        this.setState({ apartmentList: value });
    }

    componentDidMount() {
        this.loadList();
    }

    loadList = async () => {
        const response = await axios.get(hosts.apartmentListPath());
        this.apartmentList = response.data;
    };

    renderApartmentList(featuresArr) {
        return (
            featuresArr.map((feature, i) => <Card features={feature} key={i} />)
        );
    }

    render() {
        return (
            <section className="cardList">
                <div className="cardList__title">{this.props.title}</div>
                <div className="cardList__block">{this.apartmentList.length > 0 && this.renderApartmentList(this.apartmentList)}</div>
            </section>
        );
    }
}
