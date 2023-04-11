import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icons } from '../assets/icons/icons';

import { useDispatch } from 'react-redux';
import { fetchProducts } from '../store/actions/productActions';
import sizeApi from '../utils/api/sizeApi.js';

import { useCart } from "../utils/hooks/useCart";
import { useProduct } from '../utils/hooks/useProduct';


function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const { products } = useProduct();
  const dispatch = useDispatch();

  const [availableSizes, setAvailableSizes] = useState([]);
  const [selectedSize, setSelectedSize] = useState(null);
  const [defaultPrice, setDefaultPrice] = useState(null);

  const product = products.find((product) => product.productID === Number(id));
  
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    const fetchData = async () => {
      const productSizes = await sizeApi.getProductSizesByProductId(product.productID);
      setAvailableSizes(productSizes);
  
      const minPrice = Math.min(...productSizes.map((size) => size.price));
      setDefaultPrice(minPrice);
  
      setSelectedSize(productSizes[0]);
    };
    if (product) {
      fetchData();
    }
  }, [product]);

  function handleAddToCart() {
    addToCart({ product: product, size: selectedSize.size, price: selectedSize.price });
  }

  return (
    <>
      {product && (
        <div className='flex container'>
          <div className='product-detail-img flex-2'>
            <img src={product.imageURL} alt="" />
          </div>
          <div className='product-detail-about flex-1'>
            <h2>{product.brand}</h2>
            <h1>{product.brand} {product.name}</h1>
            <p>
              {selectedSize ? selectedSize.price : defaultPrice} kr.
            </p>
            <select value={JSON.stringify(selectedSize)} onChange={(e) => setSelectedSize(JSON.parse(e.target.value))}>
              {availableSizes.sort((a,b) => a.size - b.size).map((productSize, index) => (
                <option key={index} value={JSON.stringify(productSize)}>
                  EU {productSize.size} - {productSize.price} kr {productSize.quantity <= 3 ? `(only ${productSize.quantity} left)`  : "" }
                </option>
              ))}
            </select>
            <div className='divider'>
              <button onClick={handleAddToCart}>ADD TO BASKET</button>
              <button className='second-button'><span>WISHLIST</span><FontAwesomeIcon icon={icons.heart} /></button>
            </div>
            <p>{product.description}</p>
          </div>
        </div>
      )}
    </>
  );
}

export default ProductDetail;