import { createSlice } from "@reduxjs/toolkit";

export const customerSlice = createSlice({
  name: "customers",
  initialState: {
    isPanelOpen: false,
    wasRecordAdded: null,
    customerSelected: null,
    isCustomerDetailsPanelOpen: false,
  },
  reducers: {
    openPanel: (state) => {
      state.customerSelected = null;
      state.isCustomerDetailsPanelOpen = false;
      state.isPanelOpen = true;
      return state;
    },

    closePanel: (state) => {
      state.customerSelected = null;
      state.isCustomerDetailsPanelOpen = false;
      state.isPanelOpen = false;
      return state;
    },

    updateWasRecordAdded: (state, { payload }) => {
      state.wasRecordAdded = payload;
      return state;
    },

    setSelectedCustomer: (state, { payload }) => {
      state.customerSelected = payload;
      return state;
    },

    setCustomerDetailsPanelOpen: (state, { payload }) => {
      state.isCustomerDetailsPanelOpen = payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  closePanel,
  openPanel,
  updateWasRecordAdded,
  setCustomerDetailsPanelOpen,
  setSelectedCustomer,
} = customerSlice.actions;

export default customerSlice.reducer;
