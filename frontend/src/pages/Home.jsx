import React, { useContext, useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard';
import { Link, redirect,useNavigate } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from '../context/UserContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCar, faCartArrowDown, faCartFlatbed, faCartPlus, faCartShopping, faUser } from '@fortawesome/free-solid-svg-icons'
import { routes } from '../routes';

const Home = () => {

    var ctx = useContext(UserContext);
    
    const [products,setProducts ] = useState([]);

    var cards = [
        {
            name: "Model 1",
            desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, quam?",
            price: 299
        },
        {
            name: "Model 2",
            desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, quam?",
            price: 349
        },
        {
            name: "Model 3",
            desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, quam?",
            price: 299
        },
        {
            name: "Model 4",
            desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, quam?",
            price: 325
        },
        {
            name: "Model 5",
            desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, quam?",
            price: 299
        },

    ];

    var navigate = useNavigate();


    useEffect(()=>{
        axios.get(routes.getProducts).then(prod => setProducts(prod.data));
    },[])

    const logout = async () => {
        const res = await axios({
            method: 'get',
            withCredentials:true,
            url: routes.logout,
        });
        ctx.setUser(null);
        console.log(res);
    }

    useEffect(() => {

        axios.get(routes.getUser, { withCredentials: true }).then(
            res => {
                if (res.data.loggedin) ctx.setUser(res.data.user);
                console.log(res.data);
            }
        ).catch(err => console.error(err));
    }, [])

    const [navCollapsed, setNavCollapsed] = useState(false);

    return (
        <div className='home'>

            <nav className="navbar">

                <div className="expand">

                    <h1>ActionFi</h1>

                    <div className="options">
                        <p>about</p>
                        <p>products</p>
                        <p>contact</p>
                    </div>

                    {!ctx.user ? (<div className="auth">
                        <Link to='/signup'><button>Sign Up</button></Link>
                        <Link to='/login'><button>Log In</button></Link>
                    </div>) : (
                        <div className="auth">
                            <FontAwesomeIcon className='cart' icon={faCartShopping} />
                            <div className='profileBtn'>{ctx.user.name.split(' ')[0]}
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
            <section className='hero'>

                <h1>Get Your Action Fix with <span>ActionFi</span>!</h1>
                <p>Unleash Your Inner Hero with Our Collection of Action Figures</p>
                <button>Explore More</button>
            </section>

            <section className='products'>
                <h1>All Products</h1>
                <div className="cardContainer">
                    {products.map((item, idx) => (<ProductCard info={item} key={idx} />))}
                </div>
            </section>

        </div>
    )
}

export default Home