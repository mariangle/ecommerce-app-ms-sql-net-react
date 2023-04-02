import productApi from '../utils/api/productApi';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
  import { fetchProducts } from '../store/reducers/productSlice';
import { createProduct, updateExistingProduct, removeProduct } from '../store/reducers/productSlice';

function Products() {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [localProduct, setLocalProduct] = useState({});

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

  const handleAddProductClick = () => {
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

  const handleSaveChangesClick = () => {
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
                <th>Options</th>
                </tr>
            </thead>
            <tbody>
                {data.map((product, index) => (
                <tr key={index}  onClick={() => handleEditProduct(product.productID)}>
                    <td>{product.productID}</td>
                    <td>{product.brand} {product.name}</td>
                    <td>
                      <FontAwesomeIcon icon={faTrash} onClick={() => handleDeleteProduct(product.productID)}/>
                    </td>
                </tr>
                ))}
            </tbody>
        </ProductTable>
        <ProductPanel>
          
          {true && <div>
            <label htmlFor="">Image</label>
            <Image src={localProduct?.imageURL}></Image>
            <label htmlFor="">ID</label>
            <input value={localProduct?.productID} readOnly />
            <label htmlFor="">Model</label>
            <input id="productName" name="name" maxLength="100" value={localProduct?.name || ''} onChange={handleInputChange}/>
            <label htmlFor="">Brand</label>
            <input id="productBrand" name="brand" maxLength="50" value={localProduct?.brand || ''} onChange={handleInputChange} />
            <label htmlFor="">Description</label>
            <input id="productDescription" name="description" maxLength="500" value={localProduct?.description || ''} onChange={handleInputChange}/>
            <label htmlFor="">Image URL</label>
            <input id="productImageURL" name="imageURL" maxLength="300" value={localProduct?.imageURL || ''} onChange={handleInputChange} />

            <button onClick={handleSaveChangesClick}>Save Changes</button>
            <button onClick={handleAddProductClick}>Add Product</button>

            <label htmlFor="">Size</label>
            <input value={localProduct?.size}></input>
            <label htmlFor="">Quantity</label>
            <input value={localProduct?.quantity}></input>
            <label htmlFor="">Price</label>
            <label htmlFor="">{localProduct?.brand}</label>
            <input value={localProduct?.price}></input>
          </div> 
          }
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
const Image = styled.img`
height: 200px;
width: 320px;
`

export default Products;
