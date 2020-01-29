import React from 'react';

const Card = (props) => {
    const { features } = props;
    const previewImage = features.previewImage || 'https://via.placeholder.com/240x180';

    return (
        <article className="card" data-id={features.id}>
            <a className="card__link" href="#">
                <img className="card__img" src={previewImage} width='240' height='180'/>
            </a>
            <div className="card__textblock">
                {features.title && <div className="card__title">{features.title}</div>}
                {
                    features.address && <p className="card__row">
                        <span className="card__caption">адрес:</span>
                        <span className="card__value">{features.address}</span>
                    </p>
                }
                {
                    features.price && <p className="card__row">
                        <span className="card__caption">стоимость:</span>
                        <span className="card__value">{features.price}</span>
                    </p>
                }
                <a className="button button--details" href="#">Подробнее</a>
            </div>
        </article>
    )
};

export default Card;
