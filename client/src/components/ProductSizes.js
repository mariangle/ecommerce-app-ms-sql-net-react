import React from 'react'
import { Divider, Container } from '../styles/styles'; 
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import productSizeApi from '../utils/api/productSizeApi';
import { deleteSize, createProductSize, updateExistingSize } from '../store/reducers/productSizeSlice';

function ProductSizes({localProduct}) {
    const dispatch = useDispatch();
    const [availableSizes, setAvailableSizes] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        const productSizes = await productSizeApi.getProductSizesByProductId(localProduct.productID);
        setAvailableSizes(productSizes);
      };
      fetchData();
    }, [localProduct.productID]);
  
    const handleAddProductSize = async (event) => {
      event.preventDefault()
      const newSize = {
        size: document.getElementById('size').value,
        price: document.getElementById('price').value,
        quantity: document.getElementById('quantity').value,
        productId: localProduct.productID,
      };
      await dispatch(createProductSize(newSize));
      setAvailableSizes([...availableSizes, newSize]);
      alert('Size has been added.');
    };
  
    const handleEditProductSize = async (updatedProductSize) => {
      try {
        const updatedSize = await dispatch(updateExistingSize({
          productId: localProduct.productID,
          product: updatedProductSize,
        }));
        const updatedAvailableSizes = availableSizes.map((size) => {
          if (size.id === updatedSize.id) {
            return updatedSize;
          } else {
            return size;
          }
        });
        setAvailableSizes(updatedAvailableSizes);
        alert('Size has been updated.');
      } catch (error) {
        console.error('Error updating size: ', error);
        alert('Error updating size. Please try again.');
      }
    };
  
    const handlePriceChange = (index, value) => {
      const updatedSizes = [...availableSizes];
      updatedSizes[index].price = value;
      setAvailableSizes(updatedSizes);
    }
  
    const handleQuantityChange = (index, value) => {
      const updatedSizes = [...availableSizes];
      updatedSizes[index].quantity = value;
      setAvailableSizes(updatedSizes);
    }

    const handeDeleteProductSize = (productSizeId, event) => {
      event.preventDefault()
      if (window.confirm("Are you sure you want to delete this size?")) {
        dispatch(deleteSize(productSizeId))
          .then(() => {
            alert("Product size has been deleted.")
          })
      }
    };
  
  
    return (
      <div>
        <AvaliableSizes>
          <table>
            <thead>
              <tr>
                <th>Size</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Options</th>
              </tr>
            </thead>
            <tbody>
              {availableSizes.map((productSize, index) => (
                <tr key={index}>
                  <td>{productSize.size}</td>
                  <td>
                    <input
                      value={productSize.price}
                      onChange={(e) => handlePriceChange(index, e.target.value)}
                    />
                  </td>
                  <td>
                    <input
                      value={productSize.quantity}
                      onChange={(e) => handleQuantityChange(index, e.target.value)}
                    />
                  </td>
                  <td>
                    <a href="#" onClick={() => handeDeleteProductSize(productSize.productSizeID)}>delete</a>
                    <a href="#" onClick={() => handleEditProductSize(productSize.productID)}>save</a>
                  </td>
                </tr>
              ))}
                <tr>
                    <td>
                        <select id="size">
                            {Array.from({length: 16}, (_, i) => i + 35)
                                .filter(size => !availableSizes.find(ps => ps.size === size))
                                .map((size, index) => (
                                <option key={index} value={size}>{size}</option>
                            ))}
                        </select>   
                    </td>
                    <td><input id="price"></input></td>
                    <td><input id="quantity"></input></td>
                    <td><a href="" onClick={handleAddProductSize}>add</a></td>
                </tr>
                </tbody>
            </table>
        </AvaliableSizes>
    </div>
  )
}

const AvaliableSizes = styled.div`
display: flex;
flex-direction: column;
`



export default ProductSizes