import React, { useEffect, useRef } from 'react'
import Sidebar from '../sidebar/Sidebar'
import { useDispatch, useSelector } from 'react-redux'
import { GET_PARTY_LIST_PENDING, POST_CREATE_PARTY_PENDING } from '../../../redux-saga/redux/action'

const Party = () => {

  let dispatch = useDispatch()
  let party_name = useRef()
  let party_logo = useRef()
  let short_code = useRef()

  function submit() {
    let data = {
      party_name: party_name.current.value,
      party_logo: party_logo.current.files[0],
      short_code: short_code.current.value,
    }

    console.log(data);

    let formdata = new FormData()

    formdata.append("party_name", data.party_name)
    formdata.append("party_logo", data.party_logo)
    formdata.append("short_code", data.short_code)

    dispatch({ type: POST_CREATE_PARTY_PENDING, payload: formdata })
  }

  let partydata = useSelector((state) => state.adminReducer)

  useEffect(() => {
    dispatch({ type: GET_PARTY_LIST_PENDING })
  }, [])

  return (
    <>
      <div className="row">
        <div className="col-2">
          <Sidebar />
        </div>
        <div className="col-10">
          <input type="text" ref={party_name} />
          <input type="file" ref={party_logo} />
          <input type="text" ref={short_code} />
          <button onClick={submit}>submit</button>

          <table class="table table-striped">
            <thead>
              <tr>
                <th scope="col">No</th>
                <th scope="col">PARTY LOGO</th>
                <th scope="col">PARTY NAME</th>
                <th scope="col">SHORT CODE</th>
                <th scope="col">DELETE</th>
              </tr>
            </thead>
            <tbody>
              {
                partydata
              }
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default Party