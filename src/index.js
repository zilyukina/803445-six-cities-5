import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";
import offers from "./mocks/offers";

const SETTINGS = {
  PLACES_AMOUNT: 312
};

ReactDOM.render(
    <App
      placesAmount={SETTINGS.PLACES_AMOUNT}
      offers={offers}/>,
    document.querySelector(`#root`)
);
