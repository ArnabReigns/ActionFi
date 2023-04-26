import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { UserContext } from '../context/UserContext'



const Admin = () => {

    const ctx = useContext(UserContext);

    return (
        <>
            {ctx.isAdmin ? (<Outlet/>) : (<Navigate to='/adminLogin' />)}
        </>
  )
}

export default Admin