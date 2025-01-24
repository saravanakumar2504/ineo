import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  professionType: null,
};

export const professionSlice = createSlice({
  name: "profession",
  initialState,
  reducers: {
    handleProfession: (state, actions) => {
      state.professionType = actions.payload;
    },
  },
});

export const { handleProfession } = professionSlice.actions;

export default professionSlice.reducer;
