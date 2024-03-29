import { createSlice } from "@reduxjs/toolkit";
import { dashboardInf } from "./operations";

const pharmacySlice = createSlice({
  name: "pharmacy",
  initialState: {
    dashboarData:[]
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

  },
});
export const { resetStatusOperation } = pharmacySlice.actions;
export default pharmacySlice.reducer;
