import productApi from '../../utils/api/productApi';
import React, { useEffect, useState } from 'react';
import ProductSizes from './SizesTable';
import { useDispatch } from 'react-redux';
import { fetchProducts } from '../../store/reducers/productSlice';
import { createProduct, updateExistingProduct, removeProduct } from '../../store/reducers/productSlice';

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
    <div className="admin-product">
        <table className='product-table'>
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
        </table>
        <div className='product-panel'>
              <h2>{localProduct?.brand} {localProduct?.name}</h2>
              {localProduct && (
                <div className='product-panel-img'>
                  <img src={localProduct.imageURL} alt="" />
                </div>
              )
              }
              <div className="product-panel-info">
                { localProduct && ( <label className='label-small'>
                  ID
                  <input value={localProduct?.productID} readOnly/>
                </label>)}
                <label>
                    Brand
                  <input id="productBrand" name="brand" maxLength="50" value={localProduct?.brand || ''} onChange={handleInputChange} />
                </label>
                <label>
                  Model
                  <input id="productName" name="name" maxLength="100" value={localProduct?.name || ''} onChange={handleInputChange}/>
                </label>
              </div>
              <label htmlFor="">
                  Description
                  <textarea id="productDescription" name="description" maxLength="500" rows="4" value={localProduct?.description || ''} onChange={handleInputChange}></textarea>
              </label>
            <label>
                Image URL
                <input id="productImageURL" name="imageURL" maxLength="100" value={localProduct?.imageURL || ''} onChange={handleInputChange}/>
            </label>
            <div className='divider'>
                <button className='second-button' onClick={() => setLocalProduct(null) }>Clear</button>
                { localProduct && (<button className='second-button' onClick={() => handleDeleteProduct(localProduct?.productID)}>Delete</button>)}
                { localProduct && (<button onClick={handleSaveChanges}>Save Changes</button>)}
                { !localProduct && (<button onClick={handleAddProduct}>Add Product</button>)}
            </div>
            {localProduct && (<ProductSizes localProduct={localProduct} />)}
        </div> 
    </div>
  );
}






export default Products;
