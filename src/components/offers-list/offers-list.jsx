import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import Offer from "../offer-card/offer-card";
import {SortTypes} from "../../const";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";

class OffersList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      offers: this.props.offers.filter((offer) => offer.city === this.props.city)
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.sort !== prevProps.sort || this.props.city !== prevProps.city) {
      this.setState({
        offers: this.sortedOffers(this.props.offers, this.props.sort).filter((offer) => offer.city === this.props.city)
      });
    }

  }

  sortedOffers(offers, sort) {
    switch (sort) {
      case SortTypes.PRICE_HIGH_TO_LOW:
        return offers.sort((a, b) => b.price - a.price);
      case SortTypes.PRICE_LOW_TO_HIGH:
        return offers.sort((a, b) => a.price - b.price);
      case SortTypes.TOP_RATED_FIRST:
        return offers.sort((a, b) => b.stars - a.stars);
      default:
        return offers.sort((a, b) => a.id - b.id);
    }
  }

  render() {
    const {cardModifier, imgModifier, infoModifier, showPremiumLabel, onSetActiveOffer} = this.props;

    return (
      <React.Fragment>
        {this.state.offers.map((offer) =>
          <Offer key={offer.id}
            offer={offer}
            cardModifier={cardModifier}
            imgModifier={imgModifier}
            infoModifier={infoModifier}
            showPremiumLabel={showPremiumLabel}
            setActive={(activeOffer) => {
              onSetActiveOffer(activeOffer);
            }}/>)}
      </React.Fragment>
    );
  }
}

OffersList.propTypes = {
  onSetActiveOffer: PropTypes.func.isRequired,
  offers: PropTypes.array.isRequired,
  showPremiumLabel: PropTypes.bool,
  cardModifier: PropTypes.string,
  imgModifier: PropTypes.string,
  infoModifier: PropTypes.string,
  sort: PropTypes.string.isRequired,
  city: PropTypes.string
};

const mapStateToProps = (state) => ({
  sort: state.sort,
  city: state.city,
  activeOffer: state.activeOffer
});

const mapDispatchToProps = (dispatch) => ({
  onSetActiveOffer(offer) {
    dispatch(ActionCreator.setActiveOffer(offer));
  },
});


export {OffersList};
export default connect(mapStateToProps, mapDispatchToProps)(OffersList);
