import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  showSideBar: false,
};

const generalSlice = createSlice({
  name: "general",
  initialState,
  reducers: {
    toggleSideBar: (state) => {
      state.showSideBar = !state.showSideBar;
      console.log(state.showSideBar);
    },
  },
});

export const {toggleSideBar} = generalSlice.actions;

export default generalSlice.reducer;
