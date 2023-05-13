import React from 'react'

const ProductCard = ({info}) => {
  return (
    <div className='ProductCard'>
        
        <div className="content">
        <h3>{info.name}</h3>
        <img src={info.imgUrl} alt="" />
        <p>{info.desc}</p>
        </div>
        <div className="btnGroup">
        <button>Add To Cart</button>
        <button>Buy ₹{info.price}</button>
        </div>
    </div>
  )
}

export default ProductCard