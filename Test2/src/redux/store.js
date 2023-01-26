import {configureStore} from "@reduxjs/toolkit";
import generalSlice from "./features/generalSlice/SliceReducer";

export const store = configureStore({
  reducer: {
    general: generalSlice,
  },
});
