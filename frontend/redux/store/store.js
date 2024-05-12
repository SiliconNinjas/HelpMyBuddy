import { configureStore } from "@reduxjs/toolkit";
import profileSlice from "../slice/profileSlice";
import askHelpSlice from "../slice/askHelpSlice";
import homeSlice from "../slice/homeSlice";

export const store = configureStore({
  reducer: {
    home: homeSlice,
    profile: profileSlice,
    askHelp: askHelpSlice,
  },
});
