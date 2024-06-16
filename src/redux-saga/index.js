import { all } from "redux-saga/effects";
import { handle_get_party_saga, handle_post_party_saga } from "./saga/saga";

function* rootSaga() {

    yield all([
        handle_post_party_saga(),
        handle_get_party_saga()
    ])
}
export default rootSaga