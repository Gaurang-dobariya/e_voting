import { takeLatest } from "redux-saga/effects";
import { GET_PARTY_LIST_PENDING, POST_CREATE_PARTY_PENDING } from "../redux/action";
import { handle_get_party, handle_post_party } from "./manage";

function* handle_post_party_saga() {

    yield takeLatest(POST_CREATE_PARTY_PENDING, handle_post_party)

}

function* handle_get_party_saga() {

    yield takeLatest(GET_PARTY_LIST_PENDING, handle_get_party)

}

export { handle_post_party_saga, handle_get_party_saga }