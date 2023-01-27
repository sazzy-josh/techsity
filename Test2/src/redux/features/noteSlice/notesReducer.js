import {createSlice} from "@reduxjs/toolkit";
import {NotesContent} from "../../../database/index.";

const task = localStorage.getItem("Task")
  ? JSON.parse(localStorage.getItem("Task"))
  : [];

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
    addNote: (state, action) => {
      const newNote = action.payload;
      state.TaskDetails.push(newNote);
      localStorage.setItem("Task", JSON.stringify(state.TaskDetails));
    },

    calculateTotal: (state) => {
      const countdetails = state.TaskDetails;

      let CompletedTask = countdetails.filter(
        (item) => item.labels === "Completed",
      );

      let OngoingTask = countdetails.filter(
        (item) => item.labels === "Ongoing",
      );

      let allBacklogs = countdetails.filter(
        (item) => item.labels === "Backlog",
      );

      state.Completed = CompletedTask.length;
      state.Ongoing = OngoingTask.length;
      state.Backlogs = allBacklogs.length;
    },

    removeItem: (state, action) => {
      const id = action.payload;

      //Find & grab item
      const itemId = state.TaskDetails.find((item) => item.id === id);

      // Get the index of the item to remove
      const itemIndex = state.TaskDetails.indexOf(itemId);
      state.TaskDetails.splice(itemIndex, 1);
      localStorage.setItem("Task", JSON.stringify(state.TaskDetails));
    },

    editNote: (state, action) => {
      const itemId = action.payload;

      const existingItem = state.TaskDetails.find(
        (item) => item.id === itemId.id,
      );
    },
  },
});

export const {calculateTotal, addNote, removeItem} = NoteSlice.actions;

export default NoteSlice.reducer;
