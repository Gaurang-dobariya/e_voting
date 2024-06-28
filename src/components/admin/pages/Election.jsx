import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DELETE_ELECTION_PENDING, POST_ELECTION_CREATE_PENDING } from '../../../redux-saga/redux/action'

const Election = () => {

  let dispatch = useDispatch()
  let election_name = useRef()
  let date = useRef()

  function addElection() {
    let data = {
      election_name: election_name.current.value,
      date: date.current.value
    }

    console.log(data);

    dispatch({ type: POST_ELECTION_CREATE_PENDING, payload: data })
  }

  // fetch data
  let electionData = useSelector((state) => state.electionReducer)

  // delete
  let deleteElection = (id) => {
    // console.log(id, "delete id from election");

    dispatch({ type: DELETE_ELECTION_PENDING, payload: id })
  }

  return (
    <>
      <div className='d-flex justify-content-end'>
        <button type="button" class="btn btn-outline-primary my-5" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">CREATE ELECTION</button>
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">Create Election List</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <form >
                  <label class="form-label fw-semibold">Election Name : </label>
                  <input type="text" style={{ width: "100%" }} className='form-control text-center mb-3' ref={election_name} />
                  <label class="form-label fw-semibold">Election Date : </label>
                  <input type="date" style={{ width: "100%" }} className='form-control text-center mb-3' ref={date} />
                </form>
              </div>
              <div class="modal-footer">
                <button data-bs-dismiss="modal" className='btn btn-primary' onClick={addElection}>ADD ELECTION</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <table class="table text-center border">
        <thead>
          <tr>
            <th scope="col" className='text-light text-opacity-75 bg-primary fw-semibold'>No</th>
            <th scope="col" className='text-light text-opacity-75 bg-primary fw-semibold'>ELECTION NAME</th>
            <th scope="col" className='text-light text-opacity-75 bg-primary fw-semibold'>DATE</th>
            <th scope="col" className='text-light text-opacity-75 bg-primary fw-semibold'>DELETE</th>
          </tr>
        </thead>
        <tbody>
          {
            electionData.election?.map((val, index) => {
              return (
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>{val.election_name}</td>
                  <td>{val.date}</td>
                  <td><i class="fa-regular fa-trash-can" onClick={() => deleteElection(val._id)}></i></td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </>
  )
}

export default Election