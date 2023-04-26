import React from 'react'

const ProductCard = ({info}) => {
  return (
    <div className='ProductCard'>
        <h3>{info.name}</h3>
        <p>{info.desc}</p>

        <div className="btnGroup">
        <button>Add To Cart</button>
        <button>Buy rs. {info.price}</button>
        </div>
    </div>
  )
}

export default ProductCard