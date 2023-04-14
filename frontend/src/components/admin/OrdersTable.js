import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchOrders } from "../../store/actions/orderActions"
import { useStatusString, formatDate } from '../../utils/hooks/useUtil';

import OrderItemsTable from './OrderItemsTable';
import OrderTable from './OrderTable';

import userApi from '../../utils/api/userApi';

  function Orders() {
    const dispatch = useDispatch();
    const [orders, setOrders] = useState([])
    const [selectedOrder, setSelectedOrder] = useState(null)
    const [user, setUser] = useState([]);
    const getStatusString = useStatusString();

    useEffect(() => {
      dispatch(fetchOrders()).then((response) => setOrders(response.payload));
    }, [dispatch]);
    
    useEffect(() => {
      if (selectedOrder) {
        userApi.getUser(selectedOrder.userID).then(setUser);
      }
    }, [selectedOrder]);
    
    return (
      <div className="admin-product">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Order Date</th>
              <th>Status</th>
              <th>UserID</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={index} onClick={() => setSelectedOrder(order)}>
                <td>{order.orderID}</td>
                <td>{formatDate(order.dateTime)}</td>
                <td>{getStatusString(order.status)}</td>
                <td>{order.userID}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {selectedOrder && 
          <div className="product-panel">
            <OrderTable user={user} selectedOrder={selectedOrder}></OrderTable>
            <OrderItemsTable selectedOrder={selectedOrder}></OrderItemsTable>
          </div>
        }
      </div>
    );
}

export default Orders;
