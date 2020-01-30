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

    render() {
        return (
            <section className="apartment">
                <div className="apartment__title">{this.title}</div>
                {this.hasImages && <Gallery images={this.images}/>}
                {
                    this.apartmentData &&
                    <div className="apartment__info">
                        {this.address && <p>{this.address}</p>}
                        {this.description && <p>{this.description}</p>}
                        {this.sellerName && <p>{this.sellerName}</p>}
                        {this.price && <p>{this.price}</p>}
                    </div>
                }
                <Link className="apartment__button button button--details" to={'/'}>На главную</Link>
            </section>
        )
    }
};
