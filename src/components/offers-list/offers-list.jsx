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
    const {offers} = this.props;

    return (
      <React.Fragment>
        {offers.map((offer) =>
          <Offer key={offer.id}
            offer={offer}
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
};


export default OffersList;
