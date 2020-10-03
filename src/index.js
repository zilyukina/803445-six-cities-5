import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";

const SETTINGS = {
  PLACES_AMOUNT: 312
};

ReactDOM.render(
    <App placesAmount={SETTINGS.PLACES_AMOUNT} />,
    document.querySelector(`#root`)
);
