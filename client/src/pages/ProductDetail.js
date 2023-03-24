import React, { useState, useEffect } from 'react';
import { generateProductData } from '../productData.js';
import { useParams } from 'react-router-dom';

function ProductDetail() {
  const { id } = useParams();
  const [products, setProducts] = useState(generateProductData);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const currentProduct = products.find((product) => product.id === Number(id));
    setProduct(currentProduct);
  }, [products, id]);

  return (
    <>
      {product && (
        <div>
          <p>productdetail</p>
          <h2>{product.name}</h2>
          <h3>hej</h3>
          <p>{product.description}</p>
        </div>
      )}
    </>
  );
}

export default ProductDetail