import { createAsyncThunk } from '@reduxjs/toolkit';
import orderApi from '../../utils/api/orderApi';

export const fetchOrders = createAsyncThunk(
  'orders/fetchOrders',
  async () => {
    const orders = await orderApi.getOrders();
    return orders;
  }
);

export const fetchOrdersByUserId = createAsyncThunk('products/fetchProductById', async (userId) => {
  const orders = await orderApi.getOrdersByUserId(userId);
  return orders;
});