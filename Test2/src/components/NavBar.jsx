import {useSelector, useDispatch} from "react-redux";
import {NavItems} from "../database/index.";
import {toggleSideBar} from "../redux/features/generalSlice/SliceReducer";
import Button from "./Button";

const NavBar = () => {
  const showSideBar = useSelector((state) => state.general.showSideBar);
  const dispatch = useDispatch();

  return (
    <div
      className={`flex flex-row gap-y-3 lg:hidden  text-center z-20 fixed top-0 left-0 w-full h-screen transition-all duration-700 ease-in-out overflow-hidden ${
        showSideBar ? "-translate-x-full" : "translate-x-0"
      }`}
    >
      <div className='flex flex-col items-center justify-center w-2/3 relative h-full bg-white'>
        {/* CLOSE NAVBAR CALL TO ACTION BUTTON FOR SMALL SCREENS*/}
        <div
          className='px-1 z-30 bg-white rounded fixed top-1 right-2 shadow-sm w-10 h-10 flex items-center justify-center cursor-pointer'
          onClick={() => dispatch(toggleSideBar())}
        >
          <p className='rotate-[45deg] text-6xl text-black '>+</p>
        </div>
        {/* MENU ITEMS GOES HERE */}
        <div className='flex flex-col gap-y-4 w-full'>
          {NavItems.map((item) => {
            return (
              <div
                key={item.id}
                className='font-medium w-full p-2 rounded-md cursor-pointer hover:bg-slate-200'
              >
                {item.title}
              </div>
            );
          })}
        </div>
        {/* CALL TO ACTION BUTTONS GOES HERE */}
        <div className='flex flex-col justify-center items-center gap-y-4 my-4 p-2'>
          <div className='h-14 w-28'>
            <Button
              content='LOG IN'
              bg_color='bg-blue-500'
              txt_color='text-white'
            />
          </div>
          <div className='h-14 w-auto'>
            <Button
              content='GET STARTED'
              bg_color='bg-cyan-100'
              txt_color='text-slate-600'
            />
          </div>
        </div>
      </div>
      {/* DARK SIDE OF NAVBAR */}
      <div className='w-1/3 bg-black opacity-70 h-full'></div>
    </div>
  );
};

export default NavBar;
