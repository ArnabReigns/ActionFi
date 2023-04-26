import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const Login = () => {
    
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    var navigate = useNavigate();
    
    const login = async () => {

        var res = await axios({
            method: 'post',
            url: '/login',
            withCredentials:true,
            data: {
                email: email,
                password: pass
            }
        });

        if(res.status === 200)
        {
            navigate('/');
        }

        console.log(res);
    }

    return (
        <div className='login'>
            <Link to={'/'}>
            <FontAwesomeIcon className='backBtn' icon={faArrowLeft} />
            </Link>

            <div className="container">
                <h1>Log In</h1>
                <div className="cont">
                    <label htmlFor="">email</label>
                    <input type="email" value={email} onChange={e=> setEmail(e.target.value)}/>
                </div>

                <div className="cont">
                    <label htmlFor="">password</label>
                    <input type="text" value={pass} onChange={e=> setPass(e.target.value)}/>
                </div>
                <button onClick={login}>Log In</button>
            </div>
            <p>Don't have an account? <Link to='/signup'>Sign Up</Link></p>
        </div>
    )
}

export default Login