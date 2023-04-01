import axios from 'axios';
import { variables } from './variables.js';

const API_URL = variables.API_URL+"/User"

const getUsers = async () => {
  const response = await axios.get(API_URL);
  return response.data;
}

const getUser = async (userId) => {
  const response = await axios.get(`${API_URL}/${userId}`);
  return response.data;
}

const createUser = async (user) => {
  const response = await axios.post(API_URL, user);
  return response.data;
}

const updateUser = async (userId, user) => {
  const response = await axios.put(`${API_URL}/${userId}`, user);
  return response.data;
}

const deleteUser = async (userId) => {
  const response = await axios.delete(`${API_URL}/${userId}`);
  return response.data;
}

export default {
  getUser,
  getUsers,
  createUser,
  updateUser,
  deleteUser
};