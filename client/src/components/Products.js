import productApi from '../utils/api/productApi';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { useProductData } from '../utils/hooks/useProductData';
import { useSelector } from 'react-redux';
import { fetchProducts, setProduct } from '../store/reducers/productSlice';

function Products() {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const products = useSelector((state) => state.product.products);
  const selectedProduct = useSelector((state) => state.product.selectedProduct);


  useEffect(() => {
    async function fetchData() {
      const products = await productApi.getProducts();
      setData(products);
      dispatch(fetchProducts());
    }
    fetchData();
  }, [dispatch]);

  const handleProductClick = (productId) => {
    dispatch(setProduct(productId));
  };

  return (
    <StyledProducts>
      <button>Add Product</button>
        <ProductTable>
            <thead>
                <tr>
                <th>ProductID</th>
                <th>Model</th>
                <th>Options</th>
                </tr>
            </thead>
            <tbody>
                {data.map((product, index) => (
                <tr key={index}>
                    <td>{product.productID}</td>
                    <td>{product.brand} {product.name}</td>
                    <td>
                      <FontAwesomeIcon icon={faTrash} />
                      <FontAwesomeIcon icon={faPenToSquare}  onClick={() => handleProductClick(product.productID)}/>                    
                    </td>
                </tr>
                ))}
            </tbody>
        </ProductTable>
        <ProductPanel>
          <h3>Edit Product</h3>
          <label htmlFor="">Brand</label>
          <input placeholder={selectedProduct?.productID}></input>
          <label htmlFor="">Brand</label>
          <input placeholder={selectedProduct?.brand}></input>
          <label htmlFor="">Model</label>
          <input placeholder={selectedProduct?.name}></input>
          <label htmlFor="">Description</label>
          <input placeholder={selectedProduct?.description}></input>
          <label htmlFor="">Image URL</label>
          <input placeholder={selectedProduct?.imageURL}></input>
          <button>Save Changes</button>
          <label htmlFor="">Size</label>
          <input placeholder={selectedProduct?.price}></input>
          <label htmlFor="">Quantity</label>
          <input placeholder={selectedProduct?.price}></input>
          <label htmlFor="">Price</label>
          <input type="date"></input>

        </ProductPanel>
    </StyledProducts>
  );
}

const StyledProducts = styled.div`
width: 100%;
`

const ProductTable = styled.table`

`
const ProductPanel = styled.div`

`

export default Products;
