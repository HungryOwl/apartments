import React, {Component} from 'react';
import axios from 'axios';
import Gallery from "../Gallery/Gallery";

export default class Apartment extends Component {
    constructor(props) {
        super(props);
        this.state = { apartmentData: {} };
    }

    componentDidMount() {
        this.getApartmentData();
    }

    getApartmentData = async () => {
        const id = parseInt(this.props.match.params.number, 10);
        const response = await axios.get(`http://134.209.138.34/item/${id}`);
        this.setState({ apartmentData: response.data[0] });
    };

    render() {
        const { apartmentData } = this.state;
        const title = apartmentData.title ? apartmentData.title : "Об объекте";
        console.log('apartmentData', this.state.apartmentData);

        return (
            <section className="apartment">
                <div className="apartment__title">{title}</div>
                {apartmentData.images && apartmentData.images.length && <Gallery images={apartmentData.images}/>}
                {
                    apartmentData &&
                    <div className="apartment__info">
                        {apartmentData.address && <p>{apartmentData.address}</p>}
                        {apartmentData.description && <p>{apartmentData.description}</p>}
                        {apartmentData.sellerName && <p>{apartmentData.sellerName}</p>}
                        {apartmentData.price && <p>{apartmentData.price}</p>}
                    </div>
                }
            </section>
        )
    }
};
