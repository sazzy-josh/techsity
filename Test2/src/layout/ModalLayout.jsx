import React from "react";
import {useNavigate} from "react-router-dom";

// MODAL ROOT SELECTION

const ModalLayout = ({children}) => {
  const navigate = useNavigate();

  return (
    <div className='w-screen h-screen fixed top-0 left-0 z-[999] transition-opacity duration-1000 ease-in-out'>
      <div className='w-full h-full bg-black opacity-50'></div>

      <div className='flex flex-col items-center justify-center gap-y-10 h-auto w-5/6  md:w-4/6 lg:w-2/6 bg-white fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[999] border rounded-3xl shadow-sm p-2 lg:p-4 py-10 '>
        <span
          onClick={() => navigate("/")}
          className='absolute top-2 right-3 w-7 h-7 rounded-full border-2 border-slate-500 flex justify-center items-center'
        >
          <p className=' font-medium text-black text-4xl rotate-45 cursor-pointer'>
            +
          </p>
        </span>

        {/* MODAL CONTENT */}
        {children}
      </div>
    </div>
  );
};

export default ModalLayout;
