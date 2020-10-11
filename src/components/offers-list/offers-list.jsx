import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import Offer from "../offer-card/offer-card";

class OffersList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeOffer: null
    };
  }

  render() {
    const {offers, cardModifier, imgModifier, infoModifier, showPremiumLabel} = this.props;

    return (
      <React.Fragment>
        {offers.map((offer) =>
          <Offer key={offer.id}
            offer={offer}
            cardModifier={cardModifier}
            imgModifier={imgModifier}
            infoModifier={infoModifier}
            showPremiumLabel={showPremiumLabel}
            setActive={(activeOffer) => {
              this.setState({
                activeOffer
              });
            }}/>)}
      </React.Fragment>
    );
  }
}

OffersList.propTypes = {
  offers: PropTypes.array.isRequired,
  showPremiumLabel: PropTypes.bool,
  cardModifier: PropTypes.string,
  imgModifier: PropTypes.string,
  infoModifier: PropTypes.string
};


export default OffersList;
