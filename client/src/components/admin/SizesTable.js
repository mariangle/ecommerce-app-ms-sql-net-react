import React from 'react'
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import productSizeApi from '../../utils/api/productSizeApi';
import { deleteSize, createProductSize, updateExistingSize } from '../../store/reducers/productSizeSlice';
import { icons } from '../../assets/icons/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ProductSizes({ localProduct }) {
  const dispatch = useDispatch();
  const [availableSizes, setAvailableSizes] = useState([]);
  const [newSize, setNewSize] = useState({
    size: "",
    price: "",
    quantity: "",
  });

  useEffect(() => {
    localProduct && productSizeApi.getProductSizesByProductId(localProduct.productID)
      .then(productSizes => setAvailableSizes(productSizes));
  }, [localProduct]);
  

  const handleAddProductSize = async (event) => {
    event.preventDefault();
    const createdSize = await dispatch(createProductSize({
      ...newSize,
      productId: localProduct.productID,
    }));    
    console.log(localProduct.productID)
    setAvailableSizes([...availableSizes, createdSize]);
    setNewSize({
      size: "",
      price: "",
      quantity: "",
    });
    alert("Size has been added.");
  };

  const handleEditProductSize = async (productSizeId, updatedProductSize) => {
    try {
      const updatedSize = await dispatch(
        updateExistingSize({
          productSizeId: productSizeId,
          productSize: updatedProductSize,
        })
      );
      const updatedAvailableSizes = availableSizes.map((size) =>
        size.id === updatedSize.id ? updatedSize : size
      );
      setAvailableSizes(updatedAvailableSizes);
      alert("Size has been updated.");
    } catch (error) {
      console.error("Error updating size: ", error);
      alert("Error updating size. Please try again.");
    }
  };

  const handlePriceChange = (index, value) => {
    const updatedSizes = [...availableSizes];
    updatedSizes[index].price = value;
    setAvailableSizes(updatedSizes);
  };

  const handleQuantityChange = (index, value) => {
    const updatedSizes = [...availableSizes];
    updatedSizes[index].quantity = value;
    setAvailableSizes(updatedSizes);
  };

  const handleDeleteProductSize = (productSizeId, event) => {
    event.preventDefault();
    if (window.confirm("Are you sure you want to delete this size?")) {
      dispatch(deleteSize(productSizeId)).then(() => {
        alert("Product size has been deleted.");
      });
    }
  };

  return (
      <>
        <table className='size-table'>
          <thead>
            <tr>
              <th>Size</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <select id="size" value={newSize.size} onChange={(e) => setNewSize({ ...newSize, size: e.target.value })}>
                  <option disabled value="">Add size</option>
                  {Array.from({ length: 16 }, (_, i) => i + 35)
                    .filter((size) => !availableSizes.find((ps) => ps.size === size))
                    .map((size, index) => (
                      <option key={index} value={size}>
                        {size}
                      </option>
                    ))}
                </select>
              </td>
              <td>
                <input id="price" type="number" value={newSize.price} onChange={(e) => setNewSize({ ...newSize, price: e.target.value })} />
              </td>
              <td>
                <input id="quantity" type="number" value={newSize.quantity} onChange={(e) => setNewSize({ ...newSize, quantity: e.target.value })} />
              </td>
              <td>
                <a onClick={handleAddProductSize}>Add</a>
              </td>
            </tr>
            {availableSizes.sort((a, b) => a.size - b.size).map((productSize, index) => (
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
                  <a onClick={(event) => handleDeleteProductSize(productSize.productSizeID, event)}><FontAwesomeIcon icon={icons.trash}></FontAwesomeIcon></a>
                  <a onClick={() => handleEditProductSize(productSize.productSizeID, productSize)}><FontAwesomeIcon icon={icons.save}></FontAwesomeIcon></a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
  );
}



export default ProductSizes