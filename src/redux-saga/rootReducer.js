import { combineReducers } from "redux";
import { adminReducer, connectionReducer, electionReducer, voterReducer } from "./redux/reducer";

let rootReducer = combineReducers({
    adminReducer,
    voterReducer,
    electionReducer,
    connectionReducer,
    voterReducer,
})
export default rootReducer