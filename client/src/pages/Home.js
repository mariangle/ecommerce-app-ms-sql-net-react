import React from 'react'
import Product from "../components/Product.js"
import { generateProductData } from '../productData.js'

const data = generateProductData();

export default function Home() {
  return (
    <div>
      <div>Home</div>
      {data.map((product) => (
          <Product
          key={product.id}
          name={product.name}
          description={product.description}
          price={product.price}
          images={product.images}
          />      
      ))}    
    </div>
  )
}
