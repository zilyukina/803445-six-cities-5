import React from "react";
import PropTypes from "prop-types";
import CitiesTabItem from "./cities-tab-item";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";

const CitiesTabs = (props) => {
  const {cities, onChangeCity, city} = props;
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          <React.Fragment>
            {cities.map((cityItem, index) =>
              <CitiesTabItem key={index}
                city={cityItem}
                isActive={cityItem === city}
                setActive={() => onChangeCity(cityItem)}
              />)}
          </React.Fragment>
        </ul>
      </section>
    </div>
  );
};

CitiesTabs.propTypes = {
  cities: PropTypes.array.isRequired,
  onChangeCity: PropTypes.func,
  city: PropTypes.string.isRequired
};

const mapStateToProps = (state) => ({
  city: state.city,
});

const mapDispatchToProps = (dispatch) => ({
  onChangeCity(city) {
    dispatch(ActionCreator.changeCity(city));
  },
});

export {CitiesTabs};
export default connect(mapStateToProps, mapDispatchToProps)(CitiesTabs);
