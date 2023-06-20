import { combineReducers } from "redux"
import { ProductReducer, SelectedProductReducer } from "./productReducers"

const reducers = combineReducers({
    allProduct: ProductReducer,
    seleted:SelectedProductReducer
});

export default reducers;