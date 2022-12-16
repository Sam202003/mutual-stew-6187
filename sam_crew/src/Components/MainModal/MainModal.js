import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: true,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, actions) => {
      state.isOpen = false;
    },
  },
});

export const { openModal } = modalSlice.actions;
export default modalSlice.reducer;
