import React from "react";
import {Link, useParams} from "react-router-dom";
import {Button} from "../activity-comps";

const CommonSection = () => {
  const Params = useParams();

  return (
    <div className='ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%] p-2 border-b'>
      <div className='flex items-center justify-between'>
        <h3 className='text-2xl font-bold'>All Notes</h3>
        <div className='w-28 h-12 -p-2'>
          <Link to={"notes/addnote"}>
            <Button
              content='+ Add Task'
              bg_color='text-white bg-gradient-to-r from-sky-600 to-cyan-400'
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CommonSection;
