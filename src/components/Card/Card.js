import React from 'react';

const Card = (props) => {
    const { features } = props;

    return (
        <article className="card" data-id={features.id}>
            <a className="card__link" href="#">
                <img className="card__img" src={features.previewImage} width='240' height='180'/>
            </a>
            <div className="card__textblock">
                <div className="card__title">{features.title}</div>
                <p className="card__row">
                    <span className="card__caption">адрес:</span>
                    <span className="card__value">{features.address}</span></p>
                <p className="card__row">
                    <span className="card__caption">стоимость:</span>
                    <span className="card__value">{features.price}</span>
                </p>
                <a className="button button--details" href="#">Подробнее</a>
            </div>
        </article>
    )
};

export default Card;
