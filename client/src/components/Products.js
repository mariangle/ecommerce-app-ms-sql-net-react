import productApi from '../utils/api/productApi';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';

function Products() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const products = await productApi.getProducts();
      setData(products  );
    };
    fetchData();
  }, []);

  return (
    <StyledProducts>
      <button>Add Product</button>
        <ProductTable>
            <thead>
                <tr>
                <th>ProductID</th>
                <th>Model</th>
                <th>Image</th>
                <th>Options</th>
                </tr>
            </thead>
            <tbody>
                {data.map((product, index) => (
                <tr key={index}>
                    <td>{product.productID}</td>
                    <td>{product.brand} {product.name}</td>
                    <td><img src={product.imageURL} alt="" /></td>
                    <td>
                      <FontAwesomeIcon icon={faTrash} />
                      <FontAwesomeIcon icon={faPenToSquare} />                    
                    </td>
                </tr>
                ))}
            </tbody>
        </ProductTable>
    </StyledProducts>
  );
}

const StyledProducts = styled.div`
width: 100%;
`

const ProductTable = styled.table`

`



export default Products;
