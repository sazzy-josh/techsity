import React from "react";
import {useSelector} from "react-redux";
import {Outlet} from "react-router-dom";
import {NoNote, NoteCard} from "../components";

const Dashboard = () => {
  const allTask = useSelector((state) => state.notes.TaskDetails);

  return (
    //Layout
    <div className='ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%] p-4'>
      <>
        {allTask ? (
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 items-center justify-items-center'>
            {allTask.map((task) => {
              return <NoteCard key={task.id} {...task} />;
            })}
          </div>
        ) : (
          <NoNote />
        )}
      </>
      <Outlet />
    </div>
  );
};

export default Dashboard;
