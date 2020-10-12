import React from "react";
import PropTypes from "prop-types";

const StarRating = ({stars}) => {
  const style = {width: `${stars * 20}%`};
  return (
    <React.Fragment>
      <span style={style}></span>
      <span className="visually-hidden">Rating</span>
    </React.Fragment>
  );
};


StarRating.propTypes = {
  stars: PropTypes.string.isRequired,
};

export default StarRating;
