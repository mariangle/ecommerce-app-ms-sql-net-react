import productApi from '../utils/api/productApi';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Divider, Container } from '../styles/styles'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
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
                <button onClick={handleSaveChangesClick}>Save Changes</button>
                <button onClick={handleAddProductClick}>Add Product</button>
              </Divider>
              </ProductInfo>
              <ProductImage>
                <Image src={localProduct?.imageURL}/>
                <label>Image URL
                  <input id="productImageURL" name="imageURL" maxLength="300" value={localProduct?.imageURL || ''} onChange={handleInputChange} />
                </label>
              </ProductImage>
            </ProductDetails>
            <ProductSize>
              <label>Sizes avaliable</label>
              <label for="size-select">Add size</label>
              <select id="size-select">
                <option value="35">35</option>
                <option value="36">36</option>
                <option value="37">37</option>
                <option value="38">38</option>
                <option value="39">39</option>
                <option value="40">40</option>
                <option value="41">41</option>
                <option value="42">42</option>
                <option value="43">43</option>
                <option value="44">44</option>
                <option value="45">45</option>
                <option value="46">46</option>
                <option value="47">47</option>
                <option value="48">48</option>
                <option value="49">49</option>
                <option value="50">50</option>
              </select>
              <label htmlFor="">Quantity</label>
              <input value={localProduct?.quantity}></input>
              <label htmlFor="">Price</label>
              <input value={localProduct?.price}></input>
              <button>Save Changes</button>
              <button>Add Size</button>
            </ProductSize>
          </ProductPanel> 
          }
    </StyledProducts>
  );
}
const StyledProducts = styled.div`
width: 100%;
display: flex;
flex-wrap: wrap;
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
flex: 3;
.label{
  width: 10rem;
}
`
const ProductImage = styled.div`
height: 100%;
flex: 2;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
`

const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`

const ProductSize = styled.div`
display: flex;
flex-direction: column;
`




export default Products;
