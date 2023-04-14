import React, { useState, useEffect } from 'react';
import orderItemApi from '../../utils/api/orderItemApi';
import productApi from '../../utils/api/productApi';
import sizeApi from '../../utils/api/sizeApi';
import { Link } from 'react-router-dom';

function OrderItemsTable({ selectedOrder }) {
  const [orderItems, setOrderItems] = useState([]);
  const [productSizes, setProductSizes] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (selectedOrder) {
      orderItemApi.getOrderItemsByOrderId(selectedOrder.orderID).then((orderItems) => {
        setOrderItems(orderItems);

        const productSizePromises = orderItems.map((orderItem) =>
        sizeApi.getProductSize(orderItem.productSizeID)
        );
        Promise.all(productSizePromises).then((productSizes) => {
          setProductSizes(productSizes);
        });

        const productPromises = orderItems.map((productSizeId) =>
            productApi.getProduct(productSizeId.productSizeID)
        );
        Promise.all(productPromises).then((products) => {
            setProducts(products);
        });
        
      });
    }
  }, [selectedOrder]);

  return (
    <div className='order-items'>
      {orderItems.map((orderItem, index) => (
        <div key={index} className='cart-item'>
          {products[index] && (
            <div className="cart-item-img">
              <Link to={`/${products[index].productID}`}><img src={products[index].imageURL} /></Link>
            </div>
          )}
          <div className="cart-item-about">
            <div className='cart-item-details'>
              {products[index] && (
                <Link to={`/${products[index].productID}`}><p>{products[index].brand} {products[index].name}</p></Link>
              )}
              {productSizes[index] && (
                <p>Size: {productSizes[index].size}</p>
              )}
              <p>Quantity: {orderItem.quantity}</p>
            </div>
            {productSizes[index] && (
              <div className="cart-item-price">
                <p>{productSizes[index].price} €</p>
                                        {console.log(products)}

              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}  
  

export default OrderItemsTable;
