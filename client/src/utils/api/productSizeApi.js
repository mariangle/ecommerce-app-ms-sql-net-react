import axios from 'axios';
import { variables } from './variables.js';

const API_URL = variables.BASE_URL+"productsize"

export const getProductSizes = async () => {
  const response = await axios.get(`${API_URL}`);
  return response.data;
};

export const getProductSizesByProductId = async (productId) => {
  const response = await axios.get(`${API_URL}/${productId}`);
  return response.data;
};

const addProductSize = async (productSizeData) => {
  const response = await axios.post(`${API_URL}`, productSizeData);
  return response.data;
};

const updateProductSize = async (productId, productSize) => {
  const response = await axios.put(`${API_URL}/${productId}`, productSize);
  return response.data;
};

const deleteProductSize = async (productSizeId) => {
  console.log("hi from api: " + productSizeId)
  const response = await axios.delete(`${API_URL}/${productSizeId}`);
  return response.data;
};

export default {
    getProductSizes,
    getProductSizesByProductId,
    addProductSize,
    updateProductSize,
    deleteProductSize
  };