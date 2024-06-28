import axios from "axios"
import { BASE_URL, DELETE_ELECTION, DELETE_PARTY, DELETE_PARTYLIST, DELETE_USER, GET_ELECTION_LIST, GET_PARTYLIST_LIST, GET_PARTY_LIST, GET_USER_LIST, GET_VOTE_LIST, POST_CREATE_PARTY, POST_ELECTION_CREATE, POST_PARTYLIST_CREATE, POST_USER_CREATE, POST_VOTE_CREATE } from "../constant"

// party
let post_party = async (action) => {
  // console.log(action, "action from post_party api")

  let { data, status } = await axios.post(BASE_URL + POST_CREATE_PARTY, action.payload)
  return { data, status }
}

let get_party = async (action) => {
  // console.log(action, "action from get_party api")

  let { data, status } = await axios.get(BASE_URL + GET_PARTY_LIST)
  return { data, status }
}

let delete_party = async (action) => {
  // console.log(action, "action from delete_party api")

  let { data, status } = await axios.delete(BASE_URL + DELETE_PARTY + action.payload)
  return { data, status }
}


// voter
let get_voter = async (action) => {
  // console.log(action, "action from get_voter api")

  let { data, status } = await axios.get(BASE_URL + GET_USER_LIST)
  return { data, status }
}

let post_voter = async (action) => {
  // console.log(action, "action from post_voter api")

  let { data, status } = await axios.post(BASE_URL + POST_USER_CREATE, action.payload)
  return { data, status }
}

let delete_voter = async (action) => {
  // console.log(action, "action from delete_voter api")

  let { data, status } = await axios.delete(BASE_URL + DELETE_USER + action.payload)
  return { data, status }
}


// election
let get_election = async (action) => {
  // console.log(action, "action from get_election api")

  let { data, status } = await axios.get(BASE_URL + GET_ELECTION_LIST)
  return { data, status }
}

let post_election = async (action) => {
  // console.log(action, "action from post_election api")

  let { data, status } = await axios.post(BASE_URL + POST_ELECTION_CREATE, action.payload)
  return { data, status }
}

let delete_election = async (action) => {
  // console.log(action, "action from delete_election api")

  let { data, status } = await axios.delete(BASE_URL + DELETE_ELECTION + action.payload)
  return { data, status }
}


// connection
let post_connection = async (action) => {
  // console.log(action, "action from post_connection api")

  let { data, status } = await axios.post(BASE_URL + POST_PARTYLIST_CREATE, action.payload)
  return { data, status }
}

let get_connection = async (action) => {
  // console.log(action, "action from get_connection api")

  let { data, status } = await axios.get(BASE_URL + GET_PARTYLIST_LIST)
  return { data, status }
}

let delete_connection = async (action) => {
  // console.log(action, "action from delete_connection api")

  let { data, status } = await axios.delete(BASE_URL + DELETE_PARTYLIST + action.payload)
  return { data, status }
}


// vote
let post_vote = async (action) => {
  // console.log(action, "action from post_vote api")

  let { data, status } = await axios.post(BASE_URL + POST_VOTE_CREATE, action.payload)
  return { data, status }
}

let get_vote = async (action) => {
  console.log(action, "action from get_vote api")

  let { data, status } = await axios.get(BASE_URL + GET_VOTE_LIST)
  return { data, status }
}



export {
  post_party, get_party, delete_party, get_voter, post_voter, delete_voter,
  get_election, post_election, delete_election, post_connection, get_connection,
  delete_connection, post_vote, get_vote
}
