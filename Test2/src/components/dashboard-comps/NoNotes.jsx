import {EmptyIcon} from "../../assets";

const NoNotes = () => {
  return (
    <div className='flex w-full h-full justify-center items-center'>
      <div className='flex flex-col items-center gap-y-2 justify-center w-full h-full p-10'>
        <span>
          <img src={EmptyIcon} alt='EmptyIcon' className='w-36 h-36' />
        </span>
        <h2 className='font-bold text-slate-500 tracking-normal'>
          Oops!!Noting to see in here
        </h2>
      </div>
    </div>
  );
};

export default NoNotes;
