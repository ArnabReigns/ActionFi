import React, { useContext, useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard';
import { Link, redirect,useNavigate } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from '../context/UserContext';

import { routes } from '../routes';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ProductsPage from './ProductsPage';

const Home = () => {

    var ctx = useContext(UserContext);

    useEffect(() => {

        axios.get(routes.getUser, { withCredentials: true }).then(
            res => {
                if (res.data.loggedin) ctx.setUser(res.data.user);
                console.log(res.data);
            }
        ).catch(err => console.error(err));
    }, [])


    return (
        <div className='home'>

            <Navbar/>
            <Hero/>
            <ProductsPage/>
            
        </div>
    )
}

export default Home