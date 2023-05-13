import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { routes } from '../routes'

const AddProduct = (props) => {

    var navigate = useNavigate();

    function refreshPage() {
        window.location.reload(false);
      }

    const [product, setProduct] = useState({
        name: "",
        desc: "",
        price: 0,
        category: "",
        imgUrl: ""
    })

    const addProduct = async () => {


        if (product.name.length && product.category.length && product.imgUrl.length && product.price != 0 && product.desc) {


            var res = await axios.post(routes.addProduct,
                product,
                {
                    withCredentials: true
                }
            );

            if (res.status == 200) 
            {   
                props.close();
                console.log(res);
                props.getProducts();
            }
        }
        else 
        {
            console.log('fillup ')
        }
    }

    const handleChange = (e) => {

        setProduct(prev => ({ ...prev, [e.target.name]: e.target.value }));
    }

    return (
        <div className='AddProduct'>

            <form className="container" onSubmit={e => e.preventDefault()} >

                <h3>New Product</h3>

                <div className="inp">
                    <label htmlFor="">name</label>
                    <input type="text" required name='name' value={product.name} onChange={e => handleChange(e)} />
                </div>
                <div className="inp">
                    <label htmlFor="">desc</label>
                    <input type="text" required name='desc' value={product.desc} onChange={e => handleChange(e)} />
                </div>
                <div className="inp">
                    <label htmlFor="">imgUrl</label>
                    <input type="text" required name='imgUrl' value={product.imgUrl} onChange={e => handleChange(e)} />
                </div>
                <div className="inp">
                    <label htmlFor="">price</label>
                    <input type="text" required name='price' value={product.price} onChange={e => handleChange(e)} />
                </div>
                <div className="inp">
                    <label htmlFor="">category</label>
                    <input type="text" required name='category' value={product.category} onChange={e => handleChange(e)} />
                </div>

                <div className="btnGroup">
                    <button onClick={e => props.close()}>cancel</button>
                    <button onClick={addProduct}>Save</button>
                </div>
            </form>
        </div>
    )
}

export default AddProduct