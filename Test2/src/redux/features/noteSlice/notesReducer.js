import {createSlice} from "@reduxjs/toolkit";
import {NotesContent} from "../../../database/index.";

const task = localStorage.getItem("Task")
  ? JSON.parse(localStorage.getItem("Task"))
  : NotesContent;

const initialState = {
  TaskDetails: task,
  Completed: 0,
  Ongoing: 0,
  Backlogs: 0,
};

const NoteSlice = createSlice({
  name: "noteSlice",
  initialState,
  reducers: {
    addNote: (state, action) => {},

    calculateTotal: (state) => {
      const countdetails = state.TaskDetails;

      let CompletedTask = countdetails.filter(
        (item) => item.labels[0]["title"] === "Completed",
      );

      let OngoingTask = countdetails.filter(
        (item) => item.labels[0]["title"] === "Ongoing",
      );

      let allBacklogs = countdetails.filter(
        (item) => item.labels[0]["title"] === "Backlog",
      );

      state.Completed = CompletedTask.length;
      state.Ongoing = OngoingTask.length;
      state.Backlogs = allBacklogs.length;
    },

    removeItem: (state, action) => {
      const id = action.payload.id;
    },
  },
});

export const {calculateTotal, addNote} = NoteSlice.actions;

export default NoteSlice.reducer;
