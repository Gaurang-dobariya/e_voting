import axios from "axios"
import { BASE_URL, GET_PARTY_LIST, POST_CREATE_PARTY } from "../constant"

let post_party = async (action) => {
  // console.log(action, "action from post_party api")

  let { data, status } = await axios.post(BASE_URL + POST_CREATE_PARTY, action.payload)

  return { data, status }
}

let get_party = async (action) => {
  console.log(action, "action from get_party api")

  let { data, status } = await axios.get(BASE_URL + GET_PARTY_LIST)

  return { data, status }
}

export { post_party, get_party }
