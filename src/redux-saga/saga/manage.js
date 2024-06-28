import { call, put } from "redux-saga/effects"
import { delete_connection, delete_election, delete_party, delete_voter, get_connection, get_election, get_party, get_vote, get_voter, post_connection, post_election, post_party, post_vote, post_voter } from "../redux/api"
import { DELETE_ELECTION_ERROR, DELETE_ELECTION_SUCCESS, DELETE_PARTYLIST_ERROR, DELETE_PARTYLIST_SUCCESS, DELETE_PARTY_ERROR, DELETE_PARTY_SUCCESS, DELETE_USER_ERROR, DELETE_USER_SUCCESS, GET_ELECTION_LIST_ERROR, GET_ELECTION_LIST_SUCCESS, GET_PARTYLIST_LIST_ERROR, GET_PARTYLIST_LIST_SUCCESS, GET_PARTY_LIST_ERROR, GET_PARTY_LIST_SUCCESS, GET_USER_LIST_ERROR, GET_USER_LIST_SUCCESS, GET_VOTE_LIST_ERROR, GET_VOTE_LIST_SUCCESS, POST_CREATE_PARTY_ERROR, POST_CREATE_PARTY_SUCCESS, POST_ELECTION_CREATE_ERROR, POST_ELECTION_CREATE_SUCCESS, POST_PARTYLIST_CREATE_ERROR, POST_PARTYLIST_CREATE_SUCCESS, POST_USER_CREATE_ERROR, POST_USER_CREATE_SUCCESS, POST_VOTE_CREATE_ERROR, POST_VOTE_CREATE_SUCCESS } from "../redux/action"

// party
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
    // console.log(action, "action from get-party manage");
    try {

        let { data, status } = yield call(get_party, action)

        yield put({ type: GET_PARTY_LIST_SUCCESS, payload: data })

    } catch (err) {
        yield put({ type: GET_PARTY_LIST_ERROR, payload: err })
    }
}

function* handle_delete_party(action) {
    // console.log(action, "action from delete-party manage");
    try {

        let { data, status } = yield call(delete_party, action)

        yield put({ type: DELETE_PARTY_SUCCESS, payload: data })

    } catch (err) {
        yield put({ type: DELETE_PARTY_ERROR, payload: err })
    }
}


// voter
function* handle_get_voter(action) {
    // console.log(action, "action from get-voter manage");
    try {

        let { data, status } = yield call(get_voter, action)

        yield put({ type: GET_USER_LIST_SUCCESS, payload: data })

    } catch (err) {
        yield put({ type: GET_USER_LIST_ERROR, payload: err })
    }
}

function* handle_post_voter(action) {
    // console.log(action, "action from post-voter manage");
    try {

        let { data, status } = yield call(post_voter, action)

        yield put({ type: POST_USER_CREATE_SUCCESS, payload: data })

    } catch (err) {
        yield put({ type: POST_USER_CREATE_ERROR, payload: err })
    }
}

function* handle_delete_voter(action) {
    // console.log(action, "action from delete-voter manage");
    try {

        let { data, status } = yield call(delete_voter, action)

        yield put({ type: DELETE_USER_SUCCESS, payload: data })

    } catch (err) {
        yield put({ type: DELETE_USER_ERROR, payload: err })
    }
}


// election
function* handle_get_election(action) {
    // console.log(action, "action from get-election manage");
    try {

        let { data, status } = yield call(get_election, action)

        yield put({ type: GET_ELECTION_LIST_SUCCESS, payload: data })

    } catch (err) {
        yield put({ type: GET_ELECTION_LIST_ERROR, payload: err })
    }
}

function* handle_post_election(action) {
    // console.log(action, "action from post-election manage");
    try {

        let { data, status } = yield call(post_election, action)

        yield put({ type: POST_ELECTION_CREATE_SUCCESS, payload: data })

    } catch (err) {
        yield put({ type: POST_ELECTION_CREATE_ERROR, payload: err })
    }
}

function* handle_delete_election(action) {
    // console.log(action, "action from delete-election manage");
    try {

        let { data, status } = yield call(delete_election, action)

        yield put({ type: DELETE_ELECTION_SUCCESS, payload: data })

    } catch (err) {
        yield put({ type: DELETE_ELECTION_ERROR, payload: err })
    }
}


// connection
function* handle_post_connection(action) {
    // console.log(action, "action from post-connection manage");
    try {

        let { data, status } = yield call(post_connection, action)

        yield put({ type: POST_PARTYLIST_CREATE_SUCCESS, payload: data })

    } catch (err) {
        yield put({ type: POST_PARTYLIST_CREATE_ERROR, payload: err })
    }
}

function* handle_get_connection(action) {
    // console.log(action, "action from get-connection manage");
    try {

        let { data, status } = yield call(get_connection, action)

        yield put({ type: GET_PARTYLIST_LIST_SUCCESS, payload: data })

    } catch (err) {
        yield put({ type: GET_PARTYLIST_LIST_ERROR, payload: err })
    }
}

function* handle_delete_connection(action) {
    console.log(action, "action from delete-connection manage");
    try {

        let { data, status } = yield call(delete_connection, action)

        yield put({ type: DELETE_PARTYLIST_SUCCESS, payload: data })

    } catch (err) {
        yield put({ type: DELETE_PARTYLIST_ERROR, payload: err })
    }
}


// vote
function* handle_post_vote(action) {
    // console.log(action, "action from post-connection manage");
    try {

        let { data, status } = yield call(post_vote, action)

        yield put({ type: POST_VOTE_CREATE_SUCCESS, payload: data })

    } catch (err) {
        yield put({ type: POST_VOTE_CREATE_ERROR, payload: err })
    }
}

function* handle_get_vote(action) {
    console.log(action, "action from get-vote manage");
    try {

        let { data, status } = yield call(get_vote, action)

        yield put({ type: GET_VOTE_LIST_SUCCESS, payload: data })

    } catch (err) {
        yield put({ type: GET_VOTE_LIST_ERROR, payload: err })
    }
}
export {
    handle_post_party, handle_get_party, handle_delete_party,
    handle_get_voter, handle_post_voter, handle_delete_voter,
    handle_get_election, handle_post_election, handle_delete_election,
    handle_post_connection, handle_get_connection, handle_delete_connection,
    handle_post_vote, handle_get_vote
}