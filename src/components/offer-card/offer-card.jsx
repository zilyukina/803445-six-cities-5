import React from "react";
import PropTypes from "prop-types";

const OfferCard = ({offer}) => {
  const {
    type,
    price,
    imgMain,
    title,
    premium
    // onHover
  } = offer;
  const style80 = {width: `80%`};
  return (
    <article className="cities__place-card place-card">
      {premium &&
        <div className="place-card__mark">
          <span >Premium</span>
        </div>
      }
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={`img/` + imgMain} width="260" height="200"
            alt="Place image" />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={style80}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">{title}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

OfferCard.propTypes = {
  offer: PropTypes.shape({
    type: PropTypes.string,
    price: PropTypes.number,
    imgMain: PropTypes.string,
    title: PropTypes.string,
    city: PropTypes.string,
    bedroomsCount: PropTypes.number,
    guests: PropTypes.string,
    images: PropTypes.arrayOf(PropTypes.string),
    facilities: PropTypes.arrayOf(PropTypes.string),
    stars: PropTypes.number,
    premium: PropTypes.bool,
    onHover: PropTypes.func,
  })
};


export default OfferCard;
