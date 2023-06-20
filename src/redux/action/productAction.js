import ActionType from "../contants/action-type";
export const setProduct = (product) => {
  return {
    type: ActionType.SET_PRODUCT,
    payload: product,
  };
};

export const selectProduct = (product) => {
  return {
    type: ActionType.SELECT_PRODUCT,
    payload: product,
  };
};

export const removeselectProduct = () => {
  return {
    type: ActionType.REMOVE_SELECT_PRODUCT
  };
};
