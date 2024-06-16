import { GET_PARTY_LIST_ERROR, GET_PARTY_LIST_PENDING, GET_PARTY_LIST_SUCCESS, POST_CREATE_PARTY_ERROR, POST_CREATE_PARTY_PENDING, POST_CREATE_PARTY_SUCCESS } from "./action";

let initialState = {
    party: [],
    isLoading: false,
    isError: null
}

let adminReducer = (state = initialState, action) => {
    // console.log(action, "action from post-party reducer");

    switch (action.type) {
        case (POST_CREATE_PARTY_PENDING, GET_PARTY_LIST_PENDING): {
            return {
                ...state,
                isLoading: true,
            }
        }
        case POST_CREATE_PARTY_SUCCESS: {
            return {
                isLoading: false,
                party: state.party.concat(action.payload),
            }
        }
        case GET_PARTY_LIST_SUCCESS: {
            return {
                isLoading: false,
                party: action.data,
            }
        }
        case (POST_CREATE_PARTY_ERROR, GET_PARTY_LIST_ERROR): {
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
export default adminReducer