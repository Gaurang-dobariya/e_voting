import { DELETE_PARTY } from "../constant";
import { DELETE_ELECTION_ERROR, DELETE_ELECTION_PENDING, DELETE_ELECTION_SUCCESS, DELETE_PARTYLIST_ERROR, DELETE_PARTYLIST_PENDING, DELETE_PARTYLIST_SUCCESS, DELETE_PARTY_ERROR, DELETE_PARTY_PENDING, DELETE_USER_ERROR, DELETE_USER_PENDING, DELETE_USER_SUCCESS, GET_ELECTION_LIST_ERROR, GET_ELECTION_LIST_PENDING, GET_ELECTION_LIST_SUCCESS, GET_PARTYLIST_LIST_ERROR, GET_PARTYLIST_LIST_PENDING, GET_PARTYLIST_LIST_SUCCESS, GET_PARTY_LIST_ERROR, GET_PARTY_LIST_PENDING, GET_PARTY_LIST_SUCCESS, GET_USER_LIST_ERROR, GET_USER_LIST_PENDING, GET_USER_LIST_SUCCESS, GET_VOTE_LIST_PENDING, GET_VOTE_LIST_SUCCESS, POST_CREATE_PARTY_ERROR, POST_CREATE_PARTY_PENDING, POST_CREATE_PARTY_SUCCESS, POST_ELECTION_CREATE_ERROR, POST_ELECTION_CREATE_PENDING, POST_ELECTION_CREATE_SUCCESS, POST_PARTYLIST_CREATE_ERROR, POST_PARTYLIST_CREATE_PENDING, POST_PARTYLIST_CREATE_SUCCESS, POST_USER_CREATE_ERROR, POST_USER_CREATE_PENDING, POST_USER_CREATE_SUCCESS, POST_VOTE_CREATE_ERROR, POST_VOTE_CREATE_PENDING, POST_VOTE_CREATE_SUCCESS } from "./action";

let initialState = {
    party: [],
    voter: [],
    election: [],
    connection: [],
    vote: [],
    isLoading: false,
    isError: null
}

// party
let adminReducer = (state = initialState, action) => {
    // console.log(action, "action from reducer");

    switch (action.type) {
        case (POST_CREATE_PARTY_PENDING, GET_PARTY_LIST_PENDING, DELETE_PARTY_PENDING): {
            return {
                ...state,
                isLoading: true,
            }
        }

        // post party
        case POST_CREATE_PARTY_SUCCESS: {
            return {
                isLoading: false,
                party: state.party.concat(action.payload),
            }
        }

        // get party
        case GET_PARTY_LIST_SUCCESS: {
            return {
                isLoading: false,
                party: action.payload.data,
            }
        }

        // delete party
        case DELETE_PARTY: {
            return {
                isLoading: false,
                party: state.party.filter((val) => val.id !== action.payload.id)
            }
        }
        case (POST_CREATE_PARTY_ERROR, GET_PARTY_LIST_ERROR, DELETE_PARTY_ERROR): {
            return {
                isLoading: false,
                isError: action.payload,
            }
        }

        default: {
            return {
                ...state,
            }
        }
    }
}


// voter
let voterReducer = (state = initialState, action) => {
    // console.log(action, "action from voter reducer");

    switch (action.type) {
        case (GET_USER_LIST_PENDING, POST_USER_CREATE_PENDING, DELETE_USER_PENDING): {
            return {
                ...state,
                isLoading: true,
            }
        }

        // get voter
        case GET_USER_LIST_SUCCESS: {
            return {
                isLoading: false,
                voter: action.payload.data,
            }
        }

        // post voter
        case POST_USER_CREATE_SUCCESS: {
            return {
                isLoading: false,
                voter: state.voter.concat(action.payload),
            }
        }

        // delete voter
        case DELETE_USER_SUCCESS: {
            return {
                isLoading: false,
                voter: state.voter.filter((val) => val.id !== action.payload.id)
            }
        }

        case (GET_USER_LIST_ERROR, POST_USER_CREATE_ERROR, DELETE_USER_ERROR): {
            return {
                isLoading: false,
                isError: action.payload,
            }
        }

        default: {
            return {
                ...state,
            }
        }
    }
}


// election
let electionReducer = (state = initialState, action) => {
    // console.log(action, "action from election reducer");

    switch (action.type) {
        case (GET_ELECTION_LIST_PENDING, POST_ELECTION_CREATE_PENDING, DELETE_ELECTION_PENDING): {
            return {
                ...state,
                isLoading: true
            }
        }

        // get election
        case GET_ELECTION_LIST_SUCCESS: {
            return {
                isLoading: false,
                election: action.payload.data,
            }
        }

        // post election
        case POST_ELECTION_CREATE_SUCCESS: {
            return {
                isLoading: false,
                election: state.election.concat(action.payload),

            }
        }

        // delete election
        case DELETE_ELECTION_SUCCESS: {
            return {
                isLoading: false,
                election: state.election.filter((val) => val.id !== action.payload.id)

            }
        }

        case (GET_ELECTION_LIST_ERROR, POST_ELECTION_CREATE_ERROR, DELETE_ELECTION_ERROR): {
            return {
                isLoading: false,
                isError: action.payload,
            }
        }

        default: {
            return {
                ...state,
            }
        }
    }
}


// connection
let connectionReducer = (state = initialState, action) => {
    // console.log(action, "action from connection reducer");

    switch (action.type) {
        case (POST_PARTYLIST_CREATE_PENDING, GET_PARTYLIST_LIST_PENDING, DELETE_PARTYLIST_PENDING): {
            return {
                ...state,
                isLoading: true,
            }
        }

        // post connection
        case POST_PARTYLIST_CREATE_SUCCESS: {
            return {
                isLoading: false,
                connection: state.connection.concat(action.payload),

            }
        }

        // get connection
        case GET_PARTYLIST_LIST_SUCCESS: {
            return {
                isLoading: false,
                connection: action.payload.data,
            }
        }

        //delete connection
        case DELETE_PARTYLIST_SUCCESS: {
            return {
                isLoading: false,
                connection: state.connection.filter((val) => val.id !== action.payload.id)

            }
        }

        case (POST_PARTYLIST_CREATE_ERROR, GET_PARTYLIST_LIST_ERROR, DELETE_PARTYLIST_ERROR): {
            return {
                isLoading: false,
                isError: action.payload,
            }
        }

        default: {
            return {
                ...state,
            }
        }
    }
}


// vote
let voteReducer = (state = initialState, action) => {
    console.log(action, "action from vote reducer");

    switch (action.type) {
        case (POST_VOTE_CREATE_PENDING, GET_VOTE_LIST_PENDING): {
            return {
                ...state,
                isLoading: true,
            }
        }

        // create vote
        case POST_VOTE_CREATE_SUCCESS: {
            return {
                isLoading: false,
                vote: state.vote.concat(action.payload),
            }
        }

        // get vote
        case GET_VOTE_LIST_SUCCESS: {
            return {
                isLoading: false,
                vote: action.payload.data,
            }
        }

        case (POST_VOTE_CREATE_ERROR, GET_VOTE_LIST_SUCCESS): {
            return {
                isLoading: false,
                isError: action.payload,
            }
        }

        default: {
            return {
                ...state,
            }
        }
    }


}

export { adminReducer, voterReducer, electionReducer, connectionReducer, voteReducer };