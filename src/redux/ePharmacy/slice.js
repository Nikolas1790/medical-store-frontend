import { createSlice } from "@reduxjs/toolkit";
import { customersInf, dashboardInf, ordersInf, productsInf, suppliersInf } from "./operations";

const pharmacySlice = createSlice({
  name: "pharmacy",
  initialState: {
    dashboarData:[],
    ordersData:[],
    suppliersData: [],
    productsData: [],
    customersData: []
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(dashboardInf.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(dashboardInf.fulfilled, (state, action) => {
        state.loading = false;
        state.dashboarData = action.payload;
      })
      .addCase(dashboardInf.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      .addCase(ordersInf.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(ordersInf.fulfilled, (state, action) => {
        state.loading = false;
        state.ordersData = action.payload;
      })
      .addCase(ordersInf.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      .addCase(suppliersInf.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(suppliersInf.fulfilled, (state, action) => {
        state.loading = false;
        state.suppliersData = action.payload;
      })
      .addCase(suppliersInf.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      .addCase(productsInf.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(productsInf.fulfilled, (state, action) => {
        state.loading = false;
        state.productsData = action.payload;
      })
      .addCase(productsInf.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      .addCase(customersInf.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(customersInf.fulfilled, (state, action) => {
        state.loading = false;
        state.customersData = action.payload;
      })
      .addCase(customersInf.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

  },
});
export const { resetStatusOperation } = pharmacySlice.actions;
export default pharmacySlice.reducer;
