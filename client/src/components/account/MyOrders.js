import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchOrdersByUserId } from '../../store/actions/orderActions';
import orderItemApi from '../../utils/api/orderItemApi';
import sizeApi from '../../utils/api/sizeApi';
import productApi from '../../utils/api/productApi';
import { useStatusString, formatPrice, formatDateTime } from '../../utils/hooks/useUtil';

function MyOrders({ currentUser }) {
  const [orders, setOrders] = useState([]);
  const getStatusString = useStatusString();
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(fetchOrdersByUserId(currentUser.userID)).then(async (response) => {
      const ordersWithItems = await Promise.all(response.payload.map(async (order, index) => {
        const orderItems = await orderItemApi.getOrderItemsByOrderId(order.orderID);

        const productSizePromises = orderItems.map((orderItem) =>
          sizeApi.getProductSize(orderItem.productSizeID)
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
  }, [dispatch, currentUser.userID]);

  return (
    <>
      <h1>My Orders</h1>
      {orders.map((order) => (
        <div className='my-orders-div' key={order.orderID}>
          <div className="line"></div>
          <div className='my-orders-about space-between'>
            <ul>
              <li><p className='grey txt'>Order #{order.orderID}</p></li>
              <li><p>Placed {formatDateTime(order.dateTime)}</p></li>
            </ul>
            <ul>
              {order.status === 0 && <li><a className='red txt'>Cancel</a></li>}
              <li>
                {getStatusString(order.status)}
              </li>
            </ul>
          </div>
          <div>
            {order.orderItems.map((orderItem) => (
              <div key={orderItem.orderItemID}>
                <div className="cart-item" key={orderItem.orderItemID}>
                  <div className="cart-item-img">
                    <img src={orderItem.product.imageURL}></img>
                  </div>
                  <div className="cart-item-about">
                    <div className="cart-item-details">
                      <p>{orderItem.product.brand} {orderItem.product.name}</p>
                      <p>Size: {orderItem.productSize.size}</p>
                      <p>Quantity: {orderItem.quantity}</p>
                      <p>Price: {formatPrice(orderItem.productSize.price)}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}

export default MyOrders;
