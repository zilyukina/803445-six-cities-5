import React from "react";
import PropTypes from "prop-types";
import Main from "../main/main";
import SignIn from "../sign-in/sign-in";
import Favorites from "../favorites/favorites";
import Room from "../room/room";
import {Switch, Route, BrowserRouter} from "react-router-dom";

const App = (props) => {
  const {citiesList, offers, citiesCenters} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Main
            citiesList={citiesList}
            citiesCenters={citiesCenters}
            offers={offers}/>
        </Route>
      </Switch>
      <Route path="/login" exact component={SignIn}></Route>
      <Route path="/favorites" exact component={Favorites}></Route>
      <Route path="/offer/:id?" exact component={Room}></Route>
    </BrowserRouter>
  );
};

App.propTypes = {
  citiesList: PropTypes.array.isRequired,
  citiesCenters: PropTypes.object.isRequired,
  offers: PropTypes.array
};


export default App;
