import axios from 'axios'
import React, { useState } from 'react'
import { routes } from '../routes'

const AddProduct = (props) => {

    const [product, setProduct] = useState({
        name: "",
        desc: "",
        price: 0,
        category: "",
        imgUrl: ""
    })

    const addProduct = async () => {
        var res = await axios.post(routes.addProduct,
            product,
            {
                withCredentials: true
            }
        );

        console.log(res);
    }

    const handleChange = (e) => {

        setProduct(prev => ({ ...prev, [e.target.name]: e.target.value }));
    }

    return (
        <div className='AddProduct'>

            <img src={product.imgUrl || null} alt="" />
            <form className="container" onSubmit={e => e.preventDefault()} >

                <h3>Add New</h3>

                <div className="inp">
                    <label htmlFor="">name</label>
                    <input type="text" name='name' value={product.name} onChange={e => handleChange(e)} />
                </div>
                <div className="inp">
                    <label htmlFor="">desc</label>
                    <input type="text" name='desc' value={product.desc} onChange={e => handleChange(e)} />
                </div>
                <div className="inp">
                    <label htmlFor="">imgUrl</label>
                    <input type="text" name='imgUrl' value={product.imgUrl} onChange={e => handleChange(e)} />
                </div>
                <div className="inp">
                    <label htmlFor="">price</label>
                    <input type="text" name='price' value={product.price} onChange={e => handleChange(e)} />
                </div>
                <div className="inp">
                    <label htmlFor="">category</label>
                    <input type="text" name='category' value={product.category} onChange={e => handleChange(e)} />
                </div>

                <div className="btnGroup">
                    <button onClick={e=>props.close()}>cancel</button>
                    <button onClick={addProduct}>Save</button>
                </div>
            </form>
        </div>
    )
}

export default AddProduct