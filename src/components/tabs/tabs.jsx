import React from "react";
import PropTypes from "prop-types";
import TabItem from "./tab-item";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";

const Tabs = (props) => {
  const {cities, onChangeCity, city} = props;
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          <React.Fragment>
            {cities.map((cityItem, index) =>
              <TabItem key={index}
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

Tabs.propTypes = {
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

export {Tabs};
export default connect(mapStateToProps, mapDispatchToProps)(Tabs);
