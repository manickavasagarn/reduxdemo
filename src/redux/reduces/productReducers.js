import ActionType from "../contants/action-type";
const initial_state = {
  products: [],
};

export const ProductReducer = (state = initial_state, action) => {
  switch (action.type) {
    case ActionType.SET_PRODUCT:
      return { ...state, products: action.payload };
    default:
      return state;
  }
};

export const SelectedProductReducer = (state = {}, action) => {
  switch (action.type) {
    case ActionType.SELECT_PRODUCT:
      return { ...state, ...action.payload };
    case ActionType.REMOVE_SELECT_PRODUCT:
      return {};
    default:
      return state;
  }
};
