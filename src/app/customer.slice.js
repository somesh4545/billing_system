import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchValue: null,
  isPanelOpen: false,
  openFilters: false,
  wasRecordAdded: null,
  customerSelected: null,
  addingAnotherContact: false,
  addingAnotherAddress: false,
  customerSelectedIndex: null,
  editingAddressID: null,
  editingContactID: null,
  isCustomerDetailsPanelOpen: false,
  loadedCustomers: [],
};

export const customerSlice = createSlice({
  name: "customers",
  initialState,
  reducers: {
    openPanel: (state) => {
      state = initialState;
      state.isPanelOpen = true;
      return state;
    },

    closePanel: (state) => {
      state = initialState;
      return state;
    },

    finishedAddingContactOrAddress: (state) => {
      state.editingAddressID = initialState.editingAddressID;
      state.editingContactID = initialState.editingContactID;
      state.addingAnotherContact = initialState.addingAnotherContact;
      state.addingAnotherContact = initialState.addingAnotherContact;
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

    setAddingAnotherAddress: (state, { payload }) => {
      state.addingAnotherAddress = payload;
      return state;
    },

    setCustomerSelectedIndex: (state, { payload }) => {
      state.customerSelectedIndex = payload;
      return state;
    },

    setOpenFilters: (state, { payload }) => {
      state.openFilters = payload;
      return state;
    },

    setEditingContactID: (state, { payload }) => {
      state.addingAnotherAddress = initialState.addingAnotherAddress;
      state.addingAnotherContact = initialState.addingAnotherContact;
      state.editingContactID = payload;
      return state;
    },

    setEditingAddressID: (state, { payload }) => {
      state.editingAddressID = payload;
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
  setOpenFilters,
  setAddingAnotherAddress,
  setEditingAddressID,
  setEditingContactID,
} = customerSlice.actions;

export default customerSlice.reducer;
