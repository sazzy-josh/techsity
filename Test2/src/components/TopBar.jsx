import React from "react";
import {Link} from "react-router-dom";
import {NoteIcon} from "../assets";
import {useDate} from "../hooks";

const TopBar = () => {
  const day = useDate();

  return (
    <div className='ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%] p-2'>
      <div className='sticky z-10 top-0 h-16 lg:border-b bg-white lg:py-2.5'>
        <div className='px-6 flex items-center justify-between space-x-4 2xl:container'>
          <h5 hidden className='text-2xl text-gray-600 font-medium lg:block'>
            Hey, 👋🏼 It's {day}
          </h5>

          <Link to='/'>
            <div className='w-12 h-12 flex justify-center items-center gap-x-1 lg:hidden'>
              <img src={NoteIcon}></img>
              <h6 className='text-slate-600 font-semibold text-lg'>Nothy</h6>
            </div>
          </Link>

          <div className='w-12 h-16 flex items-center justify-center lg:hidden -mr-10'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              class='h-8 w-8 -mr-10'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                d='M4 6h16M4 12h16M4 18h16'
              />
            </svg>
          </div>

          <div className='hidden lg:flex space-x-4 '>
            <button
              aria-label='chat'
              class='w-10 h-10 rounded-xl border bg-gray-100 focus:bg-gray-100 active:bg-gray-200'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                class='h-5 w-5 m-auto text-gray-600'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z'
                />
              </svg>
            </button>
            <button
              aria-label='notification'
              class='w-10 h-10 rounded-xl border bg-gray-100 focus:bg-gray-100 active:bg-gray-200'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                class='h-5 w-5 m-auto text-gray-600'
                viewBox='0 0 20 20'
                fill='currentColor'
              >
                <path d='M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z' />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
