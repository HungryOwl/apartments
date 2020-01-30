import React, { Component } from 'react';
import axios from 'axios';
import hosts from '../hosts';
import Card from '../Card/Card'

export default class CardList extends Component {
    constructor(props) {
        super(props);
        this.state = { apartmentList: [] };
    }

    componentDidMount() {
        this.resetList();
    }

    resetList = async () => {
        const response = await axios.get(hosts.apartmentListPath());
        this.setState({ apartmentList: response.data });
        console.log(this.state.apartmentList);
    };

    onCardClick = (id) => () => {
        console.log(id);
    };

    renderApartmentList(featuresArr) {
        return (
            featuresArr.map((feature, i) => <Card features={feature} onClick={this.onCardClick(feature.id)} key={i} />)
        );
    }

    render() {
        const { apartmentList } = this.state;

        return (
            <section className="cardList">
                <div className="cardList__title">{this.props.title}</div>
                <div className="cardList__block">{apartmentList.length > 0 && this.renderApartmentList(apartmentList)}</div>
            </section>
        );
    }
}
