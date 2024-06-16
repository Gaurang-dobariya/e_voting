import { combineReducers } from "redux";
import adminReducer from "./redux/reducer";

let rootReducer = combineReducers({
    adminReducer,
})
export default rootReducer