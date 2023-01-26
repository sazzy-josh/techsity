import React from "react";

const NoteCard = () => {
  return (
    <div className='w-40 h-56 md:w-52 md:h-44 flex flex-col items-center justify-between bg-slate-100 rounded-2xl p-2'>
      <div className='w-full flex flex-row justify-between'>
        <div className='hidden lg:block rounded-full p-1 bg-green-300 text-xs font-semibold'>
          #NT-123
        </div>
        <div className='rounded-full p-1 bg-green-300 text-xs font-semibold'>
          <p>Ongoing</p>
        </div>
      </div>

      <p className='text-md font-bold leading-none'>
        Get started with Typescript
      </p>

      <div className='flex leading-none text-sm'>
        {"Lorem  ipsum dolor sit amet consectetur adipisicing  ipsum dolor sit amet consectetur adipisicing ipsum dolor sit amet consectetur adipisicing elit. Ab, cupiditate lorem ko".substring(
          0,
          40,
        ) + "...."}
      </div>

      <div className='rounded-full w-12 h-12 flex items-center justify-center bg-blue-300 text-black p-2 ml-auto'>
        🖊
      </div>
    </div>
  );
};

export default NoteCard;
