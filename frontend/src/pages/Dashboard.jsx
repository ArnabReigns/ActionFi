import React, { useContext, useEffect, useState } from 'react'
import { routes } from '../routes';
import axios from 'axios';
import AddProduct from '../components/AddProduct';
import AdminCard from '../components/AdminCard';
import AdminSidePane from '../components/AdminSidePanel';
import AdminProductsPage from '../components/AdminProductsPage';
import AdminUserPage from '../components/AdminUserPage';
import { UserContext } from '../context/UserContext';

const Dashboard = () => {

  const ctx = useContext(UserContext);


  return (
    <div className='dashboard'>
      <AdminSidePane />

      <div className="AdminPages">
        <p className='username'>
          Welcome, {ctx.adminUser.username} >
          
          {ctx.adminUser.roles.map((role) => (
            <span>{role}</span>
          ))}
          
        </p>


        <AdminUserPage active={ctx.adminActivePage == 0} />
        <AdminProductsPage active={ctx.adminActivePage == 1} />
      </div>
    </div>
  )
}

export default Dashboard