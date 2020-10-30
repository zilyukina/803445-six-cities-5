import React from "react";
import PropTypes from "prop-types";

const SortItem = ({setActive, name, isActive}) => {
  return (
    <li className={`places__option` + (isActive ? ` places__option--active` : ``)} onClick={() => setActive(name)} tabIndex="0">{name}</li>
  );
};

SortItem.propTypes = {
  setActive: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  isActive: PropTypes.bool
};

export {SortItem};
