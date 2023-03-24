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
          style={product.style}
          brand={product.brand}
          color={product.color}
          material={product.material}
          gender={product.gender}
          price={product.price}
          images={product.images}
          />      
      ))}    
    </div>
  )
}
