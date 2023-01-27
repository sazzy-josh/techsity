import {createSlice} from "@reduxjs/toolkit";
// import {NotesContent} from "../../../database/index.";

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

      console.log(id);
      // Get the index of the item to remove
      const newItems = state.TaskDetails.filter((item) => item.id !== id);
      state.TaskDetails = newItems;
      localStorage.setItem("Task", JSON.stringify(state.TaskDetails));
    },

    editNote: (state, action) => {
      let itemExist = action.payload;

      const itemEdit = state.TaskDetails.find(
        (item) => item.id === itemExist.id,
      );

      itemEdit.id = itemExist.id;
      itemEdit.content = itemExist.content;
      itemEdit.createdAt = itemExist.createdAt;
      itemEdit.labels = itemExist.labels;
      itemEdit.theme = itemExist.theme;
      itemEdit.title = itemExist.title;

      localStorage.setItem("Task", JSON.stringify(state.TaskDetails));
    },
  },
});

export const {calculateTotal, addNote, removeItem, editNote} =
  NoteSlice.actions;

export default NoteSlice.reducer;
