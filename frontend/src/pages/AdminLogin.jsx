import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../context/UserContext'
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  
  const [form,setForm] =  useState({userame:"", password:""})
  var ctx = useContext(UserContext);
  var navigate = useNavigate();

  useEffect(()=>{
    if(form.userame == "reigns" && form.password == "reigns")
    {
      ctx.setAdmin(true);
      navigate('/admin');
    }
  },[form])
  
  return (
    <div className='AdminLogin'>


      <div className="container">
        <h1>ADMIN</h1>
        <div className="cont">
          <label htmlFor="">username</label>
          <input type="text" value={form.userame} onChange={e => setForm(prev => ({...prev,userame:e.target.value}) )}/>
        </div>

        <div className="cont">
          <label htmlFor="">password</label>
          <input type="password"  value={form.password} onChange={e => setForm(prev => ({...prev,password:e.target.value}) )}/>
        </div>
      </div>

    </div>
  )
}

export default AdminLogin