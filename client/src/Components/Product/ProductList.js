import React from 'react'
import { useSelector } from 'react-redux'
import ProductCard from './ProductCard'
import { Link } from 'react-router-dom';


const ProductList = () => {
  const token=localStorage.getItem("token")
  const products=useSelector((state)=>state.productReducer.products)
  console.log(products)
  return (
    <div>
      {token ?<Link to="/Add">
      <button>Add Product</button>
      </Link> :null}
    <div style={{display:'flex',justifyContent:'space-around',flexWrap:'wrap'}}>
        {products.map(el=><ProductCard el={el} key={el._id}/>)}
    </div>
    </div>
  )
}

export default ProductList