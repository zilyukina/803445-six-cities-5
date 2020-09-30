import React from "react";
import PropTypes from "prop-types";
import Main from "../main/main";


const App = (props) => {
  const {placesAmount} = props;
  return (
    <Main placesAmount={placesAmount}/>
  );
};

App.propTypes = {
  placesAmount: PropTypes.number.isRequired,
};


export default App;
