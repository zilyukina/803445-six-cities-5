import React from "react";
import OffersList from "../offers-list/offers-list";
import PropTypes from "prop-types";

const NeighbourOffers = ({offers}) => {
  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">
        <OffersList
          offers={offers}
          cardModifier="near-places__card"
          imgModifier="near-places__image-wrapper"
        />
      </div>
    </section>
  );
};

NeighbourOffers.propTypes = {
  offers: PropTypes.array.isRequired,
};

export default NeighbourOffers;
