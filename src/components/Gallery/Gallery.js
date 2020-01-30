import React, {Component} from 'react';

export default class Gallery extends Component {
    constructor(props) {
        super(props);

        this.images = props.images;
        this.slideCount = this.images.length;
        let pageNumber = 0;
        this.state = { pageNumber };
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
        return this.slideCount - 1;
    }

    get currentImage() {
        return this.images[this.pageNumber];
    }

    increaseCounter = () => {
        this.pageNumber = (this.pageNumber >= this.maxPage) ? this.minPage : this.pageNumber + 1;
    };

    decreaseCounter = () =>  {
        this.pageNumber = (this.pageNumber <= this.minPage) ? this.maxPage : this.pageNumber - 1;
    };

    render() {
        return (
            <div className="gallery">
                <button className="gallery__button button button--prev" onClick={this.decreaseCounter}>Предыдущий</button>
                <div className="gallery__wrapper">
                    <img className="gallery__image" src={this.currentImage} alt="#"/>
                </div>
                <button className="gallery__button button button--next" onClick={this.increaseCounter}>Следующий</button>
            </div>
        )
    }
};
