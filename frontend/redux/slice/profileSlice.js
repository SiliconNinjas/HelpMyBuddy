import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fullname: null,
  email: null,
  gender: null,
  dateofbirth: null,
  phoneNumber: null,
  location: null,
  address: null,
  upi: null,
  totalEarnings: null,
  isEligible: false,
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setFullName: (state, action) => {
      state.fullname = action.payload;
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
    setLocation: (state, action) => {
      state.Location = action.payload;
    },
    setAddress: (state, action) => {
      state.Address = action.payload;
    },
    setUpi: (state, action) => {
      state.Upi = action.payload;
    },
    setTotalEarnings: (state, action) => {
      state.TotalEarnings = action.payload;
    },
    setIsEligible: (state, action) => {
      state.isEligible = action.payload;
    },
  },
});

export const {
  setFullName,
  setEmail,
  setGender,
  setDateOfBirth,
  setPhoneNumber,
  setLocation,
  setAddress,
  setUpi,
  setTotalEarnings,
  setIsEligible,
} = profileSlice.actions;

export default profileSlice.reducer;
