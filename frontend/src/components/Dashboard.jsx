import React, { useEffect, useState } from 'react'
import { routes } from '../routes';
import axios from 'axios';
import AdminCard from './AdminCard';
import AddProduct from './AddProduct';

const Dashboard = () => {

  const [products, setProducts] = useState([]);
  const [addNewOpen, setAddNewOpen] = useState(false);

  useEffect(() => {
    axios.get(routes.getProducts, { withCredentials: true }).then(
      res => {
        setProducts(res.data);
        console.log(res.data);
      }
    ).catch(err => console.error(err));
  }, [])


  const close = () => {
    setAddNewOpen(false);
  };

  return (
    <div className='dashboard'>
      <button className='addnew' onClick={e=>setAddNewOpen(true)}>Add New</button>

      <div className="cardContainer">

        {products.map((item, idx) => (<AdminCard info={item} key={idx} />))}

      </div>

       { addNewOpen && (<AddProduct close = {close} />)}
    </div>
  )
}

export default Dashboard