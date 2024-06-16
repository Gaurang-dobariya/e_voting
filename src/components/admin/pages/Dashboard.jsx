import React from 'react'
import Sidebar from '../sidebar/Sidebar'

const Dashboard = () => {
  return (
    <>
      <div className="row">
        <div className="col-2">
          <Sidebar />
        </div>
      <div className="col-10"><div>Dashboard</div></div>
      </div>
    </>
  )
}

export default Dashboard