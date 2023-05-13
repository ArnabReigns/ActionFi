import React, { useEffect, useState } from 'react'
import AddProduct from './AddProduct'
import AdminCard from './AdminCard'
import { routes } from '../routes';
import axios from 'axios';

const AdminProductsPage = (props) => {

    const [products, setProducts] = useState([]);
  const [addNewOpen, setAddNewOpen] = useState(false);

  const getProducts = () => {
    axios.get(routes.getProducts, { withCredentials: true }).then(
      res => {
        setProducts(res.data);
        console.log(res.data);
      }
    ).catch(err => console.error(err));
  }

  useEffect(() => {
    getProducts();
  }, [])


  const close = () => {
    setAddNewOpen(false);
  };

    return (
        <div className={`adminProductPage ${props.active ? "active" : ''}`}>
            <button className='addnew' onClick={e => setAddNewOpen(true)}>Add New</button>

            <div className="cardContainer">

                {products.map((item, idx) => (<AdminCard info={item} key={idx} getProducts={getProducts} />))}

            </div>

            {addNewOpen && (<AddProduct close={close} getProducts={getProducts} />)}
        </div>
    )
}

export default AdminProductsPage