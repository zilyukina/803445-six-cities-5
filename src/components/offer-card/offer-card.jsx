import React from "react";
import PropTypes from "prop-types";
import {AccomodationType} from "../../const";
import {Link} from "react-router-dom";
import StarRating from "../star-rating/star-rating";

const OfferCard = ({offer, setActive, cardModifier, imgModifier, infoModifier, showPremiumLabel}) => {
  const {
    type,
    price,
    imgMain,
    title,
    premium,
    stars,
    id,
    isFavorite
  } = offer;

  return (
    <article className={`place-card ${cardModifier}`} onMouseEnter={() => setActive(offer)} onMouseLeave={() => setActive(null)}>
      {premium && showPremiumLabel &&
        <div className="place-card__mark">
          <span >Premium</span>
        </div>
      }
      <div className={`place-card__image-wrapper ${imgModifier}`}>
        <Link
          to={{
            pathname: `/offer/${id}`,
          }}>
          <img className="place-card__image" src={`img/` + imgMain} width="260" height="200"
            alt="Place image" />
        </Link>
      </div>
      <div className={`place-card__info ${infoModifier}`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button ${ isFavorite ? `place-card__bookmark-button--active` : ``}  button`} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <StarRating stars={stars} />
          </div>
        </div>
        <h2 className="place-card__name">
          <Link
            to={{
              pathname: `/offer/${id}`,
            }}
          >{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

OfferCard.propTypes = {
  setActive: PropTypes.func.isRequired,
  cardModifier: PropTypes.string,
  imgModifier: PropTypes.string,
  infoModifier: PropTypes.string,
  showPremiumLabel: PropTypes.bool,
  offer: PropTypes.shape({
    id: PropTypes.number.isRequired,
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
    isFavorite: PropTypes.bool
  })
};

export default OfferCard;
