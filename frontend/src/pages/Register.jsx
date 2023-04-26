import React, { useContext, useEffect, useState } from 'react'
import validator from "email-validator";
import { Link, useNavigate } from 'react-router-dom'
import axios, { HttpStatusCode } from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {

  var navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const namet = (msg) => toast.warn(msg);
  const toastError = (msg) => toast.error(msg);

  const signup = async () => {

    if (name == "") return namet("name is required");
    if (email == "") return namet("email is required");
    if (!validator.validate(email)) return namet("Enter a valid email address");
    if (pass == "") return namet("password is required");
    if (pass.length < 6) return namet("password must be at least 6 characters");
    
    var res = await toast.promise(
      axios({
        method: 'post',
        url: '/signup',
        data: {
          name: name,
          email: email,
          password: pass
        },

      }),
      {
        pending: 'Signin Up...',
        success: 'Finished',
        error: 'Signin Failed! please try again'
      });

    
    console.log(res);

    if (res.status === 200) {
      navigate('/login');
    }


  }

  return (
    <div className="Register">
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="light"
      />
      <Link to={'/'}>
        {/* <FaArrowLeft className='backBtn' /> */} back
      </Link>
      <div className="container">
        <h1>Sign Up</h1>
        <div className="cont">
          <label htmlFor="">Name</label>
          <input type="text" required value={name} onChange={e => { setName(e.target.value) }} />
        </div>
        <div className="cont">
          <label htmlFor="">Email</label>
          <input type="email" required value={email} onChange={e => { setEmail(e.target.value) }} />
        </div>
        <div className="cont">
          <label htmlFor="">password</label>
          <input type="text" required value={pass} onChange={e => { setPass(e.target.value) }} />
          {pass.length > 0 && (<span> {pass.length < 6 ? "too short!" : "perfect"}</span>)}
        </div>
        <button onClick={signup}>Register</button>
      </div>
      <p>Already have an account? <Link to='/login'>Log In</Link></p>
    </div>
  )
}

export default Register