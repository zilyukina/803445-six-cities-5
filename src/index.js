import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";
import offers from "./mocks/offers";
import {createStore} from "redux";
import {Provider} from "react-redux";
import {reducer} from "./store/reducer";

const SETTINGS = {
  CITIES_LIST: [
    `Paris`,
    // `Cologne`,
    // `Brussels`,
    `Amsterdam`,
    // `Hamburg`,
    // `Dusseldorf`
  ],
  CITIES_CENTER: {
    Paris: [48.836574, 2.344202],
    Amsterdam: [52.357046, 4.873466],
  }
};

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
);

ReactDOM.render(
    <Provider store={store}>
      <App
        citiesList={SETTINGS.CITIES_LIST}
        citiesCenters={SETTINGS.CITIES_CENTER}
        offers={offers}/>
    </Provider>,
    document.querySelector(`#root`)
);
