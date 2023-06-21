import { combineReducers } from "redux"
import { AddCart, ProductReducer, SelectedProductReducer } from "./productReducers"

const reducers = combineReducers({
    allProduct: ProductReducer,
    seleted:SelectedProductReducer,
    cart:AddCart
});

export default reducers;