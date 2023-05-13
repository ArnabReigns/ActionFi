import axios from 'axios';
import React from 'react'
import { Link } from 'react-router-dom'
import { routes } from '../routes';

const AdminCard = ({info,getProducts}) => {

  const deleteProduct = async (e,id) => {
    e.target.disabled = true;
    var res = await axios.delete(routes.deleteProduct+id);
    console.log(res);
    getProducts();
  }

  return (
    <div className='AdminCard'>
        <h3>{info.name}</h3>
        <img src={info.imgUrl} alt="" />
        <p>{info.desc}</p>
        <p>price: ₹{info.price}</p>
        <p>category: {info.category}</p>
        <div className="btnGroup">
        <Link to = {'./product/edit/'+info._id } >Edit</Link>
        <button onClick={e=>deleteProduct(e,info._id)}> Delete</button>
        </div>
    </div>
  )
}

export default AdminCard