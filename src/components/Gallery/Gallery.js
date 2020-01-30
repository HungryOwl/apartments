import React, {Component} from 'react';

export default class Gallery extends Component {
    constructor(props) {
        super(props);

        this.images = props.images;
        this.state = { pageNumber: 0 };
    }

    get pageNumber() {
        let { pageNumber } = this.state;
        return pageNumber;
    }

    set pageNumber(value) {
        this.setState({ pageNumber: value });
    }

    get minPage() {
        return 0;
    }

    get maxPage() {
        return this.images.length - 1;
    }

    get currentImage() {
        return this.images[this.pageNumber];
    }

    isButton() {
        return this.props.images.length > 1;
    }

    increaseCounter = () => {
        this.pageNumber = (this.pageNumber >= this.maxPage) ? this.minPage : this.pageNumber + 1;
    };

    decreaseCounter = () => {
        this.pageNumber = (this.pageNumber <= this.minPage) ? this.maxPage : this.pageNumber - 1;
    };

    render() {
        return (
            <div className="gallery">
                <div className="gallery__wrapper">
                    {this.isButton() && <button className="gallery__button button button--prev" onClick={this.decreaseCounter}>❮</button>}
                    <div className="gallery__img-wrapper">
                        <img className="gallery__image" src={this.currentImage} alt="#"/>
                    </div>
                    {this.isButton() && <button className="gallery__button button button--next" onClick={this.increaseCounter}>❯</button>}
                </div>
            </div>
        )
    }
};
