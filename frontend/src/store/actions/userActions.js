import { createAsyncThunk } from "@reduxjs/toolkit";
import userApi from "../../utils/api/userApi";

export const getUsers = createAsyncThunk("user/login", async () => {
  const users = await userApi.getUsers();
  return users;

});

export const getUser = createAsyncThunk("user/login", async (userId) => {
    const user = await userApi.getUser(userId);
    return user;
  
  });
  
export const login = createAsyncThunk("user/login", async (loginData) => {
  console.log("in slice", loginData)
    const userId = await userApi.login(loginData);
    console.log("in slice userid", userId)
    return userId;
  
  });