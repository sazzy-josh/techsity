import React from "react";

const OverviewCard = ({title, count}) => {
  return (
    <div className='rounded-md border-2 p-1 shadow-md flex flex-col items-center justify-center w-36'>
      <h3 className='text-md font-semibold'>{title}</h3>
      <p className='font-bold text-6xl'>{count}</p>
    </div>
  );
};

export default OverviewCard;
