import React from "react";
import PropTypes from "prop-types";
import {getFormattedDate} from "../../utils/dates";
import StarRating from "../star-rating/star-rating";

const ReviewItem = ({review}) => {
  const {
    stars,
    text,
    date,
    user,
  } = review;
  const avatarPath = `img/${user.avatar}`;
  const formattedDate = getFormattedDate(date);
  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={avatarPath} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          {user.name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <StarRating stars={stars} />
          </div>
        </div>
        <p className="reviews__text">
          {text}
        </p>
        <time className="reviews__time" dateTime={date}>{formattedDate}</time>
      </div>
    </li>
  );
};

ReviewItem.propTypes = {
  review: PropTypes.shape({
    stars: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    date: PropTypes.date,
    user: PropTypes.shape({
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
    })
  })
};

export default ReviewItem;
