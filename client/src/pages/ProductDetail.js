import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icons } from '../assets/icons/icons';

import { addToCart } from '../store/reducers/cartSlice.js';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../store/reducers/productSlice.js';
import { getProductSizesByProductId } from '../utils/api/productSizeApi.js';

function ProductDetail() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { products } = useSelector((state) => state.product);
  const product = products.find((product) => product.productID === Number(id));
  const [availableSizes, setAvailableSizes] = useState([]);
  const [selectedSize, setSelectedSize] = useState(null);
  const [defaultPrice, setDefaultPrice] = useState(null);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    const fetchData = async () => {
      if (product) {
        const productSizes = await getProductSizesByProductId(product.productID);
        setAvailableSizes(productSizes);

        const minPrice = Math.min(...productSizes.map((size) => size.price));
        setDefaultPrice(minPrice);

        if (productSizes.length > 0) {
          setSelectedSize(productSizes[0]);
        }
      }
    };
    fetchData();
  }, [product]);

  function handleAddToCart() {
    dispatch(addToCart({ product: product, size: selectedSize.size, price: selectedSize.price }));
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
              <button onClick={handleAddToCart}>Add to Basket</button>
              <button className='second-button'><span>Wishlist</span><FontAwesomeIcon icon={icons.heart} /></button>
            </div>
            <p>{product.description}</p>
          </div>
        </div>
      )}
    </>
  );
}

export default ProductDetail;