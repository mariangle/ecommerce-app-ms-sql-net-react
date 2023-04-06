import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import userApi from "../../utils/api/userApi";

const initialState = {
  currentUser: null,
  token: localStorage.getItem("token") || "",
  isLoading: false,
  error: null,
};

export const getUserById = createAsyncThunk("user/login", async (userId) => {
  const user = await userApi.getUser(userId);
  return user;

});

export const login = createAsyncThunk("user/login", async (loginData) => {
  const userId = await userApi.login(loginData);
  return userId;

});

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem("token");
      state.currentUser = null;
      state.token = "";
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.token = action.payload.token;
        state.currentUser = action.payload.user;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
        state.token = "";
        state.currentUser = null;
      });
  },
});

export const { logout } = userSlice.actions;

export const selectToken = (state) => state.user.token;
export const selectCurrentUser = (state) => state.user.currentUser;
export const selectIsLoading = (state) => state.user.isLoading;
export const selectError = (state) => state.user.error;

export const { setUser, setLoading, setError } = userSlice.actions;


export default userSlice.reducer;
