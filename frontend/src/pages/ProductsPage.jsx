import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'
import axios from 'axios';
import { routes } from '../routes';

const ProductsPage = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get(routes.getProducts).then(prod => {
            setProducts(prod.data);
            console.log(prod);
        });
    }, [])

    return (
        <div className='ProductsPage'>
            <div className="heading">

                <h1>ようこそ先生</h1>
                <div className="bar"></div>
            </div>

            <div className="cardContainer">
                {products.map((p, idx) => (
                    <ProductCard info={p} key={idx} />
                ))}
            </div>
        </div>
    )
}

export default ProductsPage