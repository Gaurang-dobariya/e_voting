import React from 'react'
import Sidebar from '../sidebar/Sidebar'

const Election = () => {
  return (
    <>
      <div className="row">
        <div className="col-2">
          <Sidebar />
        </div>
      <div className="col-10"><div>Election</div></div>
      </div>
    </>
  )
}

export default Election