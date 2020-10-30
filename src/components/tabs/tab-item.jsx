import React from "react";
import PropTypes from "prop-types";

const TabItem = (props) => {
  const {city, isActive, setActive} = props;

  return (
    <li className="locations__item">
      <a className={`locations__item-link tabs__item` + (isActive ? ` tabs__item--active` : ``)} href="#" onClick={setActive}>
        <span>{city}</span>
      </a>
    </li>
  );
};

TabItem.propTypes = {
  city: PropTypes.string.isRequired,
  setActive: PropTypes.func,
  isActive: PropTypes.bool
};

export default TabItem;
