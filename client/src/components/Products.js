import productApi from '../utils/api/productApi';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Divider, Container, Image, About } from '../styles/styles'; 
import ProductSizes from './ProductSizes';
import { useDispatch } from 'react-redux';
import { fetchProducts } from '../store/reducers/productSlice';
import { createProduct, updateExistingProduct, removeProduct } from '../store/reducers/productSlice';

function Products() {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [localProduct, setLocalProduct] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const products = await productApi.getProducts();
      setData(products);
      dispatch(fetchProducts());
    }
    fetchData();
  }, [dispatch]);

  const handleEditProduct = (productId) => {
    const product = data.find((p) => p.productID === productId);
    setLocalProduct(product);
  };

  const handleAddProduct = () => {
    const newProduct = {
      name: document.getElementById('productName').value,
      brand: document.getElementById('productBrand').value,
      description: document.getElementById('productDescription').value,
      imageURL: document.getElementById('productImageURL').value,
    };
    dispatch(createProduct(newProduct))
    .then(() => {
      setData([...data, newProduct]);
      alert("Product has been added.")
    })
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLocalProduct(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSaveChanges = () => {
    dispatch(updateExistingProduct({ productId: localProduct.productID, product: localProduct }))
      .then(() => {
        setData(data.map(p => p.productID === localProduct.productID ? localProduct : p));
        alert("Changes have been saved.")
      })
  };

  const handleDeleteProduct = (productId) => {
    setLocalProduct(data.find(product => product.productID === productId));
    if (window.confirm("Are you sure you want to delete this product?")) {
      dispatch(removeProduct(productId))
      .then(() => {
        setData(data.filter(p => p.productID !== productId));
        alert("Product has been deleted.")
      })
    }
  };

  return (
    <StyledProducts>
        <ProductTable>
            <thead>
                <tr>
                <th>ID</th>
                <th>Model</th>
                </tr>
            </thead>
            <tbody>
                {data.map((product, index) => (
                <tr key={index}  onClick={() => handleEditProduct(product.productID)}>
                    <td>{product.productID}</td>
                    <td>{product.brand} {product.name}</td>
                </tr>
                ))}
            </tbody>
        </ProductTable>
          {localProduct && <ProductPanel>
            <ProductDetails>
              <ProductInfo>
                <Divider>
                <label>
                  ID: {localProduct?.productID}
                </label>
                <label>
                  Brand
                  <input id="productBrand" name="brand" maxLength="50" value={localProduct?.brand || ''} onChange={handleInputChange} />
                </label>
                <label>
                  Model
                  <input id="productName" name="name" maxLength="100" value={localProduct?.name || ''} onChange={handleInputChange}/>
                </label>
              </Divider>
              <label htmlFor="">
                Description
                <textarea id="productDescription" name="description" maxLength="500" rows="6" value={localProduct?.description || ''} onChange={handleInputChange}></textarea>
              </label>
              <Divider>
                <button onClick={() => setLocalProduct(null) }>Close</button>
                <button onClick={handleSaveChanges}>Save</button>
                <button onClick={handleAddProduct}>Add</button>
                <button onClick={() => handleDeleteProduct(localProduct?.productID)}>Delete</button>
              </Divider>
              </ProductInfo>

            </ProductDetails>
            <ProductSizes localProduct={localProduct} />
          </ProductPanel> 
          }
    </StyledProducts>
  );
}


const StyledProducts = styled.div`
width: 100%;
`
const ProductTable = styled.table`
`
const ProductPanel = styled.div`
position: fixed;
top: 50%;
right: 0;
`

const ProductDetails = styled.div`
`

const ProductInfo = styled.div`
`

export default Products;
