import {ActionType} from './action';
import {extend} from '../utils/extend';
import {SortTypes} from '../const';

const initialState = {
  city: `Paris`,
  sort: SortTypes.POPULAR,
  activeOffer: {}
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return extend(state, {
        city: action.payload
      });
    case ActionType.CHANGE_SORT:
      return extend(state, {
        sort: action.payload
      });
    case ActionType.CHANGE_ACTIVE_OFFER:
      return extend(state, {
        activeOffer: action.payload
      });
  }

  return state;
};

export {reducer};
