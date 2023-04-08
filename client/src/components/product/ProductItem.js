import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import productApi from '../../utils/api/productApi';
import { getProductSizesByProductId } from '../../utils/api/productSizeApi';
import { icons } from '../../assets/icons/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ProductCard() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const products = await productApi.getProducts();
        const productsWithSizes = await Promise.all(products.map(async (product) => {
          const productSizes = await getProductSizesByProductId(product.productID);
          const lowestPrice = Math.min(...productSizes.map((size) => size.price));
          return { ...product, lowestPrice, productSizes };
        }));
        setProducts(productsWithSizes);
      } catch (error) {
        console.error(error);
      }
    }
  
    fetchProducts();
  }, []);

  function renderProductCard(product, index) {
    const productSize = product.productSizes.find((ps) => ps.quantity > 0);
    if (!productSize) {
      return null;
    }
    const { price } = productSize;
    return (
      <div className='product-card' key={index}>
        <Link to={`/${product.productID}`}>
          <div className='product-img'>
            <img src={product.imageURL} alt="" />
            <FontAwesomeIcon icon={icons.heart}></FontAwesomeIcon>
          </div>
          <div className='product-info'>
            <p>{product.brand}</p>
            <h3>{product.name}</h3>
            <p>{price} kr</p>
          </div>
        </Link>
      </div>
    );
  }
  return <>{products.map(renderProductCard)}</>;
}


export default ProductCard;