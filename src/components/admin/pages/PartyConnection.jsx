import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DELETE_PARTYLIST_PENDING, POST_PARTYLIST_CREATE_PENDING } from '../../../redux-saga/redux/action'

const PartyConnection = () => {

  let dispatch = useDispatch()

  let electionname = useRef()
  let partyname = useRef()

  let election = useSelector((state) => state.electionReducer)
  // console.log(election,"election connection");
 
  let party = useSelector((state) => state.adminReducer)
  // console.log(party,"party from connection");

  // post data
  let addConnection = () => {
    let data = {
      election: electionname.current.value,
      party: partyname.current.value,
    }

    console.log(data);

    dispatch({ type: POST_PARTYLIST_CREATE_PENDING, payload: data })

  }

  // fetch data
  let connectionData = useSelector((state) => state.connectionReducer)

  // delete
  let deleteConnection = (id) => {
    console.log(id, "id from connection");

    dispatch({ type: DELETE_PARTYLIST_PENDING, payload: id })

  }


  return (
    <>
      <div className="my-5 d-flex justify-content-between">
        <div className="col-8">
          <table class="table text-center border">
            <thead>
              <tr>
                <th scope="col" className='text-light text-opacity-75 bg-primary fw-semibold'>No</th>
                <th scope="col" className='text-light text-opacity-75 bg-primary fw-semibold'>PARTY LOGO</th>
                <th scope="col" className='text-light text-opacity-75 bg-primary fw-semibold'>PARTY NAME</th>
                <th scope="col" className='text-light text-opacity-75 bg-primary fw-semibold'>ELECTION NAME</th>
                <th scope="col" className='text-light text-opacity-75 bg-primary fw-semibold'>DELETE</th>
              </tr>
            </thead>
            <tbody>
              {
                connectionData.connection?.map((val, index) => {
                  return (
                    <tr>
                      <th scope="row">{index + 1}</th>
                      <td><img src={val.party?.party_logo} width={40} alt="" /></td>
                      <td>{val.party?.party_name}</td>
                      <td>{val.election?.election_name}</td>
                      <td><i class="fa-regular fa-trash-can" onClick={() => deleteConnection(val._id)}></i></td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
        <div className="col-4 border p-4" style={{ width: "320px", height: "267px" }}>
          <label className='mb-2'>Select Election Name : </label>
          <select className='mb-3' style={{ width: "100%" }} ref={electionname}>
            {
              election.election?.map((val, index) => {
                return (
                  <option key={index} value={val._id}>{val.election_name}</option>
                )
              })
            }
          </select>
          <label className='mb-2'>Select Party Name : </label>
          <select className='mb-3' style={{ width: "100%" }} ref={partyname}>
            {
              party.party?.map((val, index) => {
                return (
                  <option key={index} value={val._id}>{val.party_name}</option>
                )
              })
            }
          </select>
          <hr />
          <button className='btn btn-outline-primary mt-1' style={{width:"100%"}}  onClick={addConnection}>Create Connection</button>
        </div>
      </div>
    </>
  )
}

export default PartyConnection