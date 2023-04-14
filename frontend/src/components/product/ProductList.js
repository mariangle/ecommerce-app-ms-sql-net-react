import React, { useState, useEffect } from 'react';
import ProductCard from './ProductItem';
import { useProduct } from '../../utils/hooks/useProduct';
import { useSelector } from 'react-redux';
import { icons } from '../../assets/icons/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useToggle  from "../../utils/hooks/useUtil"

function ProductList() {
  const { toggle, isToggled } = useToggle();
  const { products, fetchProducts } = useProduct();
  const { minPrice: filterMinPrice, maxPrice: filterMaxPrice } = useSelector((state) => state.product.filter);

  const [minPrice, setMinPrice] = useState(filterMinPrice || '');
  const [maxPrice, setMaxPrice] = useState(filterMaxPrice || '');
  const [sortOrder, setSortOrder] = useState('asc');
  const [size, setSize] = useState('');

  useEffect(() => {
    fetchProducts();
  }, []);

  const filteredProducts = products.filter((product) => {
    const minPriceFilter = minPrice === '' || product.defaultPrice >= parseFloat(minPrice);
    const maxPriceFilter = maxPrice === '' || product.defaultPrice <= parseFloat(maxPrice);
    const sizeFilter = size === '' || product.sizes.map(ps => ps.size).includes(parseInt(size));  
    return minPriceFilter && maxPriceFilter && sizeFilter;
  }).sort((a, b) => {
    if (sortOrder === 'lowToHigh') {
      return a.defaultPrice - b.defaultPrice;
    } else if (sortOrder === 'highToLow') {
      return b.defaultPrice - a.defaultPrice;
    } else {
      return 0;
    }
  });

  return (
    <div className='shop'>
      <div className='filter-control'>
        <div className='filter-div toggle'>
          <a onClick={() => toggle()}><FontAwesomeIcon icon={icons.filter}/></a>
        </div>  
        { isToggled() && 
        <div className='filter-option'>
          <div className="filter-div">
            <label htmlFor="size">Size:</label>
              <select id="size" name="size" value={size} onChange={(event) => setSize(event.target.value)}>
              <option value="">All</option>
              {Array.from({ length: 16 }, (_, i) => i + 35).map(size => (
                <option key={size} value={size}>{size}</option>
              ))}
              </select>
        </div>
        <div className="filter-div filter-spec">
          <label htmlFor="size">Pris:</label>
              <input type="number" id="minPrice" placeholder="min. kr" name="minPrice" value={minPrice} onChange={(event) => setMinPrice(event.target.value)} />
              <p>-</p>
              <input type="number" id="maxPrice" placeholder="max. kr" name="maxPrice" value={maxPrice} onChange={(event) => setMaxPrice(event.target.value)} />
        </div>
        <div className="filter-div">
          <label>Sort by:</label>
            <select id="sort" name="sort" value={sortOrder} onChange={(event) => setSortOrder(event.target.value)}>
              <option value="">Newest</option>
              <option value="lowToHigh">Lowest to Highest</option>
              <option value="highToLow">Highest to Lowest</option>
            </select>
        </div>
      </div>
        }
      </div>
      <div className="product-grid">
        {filteredProducts.reverse().map((product, index) => <ProductCard product={product} key={index} />)}
      </div>
    </div>
  );
}

export default ProductList 