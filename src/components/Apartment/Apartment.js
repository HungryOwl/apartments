import React, {Component} from 'react';
import axios from 'axios';
import hosts from '../hosts';
import Gallery from "../Gallery/Gallery";
import {Link} from "react-router-dom";

export default class Apartment extends Component {
    constructor(props) {
        super(props);
        this.state = { apartmentData: {} };
    }

    componentDidMount() {
        this.loadApartmentData();
    }

    get id() {
        return parseInt(this.props.match.params.number, 10);
    }

    get apartmentData() {
        return this.state.apartmentData;
    }

    set apartmentData(value) {
        this.setState({ apartmentData: value });
    }

    get images() {
        return this.apartmentData.images;
    }

    get hasImages() {
        return this.images && this.images.length
    }

    get title() {
        return this.apartmentData.title || "Об объекте";
    }

    get address() {
        return this.apartmentData.address;
    }

    get description() {
        return this.apartmentData.description;
    }

    get sellerName() {
        return this.apartmentData.sellerName;
    }

    get price() {
        return this.apartmentData.price;
    }

    loadApartmentData = async () => {
        const response = await axios.get(hosts.apartmentItemPath(this.id));
        this.apartmentData = response.data[0];
    };

    renderGallery() {
        return this.hasImages && <Gallery images={this.images}/>;
    }

    renderLine(prefix, text, classes) {
        return text && <p className={"apartment__text " + classes}>{prefix && <b>{prefix + ' '}</b>}{text}</p>;
    }

    renderApartmentData() {
        return (
            <div className="apartment__info">
                {this.renderLine('Адрес:', this.address)}
                {this.renderLine('', this.description, 'apartment__text--description')}
                {this.renderLine('Цена: ', this.price)}
                {this.sellerName && <p className="apartment__text"><b>Продавец: </b><a className="link" href="#">{this.sellerName}</a></p>}
                <Link className="apartment__button button button--details" to={'/'}>На главную</Link>
            </div>
        )
    }

    render() {
        return (
            <section className="apartment">
                <div className="apartment__title">{this.title}</div>
                {this.renderGallery()}
                {this.renderApartmentData()}
            </section>
        )
    }
};
