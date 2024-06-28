import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DELETE_USER_PENDING, POST_USER_CREATE_PENDING } from '../../../redux-saga/redux/action'

const Voter = () => {

  const [data, setdata] = useState({})

  let dispatch = useDispatch()

  // get data
  let voterData = useSelector((state) => state.voterReducer)

  // post voter
  let handle = (e) => {
    // console.log(e,"e from voter");
    setdata({ ...data, [e.target.name]: e.target.value })
  }

  let addVoter = () => {
    dispatch({ type: POST_USER_CREATE_PENDING, payload: data })
  }

  // delete 
  let deleteVoter = (id) => {
    console.log(id, "delete id from voter");

    dispatch({ type: DELETE_USER_PENDING, payload: id })
  }


  return (
    <>
      <div className='d-flex justify-content-end'>
        <button type="button" class="btn btn-outline-primary my-5" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">ADD VOTER LIST</button>
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">Create Voter List</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <form >
                  <label class="form-label fw-semibold">Voter Card No : </label>
                  <input type="text" style={{ width: "100%" }} placeholder='Ex. TESTCARD03' className='form-control text-center mb-3' name='cardNo' onChange={handle} />
                  <label class="form-label fw-semibold">Voter Name : </label>
                  <input type="text" style={{ width: "100%" }} className='form-control text-center mb-3' name='name' onChange={handle} />
                  <label class="form-label fw-semibold">Father Name  : </label>
                  <input type="text" style={{ width: "100%" }} className=' form-control text-center mb-3' name='fatherName' onChange={handle} />
                  <label class="form-label fw-semibold">Gender : </label>
                  <input type="text" style={{ width: "100%" }} placeholder='Male / Female / Other' className='form-control text-center mb-3' name='sex' onChange={handle} />
                  <label class="form-label fw-semibold">Date of Birth : </label>
                  <input type="date" style={{ width: "100%" }} className='form-control text-center mb-3' name='dob' onChange={handle} />
                  <label class="form-label fw-semibold">Address : </label>
                  <textarea type="text" style={{ width: "100%" }} className='form-control mb-3' name='address' onChange={handle} />
                  <label class="form-label fw-semibold">AssemblyNoandName : </label>
                  <input type="text" style={{ width: "100%" }} className='form-control text-center mb-3' name='assemblyNoandName' onChange={handle} />
                  <label class="form-label fw-semibold">PartNoandName : </label>
                  <input type="text" style={{ width: "100%" }} className='form-control text-center mb-3' name='partNoandName' onChange={handle} />
                  <label class="form-label fw-semibold">Password : </label>
                  <input type="text" style={{ width: "100%" }} className='form-control text-center mb-3' name='password' onChange={handle} />
                </form>
              </div>
              <div class="modal-footer">
                <button data-bs-dismiss="modal" className='btn btn-primary' onClick={addVoter}>ADD VOTER</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <table class="table text-center border" style={{ fontSize: "15px" }}>
        <thead>
          <tr>
            <th scope="col" className='text-light text-opacity-75 bg-primary fw-semibold'>No</th>
            <th scope="col" className='text-light text-opacity-75 bg-primary fw-semibold'>CARD NO.</th>
            <th scope="col" className='text-light text-opacity-75 bg-primary fw-semibold'>VOTER NAME</th>
            <th scope="col" className='text-light text-opacity-75 bg-primary fw-semibold'>FATHER NAME</th>
            <th scope="col" className='text-light text-opacity-75 bg-primary fw-semibold'>GENDER</th>
            <th scope="col" className='text-light text-opacity-75 bg-primary fw-semibold'>BIRTH DATE</th>
            <th scope="col" className='text-light text-opacity-75 bg-primary fw-semibold'>DELETE</th>
          </tr>
        </thead>
        <tbody>
          {
            voterData.voter?.map((val, index) => {
              return (
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>{val.cardNo}</td>
                  <td>{val.name}</td>
                  <td>{val.fatherName}</td>
                  <td>{val.sex}</td>
                  <td>{val.dob}</td>
                  <td><i class="fa-regular fa-trash-can" onClick={() => deleteVoter(val._id)}></i></td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </>
  )
}

export default Voter