import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../context/UserContext'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { routes } from '../routes';

const AdminLogin = () => {
  
  const [form,setForm] =  useState({userame:"", password:""})
  var ctx = useContext(UserContext);
  var navigate = useNavigate();

  useEffect(()=>{
    if(form.userame != "" && form.password.length > 0)
    {

      axios.post(routes.getAdmin, {username: form.userame}).then(user =>{
        if(user == null) return;

        console.log(user.data.password == form.password);

        if(user.data.password == form.password){
          ctx.setAdmin(true);
          ctx.setAdminUser(user.data);
          navigate('/admin');
        }
      });
      
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