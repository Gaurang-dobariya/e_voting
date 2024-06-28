import React from 'react'
import { useSelector } from 'react-redux'

const Dashboard = () => {

  // fetch data
  let partyData = useSelector((state) => state.adminReducer)
  let voterData = useSelector((state) => state.voterReducer)
  let voteData = useSelector((state) => state.voteReducer)
  console.log(voteData);


  return (
    <>
      <div className='my-5 d-flex justify-content-between'>
        <div className="count-box text-center border border-1">
          <h4>{partyData.party.length}</h4>
          <p>Total Party</p>
        </div>
        <div className="count-box text-center border border-1">
          <h4>{voterData.voter.length}</h4>
          <p>Total Voter</p>
        </div>
        <div className="count-box text-center border border-1">
          <h4>10</h4>
          <p>Total Vote</p>
        </div>
      </div>
      <table class="table text-center border">
        <thead>
          <tr>
            <th scope="col" className='text-light text-opacity-75 bg-primary fw-semibold'>No</th>
            <th scope="col" className='text-light text-opacity-75 bg-primary fw-semibold'>PARTY LOGO</th>
            <th scope="col" className='text-light text-opacity-75 bg-primary fw-semibold'>PARTY NAME</th>
            <th scope="col" className='text-light text-opacity-75 bg-primary fw-semibold'>SHORT CODE</th>
            <th scope="col" className='text-light text-opacity-75 bg-primary fw-semibold'>VOTING NO.</th>
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
                  <td>{index + 5}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </>
  )
}

export default Dashboard