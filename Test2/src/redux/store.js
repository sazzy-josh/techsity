import {configureStore} from "@reduxjs/toolkit";
import generalSlice from "./features/generalSlice/SliceReducer";
import notesReducer from "./features/noteSlice/notesReducer";

export const store = configureStore({
  reducer: {
    general: generalSlice,
    notes: notesReducer,
  },
});
