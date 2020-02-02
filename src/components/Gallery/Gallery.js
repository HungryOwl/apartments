import React, {Component} from 'react';

export default class Gallery extends Component {
    constructor(props) {
        super(props);

        this.images = props.images;
        this.state = { currentPage: 0 };
    }

    get currentPage() {
        let { currentPage } = this.state;
        return currentPage;
    }

    set currentPage(value) {
        this.setState({ currentPage: value });
    }

    get minPage() {
        return 0;
    }

    get maxPage() {
        return this.images.length - 1;
    }

    get currentImage() {
        return this.images[this.currentPage];
    }

    isButton() {
        return this.props.images.length > 1;
    }

    increaseCounter = () => {
        this.currentPage = (this.currentPage >= this.maxPage) ? this.minPage : this.currentPage + 1;
    };

    decreaseCounter = () => {
        this.currentPage = (this.currentPage <= this.minPage) ? this.maxPage : this.currentPage - 1;
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
