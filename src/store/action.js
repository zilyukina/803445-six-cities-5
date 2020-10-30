export const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  GET_OFFERS_LIST: `GET_OFFERS_LIST`,
  CHANGE_SORT: `CHANGE_SORT`,
  CHANGE_ACTIVE_OFFER: `CHANGE_ACTIVE_OFFER`
};

export const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city
  }),
  getOffersList: (city) => ({
    type: ActionType.GET_OFFERS_LIST,
    payload: city
  }),
  changeSort: (sortBy) => ({
    type: ActionType.CHANGE_SORT,
    payload: sortBy
  }),
  setActiveOffer: (offer) => ({
    type: ActionType.CHANGE_ACTIVE_OFFER,
    payload: offer
  })
};
