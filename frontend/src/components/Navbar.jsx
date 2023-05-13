import React, { useContext, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faUser } from '@fortawesome/free-solid-svg-icons'
import { UserContext } from '../context/UserContext';
import { Link, NavLink } from 'react-router-dom';
import axios from 'axios';
import { routes } from '../routes';

const Navbar = () => {
    var ctx = useContext(UserContext);
    const [navCollapsed, setNavCollapsed] = useState(false);

    const logout = async () => {
        const res = await axios({
            method: 'get',
            withCredentials: true,
            url: routes.logout,
        });
        ctx.setUser(null);
        console.log(res);
    }

    return (
        <nav className="navbar">

            <div className="expand">

                <h1 className='heading'>Action<span>Fi.</span></h1>

                <div className="options">
                    <p>About Us</p>
                    <p><Link to={'/admin'}>Admin</Link></p>
                    <p>Contact</p>
                </div>

                {!ctx.user ? (<div className="auth">
                    <Link to='/signup'><button>Sign Up</button></Link>
                    <Link to='/login'><button>Log In</button></Link>
                </div>) : (
                    <div className="auth">
                        <FontAwesomeIcon className='cart' icon={faCartShopping} />
                        <div className='profileBtn'>
                            <p className='profileText'>{ctx.user.name.split(' ')[0]}</p>
                            <FontAwesomeIcon className='profileIcon' icon={faUser} />
                        </div>
                        <button onClick={logout}>Log Out</button>
                    </div>
                )}
            </div>

            <div className="collapsed">
                <div className="options">
                    <p>about</p>
                    <p>products</p>
                    <p>contact</p>
                </div>
            </div>



        </nav>
    )
}

export default Navbar