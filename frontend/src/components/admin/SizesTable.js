import React, { useState } from 'react';
import { icons } from '../../assets/icons/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSize } from '../../utils/hooks/useSize';

function ProductSizes({ product }) {
  const { addSize, updateSize, deleteSize } = useSize();
  const [newSize, setNewSize] = useState({ size: '', price: '', quantity: '' });
  const [editedSize, setEditedSize] = useState(null); // new useState hook
  
  const updateSizeHandler = (sizeId, updatedSize) => {
    updateSize({ sizeId, size: { ...updatedSize } });
    setEditedSize(null); // set editedSize to null after updating
  };

  const handleEdit = (size) => {
    setEditedSize(size);
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
                  .filter((size) => !product?.sizes.find((ps) => ps.size === size))
                  .map((size, index) => (
                    <option key={index} value={size}>
                      {size}
                    </option>
                  ))}
              </select>
            </td>
            <td>
              <input id="price" type="number" value={newSize.price} onChange={(e) =>
                setNewSize((prevSize) => ({
                  ...prevSize,
                  price: e.target.value,
                }))
              }/>
            </td>
            <td>
              <input id="quantity" type="number" value={newSize.quantity} onChange={(e) =>
                setNewSize((prevSize) => ({
                  ...prevSize,
                  quantity: e.target.value,
                }))
              }/>
            </td>
            <td>
              <button onClick={() => addSize({ ...newSize, productId: product.productID })}>ADD</button>
            </td>
          </tr>
          {product?.sizes.map((size, index) => (
            <tr key={index}>
              <td>{size.size}</td>
              <td>
                <input
                  id="quantity" type="number"
                  value={size.price}
                  onChange={(e) =>
                    updateSizeHandler(size.productSizeID, {
                      ...size,
                      price: e.target.value,
                    })
                  }
                />
              </td>
              <td>
                <input
                  id="price" type="number"
                  value={size.quantity}
                  onChange={(e) =>
                    updateSizeHandler(size.productSizeID, {
                      ...size,
                      quantity: e.target.value,
                    })
                  }
                />
              </td>
              <td>
                <button onClick={(e) => deleteSize(size.productSizeID, e)}>
                  <FontAwesomeIcon icon={icons.trash}></FontAwesomeIcon>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default ProductSizes;
