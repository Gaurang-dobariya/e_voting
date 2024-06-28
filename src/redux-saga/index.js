import { all } from "redux-saga/effects";
import { handle_delete_connection_saga, handle_delete_election_saga, handle_delete_party_saga, handle_delete_voter_saga, handle_get_connection_saga, handle_get_election_saga, handle_get_party_saga, handle_get_vote_saga, handle_get_voter_saga, handle_post_connection_saga, handle_post_election_saga, handle_post_party_saga, handle_post_vote_saga, handle_post_voter_saga } from "./saga/saga";


function* rootSaga() {

    yield all([
        // Party
        handle_post_party_saga(),
        handle_get_party_saga(),
        handle_delete_party_saga(),

        // voter
        handle_get_voter_saga(),
        handle_post_voter_saga(),
        handle_delete_voter_saga(),

        // election
        handle_get_election_saga(),
        handle_post_election_saga(),
        handle_delete_election_saga(),

        // connection
        handle_post_connection_saga(),
        handle_get_connection_saga(),
        handle_delete_connection_saga(),

        // vote
        handle_post_vote_saga(),
        handle_get_vote_saga(),
    ])
}
export default rootSaga