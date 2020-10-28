import React from "react";
import PropTypes from "prop-types";
import OffersList from "../offers-list/offers-list";
import Map from "../map/map";
import MapConfig from '../map/config';
import CitiesTabs from "../cities-tabs/cities-tabs";
import {connect} from "react-redux";

const CitiesList = (props) => {
  const {citiesList, offers, offersAmount, city, citiesCenters} = props;
  const {...CONFIG} = MapConfig;

  return (
    <React.Fragment>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">
            <CitiesTabs cities={citiesList}/>
          </ul>
        </section>
      </div>
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{offersAmount} places to stay in {city}</b>
            <form className="places__sorting" action="#" method="get">
              <span className="places__sorting-caption">Sort by</span>
              <span className="places__sorting-type" tabIndex="0">
                Popular
                <svg className="places__sorting-arrow" width="7" height="4">
                  <use xlinkHref="#icon-arrow-select"></use>
                </svg>
              </span>
              <ul className="places__options places__options--custom places__options--opened">
                <li className="places__option places__option--active" tabIndex="0">Popular</li>
                <li className="places__option" tabIndex="0">Price: low to high</li>
                <li className="places__option" tabIndex="0">Price: high to low</li>
                <li className="places__option" tabIndex="0">Top rated first</li>
              </ul>
            </form>
            <div className="cities__places-list places__list tabs__content">
              <OffersList
                offers={offers}
                cardModifier="cities__place-card"
                imgModifier="cities__image-wrapper"
                showPremiumLabel={true}
              />
            </div>
          </section>
          <div className="cities__right-section">
            <section className="cities__map map">
              <Map offers={offers} defaultCity={citiesCenters[city]} config={CONFIG} />
            </section>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

CitiesList.propTypes = {
  city: PropTypes.string.isRequired,
  offers: PropTypes.array,
  onChangeCity: PropTypes.func,
  offersAmount: PropTypes.number.isRequired,
  citiesList: PropTypes.array.isRequired,
  citiesCenters: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  city: state.city,
});

export {CitiesList};
export default connect(mapStateToProps)(CitiesList);
