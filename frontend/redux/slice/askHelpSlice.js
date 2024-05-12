import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: null,
  description: null,
  address: null,
  taskPrice: null,
};

const askHelpSlice = createSlice({
  name: "askHelp",
  initialState,
  reducers: {
    setTitle: (state, action) => {
      state.title = action.payload;
    },
    setDescription: (state, action) => {
      state.description = action.payload;
    },
    setAddress: (state, action) => {
      state.address = action.payload;
    },
    setTaskPrice: (state, action) => {
      state.taskPrice = action.payload;
    },
  },
});

export const { setTitle, setDescription, setAddress, setTaskPrice } =
  askHelpSlice.actions;

export default askHelpSlice.reducer;
