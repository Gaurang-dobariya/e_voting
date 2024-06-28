import React, { useEffect, useRef } from 'react'
import Sidebar from '../sidebar/Sidebar'
import { useDispatch, useSelector } from 'react-redux'
import { DELETE_PARTY_PENDING, GET_PARTY_LIST_PENDING, POST_CREATE_PARTY_PENDING } from '../../../redux-saga/redux/action'

const Party = () => {

  let dispatch = useDispatch()
  let party_name = useRef()
  let party_logo = useRef()
  let short_code = useRef()

  // post data
  function submit() {
    let data = {
      party_name: party_name.current.value,
      party_logo: party_logo.current.files[0],
      short_code: short_code.current.value,
    }

    // console.log(data);

    let formdata = new FormData()

    formdata.append("party_name", data.party_name)
    formdata.append("party_logo", data.party_logo)
    formdata.append("short_code", data.short_code)

    dispatch({ type: POST_CREATE_PARTY_PENDING, payload: formdata })
  }

  // fetch data
  let partyData = useSelector((state) => state.adminReducer)

  // console.log(partyData, "from party data");

  // delete
  let deleteParty = (id) => {
    // console.log(id, "delete id from party");

    dispatch({ type: DELETE_PARTY_PENDING, payload: id })
  }

  return (
    <>
      <div className='d-flex justify-content-end'>
        <button type="button" class="btn btn-outline-primary my-5" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">ADD PARTY LIST</button>
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">Create Party List</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <label class="form-label fw-semibold">Party-Name : </label>
                <input type="text" ref={party_name} style={{ width: "100%" }} placeholder='Enter Party Name' className='form-control text-center mb-3' />
                <label class="form-label fw-semibold">Party-Logo : </label>
                <div class="input-group mb-3">
                  <input type="file" ref={party_logo} class="form-control" id="inputGroupFile02" />
                </div>
                <label class="form-label fw-semibold">Short-Code : </label>
                <input type="text" ref={short_code} placeholder='Enter Party Short code' className='form-control text-center' style={{ width: "100%" }} /><br /><br />
              </div>
              <div class="modal-footer">
                <button data-bs-dismiss="modal" className='btn btn-primary' onClick={submit}>ADD PARTY</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <table class="table text-center border">
        <thead>
          <tr>
            <th scope="col" className='text-light text-opacity-75 bg-primary fw-semibold'>No</th>
            <th scope="col" className='text-light text-opacity-75 bg-primary fw-semibold'>PARTY LOGO</th>
            <th scope="col" className='text-light text-opacity-75 bg-primary fw-semibold'>PARTY NAME</th>
            <th scope="col" className='text-light text-opacity-75 bg-primary fw-semibold'>SHORT CODE</th>
            <th scope="col" className='text-light text-opacity-75 bg-primary fw-semibold'>DELETE</th>
          </tr>
        </thead>
        <tbody>
          {
            partyData.party?.map((val, index) => {
              return (
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td><img src={val.party_logo} alt="" width={50} height={50} /></td>
                  <td>{val.party_name}</td>
                  <td>{val.short_code}</td>
                  <td><i class="fa-regular fa-trash-can" onClick={() => deleteParty(val._id)}></i></td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </>
  )
}

export default Party