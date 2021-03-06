import React from 'react';
import { Link } from "react-router-dom";

const Card = ({ features }) => {
    if (!features) {
        return;
    }

    const previewImage = features.previewImage || 'https://via.placeholder.com/240x180';

    return (
        <article className="card">
            <Link className="card__link" to={`/apartment/${features.id}`}>
                <img className="card__img" src={previewImage} width='240' height='180'/>
            </Link>

            <div className="card__textblock">
                <div className="card__text-wrapper">
                    {features.title && <div className="card__title">{features.title}</div>}
                    {
                        features.address &&
                        <p className="card__row">
                            <span className="card__caption">адрес:</span>
                            <span className="card__value">{features.address}</span>
                        </p>
                    }
                    {
                        features.price &&
                        <p className="card__row">
                            <span className="card__caption">стоимость:</span>
                            <span className="card__value">{features.price}</span>
                        </p>
                    }
                </div>
                <Link className="card__button button button--details" to={`/apartment/${features.id}`}>Подробнее</Link>
            </div>
        </article>
    )
};

export default Card;
