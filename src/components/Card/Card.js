import React, {Component} from 'react';
import { Link } from "react-router-dom";

export default class Card extends Component {
    constructor(props) {
        super(props);
    }

    renderRow(caption, value) {
        return (
            value &&
            <p className="card__row">
                <span className="card__caption">{caption}</span>
                <span className="card__value">{value}</span>
            </p>
        )
    }

    render() {
        if (!this.props) {
            return;
        }

        const { features } = this.props;
        const previewImage = features.previewImage || 'https://via.placeholder.com/240x180';

        return (
            <article className="card">
                <Link className="card__link" to={`/apartment/${features.id}`}>
                    <img className="card__img" src={previewImage} width='240' height='180'/>
                </Link>

                <div className="card__textblock">
                    <div className="card__text-wrapper">
                        {features.title && <div className="card__title">{features.title}</div>}
                        {this.renderRow('адрес:', features.address)}
                        {this.renderRow('стоимость:', features.price)}
                    </div>
                    <Link className="card__button button button--details" to={`/apartment/${features.id}`}>Подробнее</Link>
                </div>
            </article>
        )
    }
}








