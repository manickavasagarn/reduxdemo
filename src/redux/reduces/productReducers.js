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

const initial_cart = {
  products: [],
};
export const AddCart = (state = initial_cart, action) => {
  switch (action.type) {
    case ActionType.ADDTOCART:
      var index = state.products.findIndex(
        (obj) => obj.id == action.payload.id
      );
      if (index >= 0) {
        return state;
      } else {
        return { products: [...state.products, action.payload] };
      }
    case ActionType.DELETETOCART:
      var index1 = state.products.findIndex((obj) => obj.id == action.payload);
      if (index1 < 0) {
        return state;
      } else {
       // return { products: [...state.products, action.payload] };
       state.products.splice(index1,1);
       return state
      }
    default:
      return state;
  }
};
