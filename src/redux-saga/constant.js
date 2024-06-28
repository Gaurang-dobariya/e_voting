export let BASE_URL = "http://13.127.211.205:8000/v1/"

// admin
export let POST_ADMIN = "admin/create"
export let LOGIN_ADMIN = "login/admin"

// Voter
export let POST_USER_CREATE = "user/create"
export let GET_USER_LIST = "user/list"
export let GET_FIND_USER = "user/finduser/" //+id
export let DELETE_USER = "user/delete/" //+id

// party
export let POST_CREATE_PARTY = "party/create_party"
export let GET_PARTY_LIST = "party/list"
export let GET_FIND_PARTY = "party/findId/" //+id
export let DELETE_PARTY = "party/delete/" //+id

// election
export let POST_ELECTION_CREATE = "election/create"
export let GET_ELECTION_LIST = "election/list"
export let GET_FIND_ELECTION = "election/findId/" //+id
export let DELETE_ELECTION = "election/delete/" //+id

// party connection
export let POST_PARTYLIST_CREATE = "partylist/create"
export let GET_PARTYLIST_LIST = "partylist/list"
export let GET_FIND_PARTYLIST = "partylist/findId/" //+id
export let DELETE_PARTYLIST = "partylist/delete/" //+id

// vote
export let POST_VOTE_CREATE = "vote/create"
export let GET_VOTE_LIST = "vote/list"
export let GET_FIND_VOTE = "vote/findId/" //+id
export let DELETE_VOTE = "vote/delete/" //+id

// user
export let LOGIN_USER = "login/user"

// vote count
export let GET_COUNT = "total/count"