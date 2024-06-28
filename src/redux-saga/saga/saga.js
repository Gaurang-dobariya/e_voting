import { takeLatest } from "redux-saga/effects";
import { DELETE_ELECTION_PENDING, DELETE_PARTYLIST_PENDING, DELETE_PARTY_PENDING, DELETE_USER_PENDING, GET_ELECTION_LIST_PENDING, GET_PARTYLIST_LIST_PENDING, GET_PARTY_LIST_PENDING, GET_USER_LIST_PENDING, GET_VOTE_LIST_PENDING, POST_CREATE_PARTY_PENDING, POST_ELECTION_CREATE_PENDING, POST_PARTYLIST_CREATE_PENDING, POST_USER_CREATE_PENDING, POST_VOTE_CREATE_PENDING } from "../redux/action";
import { handle_delete_connection, handle_delete_election, handle_delete_party, handle_delete_voter, handle_get_connection, handle_get_election, handle_get_party, handle_get_vote, handle_get_voter, handle_post_connection, handle_post_election, handle_post_party, handle_post_vote, handle_post_voter } from "./manage";


// party
function* handle_post_party_saga() {

    yield takeLatest(POST_CREATE_PARTY_PENDING, handle_post_party)

}
function* handle_get_party_saga() {

    yield takeLatest(GET_PARTY_LIST_PENDING, handle_get_party)

}
function* handle_delete_party_saga() {

    yield takeLatest(DELETE_PARTY_PENDING, handle_delete_party)

}


// voter
function* handle_get_voter_saga() {

    yield takeLatest(GET_USER_LIST_PENDING, handle_get_voter)

}
function* handle_post_voter_saga() {

    yield takeLatest(POST_USER_CREATE_PENDING, handle_post_voter)

}
function* handle_delete_voter_saga() {

    yield takeLatest(DELETE_USER_PENDING, handle_delete_voter)

}


// election
function* handle_get_election_saga() {

    yield takeLatest(GET_ELECTION_LIST_PENDING, handle_get_election)

}
function* handle_post_election_saga() {

    yield takeLatest(POST_ELECTION_CREATE_PENDING, handle_post_election)

}
function* handle_delete_election_saga() {

    yield takeLatest(DELETE_ELECTION_PENDING, handle_delete_election)

}


// connection
function* handle_post_connection_saga() {

    yield takeLatest(POST_PARTYLIST_CREATE_PENDING, handle_post_connection)

}
function* handle_get_connection_saga() {

    yield takeLatest(GET_PARTYLIST_LIST_PENDING, handle_get_connection)

}
function* handle_delete_connection_saga() {

    yield takeLatest(DELETE_PARTYLIST_PENDING, handle_delete_connection)

}


// vote
function* handle_post_vote_saga() {

    yield takeLatest(POST_VOTE_CREATE_PENDING, handle_post_vote)

}
function* handle_get_vote_saga() {

    yield takeLatest(GET_VOTE_LIST_PENDING, handle_get_vote)

}

export {
    handle_post_party_saga, handle_get_party_saga, handle_delete_party_saga,
    handle_get_voter_saga, handle_post_voter_saga, handle_delete_voter_saga,
    handle_get_election_saga, handle_post_election_saga, handle_delete_election_saga,
    handle_post_connection_saga, handle_get_connection_saga, handle_delete_connection_saga,
    handle_post_vote_saga,handle_get_vote_saga
}