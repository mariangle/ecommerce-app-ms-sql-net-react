import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { icons } from '../../assets/icons/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useProduct } from '../../utils/hooks/useProduct';

function ProductCard() {
  const { products, fetchProducts } = useProduct();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts])

return (
  <>
    {products.map((product, index) => 
      <div className='product-card' key={index}>
      <Link to={`/${product.productID}`}>
        <div className='product-img'>
          <img src={product.imageURL} alt="" />
          <FontAwesomeIcon icon={icons.heart}></FontAwesomeIcon>
        </div>
        <div className='product-info'>
          <p>{product.brand}</p>
          <h3>{product.name}</h3>
          <p> getproductpricewithproductid* kr</p>
        </div>
      </Link>
    </div>
    )}
  </>
);}

export default ProductCard;