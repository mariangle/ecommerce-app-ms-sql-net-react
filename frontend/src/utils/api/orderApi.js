import axios from 'axios';
import { variables } from './variables.js';

const API_URL = variables.ORDER_API

const getOrders = async () => {
  const response = await axios.get(API_URL);
  return response.data;
}

const getOrdersByUserId = async (userId) => {
  const response = await axios.get(`${API_URL}/${userId}`);
  return response.data;
}

const createOrder = async (order) => {
  const response = await axios.post(API_URL, order);
  return response.data;
}

const updateOrder = async (orderId, order) => {
  const response = await axios.put(`${API_URL}/${orderId}`, order);
  return response.data;
}

const deleteOrder = async (orderId) => {
  const response = await axios.delete(`${API_URL}/${orderId}`);
  return response.data;
}

export default {
    getOrders,
    getOrdersByUserId,
    createOrder,
    updateOrder,
    deleteOrder
};