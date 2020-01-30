import React, {Component} from 'react';

export default class Gallery extends Component {
    constructor(props) {
        super(props);

        this.images = props.images;
        this.slideCount = this.images.length;
        let pageNumber = this.slideCount ? 0 : null;
        this.state = { pageNumber };
    }

    increaseCounter = () => {
        let { pageNumber } = this.state;

        pageNumber = ((pageNumber + 1) === this.slideCount) ? 0 : ++pageNumber;
        this.setState({ pageNumber: pageNumber });
    };

    decreaseCounter = () =>  {
        let { pageNumber } = this.state;
        pageNumber = ((pageNumber - 1) < 0) ? this.slideCount - 1 : --pageNumber;
        this.setState({ pageNumber: pageNumber });
    };

    render() {
        const { pageNumber } = this.state;
        // let imageUrl = pageNumber ? this.props.images[pageNumber] : 'https://via.placeholder.com/640x480';

        return (
            <div className="gallery">
                { <button className="gallery__button button button--prev" onClick={this.decreaseCounter}>Предыдущий</button>}
                <div className="gallery__wrapper">
                    {<img className="gallery__image" src={this.images[pageNumber]} alt="#"/>}
                </div>
                { <button className="gallery__button button button--next" onClick={this.increaseCounter}>Следующий</button>}
            </div>
        )
    }
};
