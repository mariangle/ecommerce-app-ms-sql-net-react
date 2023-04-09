import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
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

const initialState = {
  orders: [],
  status: 'idle',
  error: null
}


const orderSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrders.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchOrders.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.orders = action.payload;
      })
      .addCase(fetchOrders.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});


export default orderSlice.reducer;
