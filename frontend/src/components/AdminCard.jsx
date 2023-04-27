import axios from 'axios';
import React from 'react'
import { Link } from 'react-router-dom'
import { routes } from '../routes';

const AdminCard = ({info}) => {

  const deleteProduct = async (id) => {
    console.log(id);
    var res = await axios.delete(routes.deleteProduct+id);
    console.log(res);
  }

  return (
    <div className='AdminCard'>
        <h3>{info.name}</h3>
        <img src={info.imgUrl} alt="" />
        <p>{info.desc}</p>
        <p>price: {info.price} rs.</p>
        <p>category: {info.category}</p>
        <div className="btnGroup">
        <Link to = {'./product/edit/'+info._id } >Edit</Link>
        <button onClick={e=>deleteProduct(info._id)}> Delete</button>
        </div>
    </div>
  )
}

export default AdminCard