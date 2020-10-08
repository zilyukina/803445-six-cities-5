import React from "react";
import PropTypes from "prop-types";
import {AccomodationType} from "../../const";

const OfferCard = ({offer}) => {
  const {
    type,
    price,
    imgMain,
    title,
    premium,
    stars
    // onHover
  } = offer;
  const rating = {width: `${20 * stars}%`};
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
            <span style={rating}></span>
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
    type: PropTypes.oneOf([AccomodationType.ROOM, AccomodationType.APARTMENT]).isRequired,
    price: PropTypes.number.isRequired,
    imgMain: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
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
