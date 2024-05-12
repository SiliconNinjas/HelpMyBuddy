import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  onboarded: false,
};

const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    setOnboarded: (state, action) => {
      state.onboarded = action.payload;
    },
  },
});

export const { setOnboarded } = homeSlice.actions;

export default homeSlice.reducer;
