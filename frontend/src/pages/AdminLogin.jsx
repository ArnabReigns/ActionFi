import React from 'react'

const AdminLogin = () => {
  return (
    <div className='AdminLogin'>

      <div className="container">
        <h1>ADMIN</h1>
        <div className="cont">
          <label htmlFor="">username</label>
          <input type="text" />
        </div>

        <div className="cont">
          <label htmlFor="">password</label>
          <input type="text" />
        </div>
        <button>Proceed </button>
      </div>

    </div>
  )
}

export default AdminLogin