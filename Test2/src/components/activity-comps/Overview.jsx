import React from "react";
import {Greeting} from "../global-comps";
import OverviewCard from "./OverviewCard";

const Overview = () => {
  return (
    <div className='w-full justify-end items-center'>
      <div className='p-2 mx-2 flex justify-end'>
        <Greeting text_size='xs' />
      </div>
      <div className='w-full p-2 flex items-center justify-center bg-slate-50 h-40'>
        <div className='w-[95%] md:w-[3/4] flex gap-x-1 items-center justify-center h-5/6 bg-slate-300 rounded-lg lg:rounded-full p-2'>
          <OverviewCard title='Total Notes' count='0' />
          <OverviewCard title='Ongoing' count='0' />
          <OverviewCard title='Completed' count='0' />
        </div>
      </div>
    </div>
  );
};

export default Overview;
