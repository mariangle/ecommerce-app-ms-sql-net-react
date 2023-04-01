import axios from 'axios';
import { variables } from './variables.js';

const API_URL = variables.API_URL+"/Product"

const getProducts = async () => {
  const response = await axios.get(API_URL);
  return response.data;
}

export default {
  getProducts
};