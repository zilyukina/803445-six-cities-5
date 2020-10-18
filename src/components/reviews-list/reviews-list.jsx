import React from "react";
import PropTypes from "prop-types";
import ReviewItem from "../review-item/review-item";
import Feedback from "../feedback/feedback";

const ReviewsList = ({reviews, modifier}) => {
  const classes = `${modifier} reviews`;
  return (
    <section className={classes}>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {reviews.map((review) =>
          <ReviewItem key={review.id}
            review = {review}
          />)
        }
      </ul>
      <Feedback />
    </section>
  );
};

ReviewsList.propTypes = {
  reviews: PropTypes.array.isRequired,
  modifier: PropTypes.string
};


export default ReviewsList;
