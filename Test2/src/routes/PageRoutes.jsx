import React from "react";
import {Routes, Route} from "react-router-dom";
import {BaseLayout} from "../layout";
import {AddNote, Dashboard, NoteDetails, UpdateNote} from "../Pages";

const PageRoutes = () => {
  return (
    <Routes>
      <Route element={<BaseLayout />}>
        <Route index element={<Dashboard />} />
        <Route path='/notes' element={<Dashboard />}>
          <Route path='addnote' element={<AddNote />} />
          <Route path='update/:id' element={<UpdateNote />} />
          <Route path=':id' element={<NoteDetails />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default PageRoutes;
