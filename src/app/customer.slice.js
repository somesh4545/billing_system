import { createSlice } from "@reduxjs/toolkit";

export const customerSlice = createSlice({
  name: "customers",
  initialState: {
    isPanelOpen: false,
    wasRecordAdded: null,
  },
  reducers: {
    openPanel: (state) => {
      state.isPanelOpen = true;
      return state;
    },

    closePanel: (state) => {
      state.isPanelOpen = false;
      return state;
    },

    updateWasRecordAdded: (state, { payload }) => {
      state.wasRecordAdded = payload;
      return state;
    },
  },
});

// Action creators are generated for each case reducer function
export const { closePanel, openPanel, updateWasRecordAdded } = customerSlice.actions;

export default customerSlice.reducer;
