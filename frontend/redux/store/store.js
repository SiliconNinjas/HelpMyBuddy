import { configureStore } from "@reduxjs/toolkit";
import profileSlice from "../slice/profileSlice";

export const store = configureStore({
  reducer: {
    profile: profileSlice,
  },
});
