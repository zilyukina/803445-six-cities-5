import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import Offer from "../offer-card/offer-card";

class OffersList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeOffer: null
    }
  }

  render() {
    const {offers} = this.props;

    return (
      <div className="cities__places-list places__list tabs__content">
        {offers.map((offer) => <Offer key={offer.id} offer={offer}/>)}
      </div>
    );
  }
}

OffersList.propTypes = {
  offers: PropTypes.array
};


export default OffersList;
