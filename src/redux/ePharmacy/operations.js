import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const dashboardInf = createAsyncThunk(
  "dashboard",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/dashboard");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const ordersInf = createAsyncThunk("/orders",
  async ({ page = 1, limit = 5, name ="" }, thunkAPI) => {
    try {
      const response = await axios.get(`/orders?page=${page}&limit=${limit}&name=${name}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
});

export const productsInf = createAsyncThunk("/products",
  async ({ page = 1, limit = 10, name ="" }, thunkAPI) => {
    try {
      const response = await axios.get(`/products?page=${page}&limit=${limit}&name=${name}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
});

export const suppliersInf = createAsyncThunk("/suppliers",
  async ({ page = 1, limit = 10, name ="" }, thunkAPI) => {
    try {
      const response = await axios.get(`/suppliers?page=${page}&limit=${limit}&name=${name}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
});

export const customersInf = createAsyncThunk("/customers",
  async ({ page = 1, limit = 10, name ="" }, thunkAPI) => {
    try {
      const response = await axios.get(`/customers?page=${page}&limit=${limit}&name=${name}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
});


