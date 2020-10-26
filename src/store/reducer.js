import {ActionType} from './action';
import {extend} from '../utils/extend';

const initialState = {
  city: `Paris`,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return extend(state, {
        city: action.payload
      });
  }

  return state;
};

export {reducer};
