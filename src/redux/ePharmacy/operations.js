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
