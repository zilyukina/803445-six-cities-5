import React from "react";
import PropTypes from "prop-types";
import Offer from "../offer-card/offer-card";

const OffersList = (props) => {
  const {offers} = props;

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => <Offer key={offer.id} offer={offer}/>)}
    </div>
  );
};

OffersList.propTypes = {
  offers: PropTypes.array
};


export default OffersList;
