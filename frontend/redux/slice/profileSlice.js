import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: null,
  email: null,
  gender: null,
  dateofbirth: null,
  phoneNumber: null,
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setGender: (state, action) => {
      state.gender = action.payload;
    },
    setDateOfBirth: (state, action) => {
      state.dateofbirth = action.payload;
    },
    setPhoneNumber: (state, action) => {
      state.phoneNumber = action.payload;
    },
  },
});

export const { setName, setEmail, setGender, setDateOfBirth, setPhoneNumber } =
  profileSlice.actions;

export default profileSlice.reducer;
