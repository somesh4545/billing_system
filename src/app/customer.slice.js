import { createSlice } from "@reduxjs/toolkit";

export const customerSlice = createSlice({
  name: "customers",
  initialState: {
    searchValue: null,
    isPanelOpen: false,
    wasRecordAdded: null,
    customerSelected: null,
    addingAnotherContact: false,
    customerSelectedIndex: null,
    isCustomerDetailsPanelOpen: false,
    loadedCustomers: [],
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

    finishedAddingContactOrAddress: (state) => {
      state.addingAnotherContact = false;
    },

    updateWasRecordAdded: (state, { payload }) => {
      state.wasRecordAdded = payload;
      return state;
    },

    setSelectedCustomer: (state, { payload }) => {
      state.customerSelected = payload;
      return state;
    },

    setSearchValue: (state, { payload }) => {
      state.searchValue = payload;
      return state;
    },

    setCustomerDetailsPanelOpen: (state, { payload }) => {
      state.isCustomerDetailsPanelOpen = payload;
    },

    setLoadedCustomers: (state, { payload }) => {
      state.loadedCustomers = payload;
      return state;
    },

    setAddingAnotherContact: (state, { payload }) => {
      state.addingAnotherContact = payload;
      return state;
    },

    setCustomerSelectedIndex: (state, { payload }) => {
      state.customerSelectedIndex = payload;
      return state;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  openPanel,
  closePanel,
  setSearchValue,
  setSelectedCustomer,
  updateWasRecordAdded,
  setCustomerDetailsPanelOpen,
  setLoadedCustomers,
  setAddingAnotherContact,
  finishedAddingContactOrAddress,
  setCustomerSelectedIndex,
} = customerSlice.actions;

export default customerSlice.reducer;
