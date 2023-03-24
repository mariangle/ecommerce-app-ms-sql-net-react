import React from 'react';
import { generateProductData } from '../productData.js'

const data = generateProductData();

function ProductDetail() {
    const { name, description, price, imageUrls } = props;

    return (
      <div>
        <h2>{name}</h2>
        <p>{description}</p>
        <p>Price: ${price.toFixed(2)}</p>
        <ul>
          {data.map((imageUrl, index) => (
            <li key={index}>
              <img src={imageUrl} alt={name} />
            </li>
          ))}
        </ul>
      </div>
    );
}

export default ProductDetail