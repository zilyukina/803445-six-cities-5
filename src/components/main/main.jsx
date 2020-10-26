import React from "react";
import PropTypes from "prop-types";
import CitiesList from "../cities-list/cities-list";
import {connect} from "react-redux";

const Main = (props) => {
  const {citiesList, offers, city, citiesCenters} = props;
  const getOffers = () => {
    return offers.filter((offer) => offer.city === city).slice(0, 6);
  };
  const getFakeOffersAmount = () => {
    return Math.floor(Math.random() * 10 + 6);
  };
  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link header__logo-link--active">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--index">
        <CitiesList citiesCenters={citiesCenters} offersAmount={getFakeOffersAmount()} offers={getOffers()} citiesList={citiesList}/>
      </main>
    </div>
  );
};

Main.propTypes = {
  citiesList: PropTypes.array.isRequired,
  offers: PropTypes.array,
  city: PropTypes.string.isRequired,
  citiesCenters: PropTypes.object
};

const mapStateToProps = (state) => ({
  city: state.city,
});


export {Main};
export default connect(mapStateToProps)(Main);
