import React, { useEffect, useState } from 'react';
import ProductSizes from './SizesTable';
import { useProduct } from '../../utils/hooks/useProduct';

function Products() {
  const { products, fetchProducts, createProduct, updateExistingProduct, removeProduct } = useProduct();
  const [localProduct, setLocalProduct] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, [])

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLocalProduct(prevState => ({ ...prevState, [name]: value }));
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
                {products.map((product, index) => (
                <tr key={index}  onClick={() => setLocalProduct(product)}>         
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
                  <img src={localProduct?.imageURL} alt="" />
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
                { localProduct && (<button className='second-button' onClick={() => removeProduct(localProduct?.productID)}>Delete</button>)}
                { localProduct?.productID && (<button onClick={() => updateExistingProduct({ productId: localProduct.productID, product: localProduct })}>Save Changes</button>)}
                { !localProduct?.productID && (<button onClick={() => createProduct(localProduct)}>Add Product</button>)}
            </div>
            {localProduct && (<ProductSizes localProduct={localProduct} />)}
        </div> 
    </div>
  );
}

export default Products;
