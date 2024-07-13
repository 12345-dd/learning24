import React from 'react'
import { useSelector } from 'react-redux'

export const SubIndex = () => {
    const Product = useSelector((state)=>state.product.products);
    console.log("Product..",Product)
  return (
    <div>
        <h1>Sub Index</h1>
    </div>
  )
}
