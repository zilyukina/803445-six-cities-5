import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";
import offers from "./mocks/offers";
import {createStore} from "redux";
import {Provider} from "react-redux";
import {reducer} from "./store/reducer";

const SETTINGS = {
  PLACES_AMOUNT: 312
};

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
);

ReactDOM.render(
    <Provider store={store}>
      <App
        placesAmount={SETTINGS.PLACES_AMOUNT}
        offers={offers}/>
    </Provider>,
    document.querySelector(`#root`)
);
