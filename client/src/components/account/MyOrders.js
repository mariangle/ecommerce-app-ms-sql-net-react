import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchOrdersByUserId } from '../../store/reducers/orderSlice';
import orderItemApi from '../../utils/api/orderItemApi';
import productSizeApi from '../../utils/api/productSizeApi';
import productApi from '../../utils/api/productApi';
import { Link } from 'react-router-dom';

function MyOrders({ user }) {
  const [orders, setOrders] = useState([]);

  const dispatch = useDispatch();

  const getStatusString = (status) => {
    const statusMap = {
      0: 'Pending',
      1: 'Processing',
      3: 'Shipped',
      4: 'Delivered',
    };
    return statusMap[status] || '';
  };

  useEffect(() => {
    dispatch(fetchOrdersByUserId(user.userID)).then(async (response) => {
      const ordersWithItems = await Promise.all(response.payload.map(async (order, index) => {
        const orderItems = await orderItemApi.getOrderItemsByOrderId(order.orderID);

        const productSizePromises = orderItems.map((orderItem) =>
          productSizeApi.getProductSize(orderItem.productSizeID)
        );
        const productSizes = await Promise.all(productSizePromises);

        const productPromises = productSizes.map((productSize) =>
          productApi.getProduct(productSize.productID)
        );
        const products = await Promise.all(productPromises);

        return {
          ...order,
          orderItems: orderItems.map((orderItem, index) => ({
            ...orderItem,
            productSize: productSizes[index],
            product: products[index]
          })),
          index
        };
      }));
      setOrders(ordersWithItems);
    });
  }, [dispatch, user.userID]);

  return (
    <>
      {orders.map((order) => (
        <div key={order.orderID}>
          <p>OrderID: {order.orderID}</p>
          <p>Order Date: {order.dateTime}</p>
          <p>Total: {order.totalPrice} kr</p>
          <p>Status: {getStatusString(order.status)}</p>
          <div>
            {order.orderItems.map((orderItem) => (
              <div key={orderItem.orderItemID}>
                <p>Product: {orderItem.product.brand} {orderItem.product.name}</p>
                <p>Size: {orderItem.productSize.size}</p>
                <p>Quantity: {orderItem.quantity}</p>
                <p>Price: {orderItem.productSize.price} kr</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}

export default MyOrders;
