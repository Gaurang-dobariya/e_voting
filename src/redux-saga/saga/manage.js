import { call, put } from "redux-saga/effects"
import { get_party, post_party } from "../redux/api"
import { GET_PARTYLIST_LIST_ERROR, GET_PARTY_LIST_SUCCESS, POST_CREATE_PARTY_ERROR, POST_CREATE_PARTY_SUCCESS } from "../redux/action"

function* handle_post_party(action) {
    // console.log(action, "action from post-party manage");
    try {

        let { data, status } = yield call(post_party, action)

        yield put({ type: POST_CREATE_PARTY_SUCCESS, payload: data })

    } catch (err) {
        yield put({ type: POST_CREATE_PARTY_ERROR, payload: err })
    }
}
function* handle_get_party(action) {
    console.log(action, "action from get-party manage");
    try {

        let { data, status } = yield call(get_party, action)

        yield put({ type: GET_PARTY_LIST_SUCCESS, payload: data })

    } catch (err) {
        yield put({ type:GET_PARTYLIST_LIST_ERROR, payload: err })
    }
}
export { handle_post_party,handle_get_party }