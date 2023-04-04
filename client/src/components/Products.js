import productApi from '../utils/api/productApi';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Divider, Container } from '../styles/styles'; 
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
      window.location.reload();
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
        window.location.reload();
        alert("Changes have been saved.")
      })
  };

  const handleDeleteProduct = (productId) => {
    setLocalProduct(data.find(product => product.productID === productId));
    if (window.confirm("Are you sure you want to delete this product?")) {
      dispatch(removeProduct(productId))
      .then(() => {
        window.location.reload();
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
                <label className="label">
                  ID
                  <input value={localProduct?.productID} readOnly />
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
                <button onClick={handleSaveChanges}>Save Changes</button>
                <button onClick={handleAddProduct}>Add Product</button>
                <button onClick={() => handleDeleteProduct(localProduct?.productID)}>Delete Product</button>
              </Divider>
              </ProductInfo>
              <ProductImage>
                <Image src={localProduct?.imageURL}/>
                <label>Image URL
                  <input id="productImageURL" name="imageURL" maxLength="300" value={localProduct?.imageURL || ''} onChange={handleInputChange} />
                </label>
              </ProductImage>
            </ProductDetails>
            <ProductSizes localProduct={localProduct} />
          </ProductPanel> 
          }
    </StyledProducts>
  );
}


const StyledProducts = styled.div`
width: 100%;
display: flex;
flex-wrap: wrap-reverse;
`
const ProductTable = styled.table`
flex: 2 1 30rem;
`
const ProductPanel = styled.div`
flex: 3 1 30rem;
`;


const ProductDetails = styled.div`
display: flex;
margin: 0 auto;
`

const ProductInfo = styled.div`
flex: 1 30rem;
.label{
  width: 10rem;
}
`
const ProductImage = styled.div`
height: 100%;
flex: 2 2 30rem;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
margin-left: 1rem;
`

const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  background: #f0f0f0;
`




export default Products;
