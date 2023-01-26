import {useSelector, useDispatch} from "react-redux";
import {Link} from "react-router-dom";
import {NoteIcon} from "../../assets";
import {toggleSideBar} from "../../redux/features/generalSlice/SliceReducer";

const NavBar = () => {
  const showSideBar = useSelector((state) => state.general.showSideBar);
  const dispatch = useDispatch();

  return (
    <div
      className={`flex flex-row gap-y-3 lg:hidden  text-center z-20 fixed top-0 left-0 w-full h-screen transition-all duration-700 ease-in-out overflow-hidden ${
        !showSideBar ? "-translate-x-full" : "translate-x-0"
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

        <div>
          <div class='-mx-6 px-6 py-4'>
            <Link to={"/"}>
              <div className='w-10 h-10'>
                <img src={NoteIcon} alt='note' />
              </div>
            </Link>
          </div>

          <ul class='space-y-2 tracking-wide mt-8'>
            <li>
              <a
                href='#'
                aria-label='dashboard'
                class='relative px-4 py-3 flex items-center space-x-4 rounded-xl text-white bg-gradient-to-r from-sky-600 to-cyan-400'
              >
                <svg class='-ml-1 h-6 w-6' viewBox='0 0 24 24' fill='none'>
                  <path
                    d='M6 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8ZM6 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-1Z'
                    class='fill-current text-cyan-400 dark:fill-slate-600'
                  ></path>
                  <path
                    d='M13 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2V8Z'
                    class='fill-current text-cyan-200 group-hover:text-cyan-300'
                  ></path>
                  <path
                    d='M13 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-1Z'
                    class='fill-current group-hover:text-sky-300'
                  ></path>
                </svg>
                <span class='-mr-1 font-medium'>Notes</span>
              </a>
            </li>
            <li>
              <Link
                to='/'
                class='px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  class='h-5 w-5'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                >
                  <path
                    class='fill-current text-gray-300 group-hover:text-cyan-300'
                    fill-rule='evenodd'
                    d='M2 6a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1H8a3 3 0 00-3 3v1.5a1.5 1.5 0 01-3 0V6z'
                    clip-rule='evenodd'
                  />
                  <path
                    class='fill-current text-gray-600 group-hover:text-cyan-600'
                    d='M6 12a2 2 0 012-2h8a2 2 0 012 2v2a2 2 0 01-2 2H2h2a2 2 0 002-2v-2z'
                  />
                </svg>
                <span class='group-hover:text-gray-700'>Ongoing Task</span>
              </Link>
            </li>
            <li>
              <Link class='px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  class='h-5 w-5'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                >
                  <path
                    class='fill-current text-gray-600 group-hover:text-cyan-600'
                    fill-rule='evenodd'
                    d='M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z'
                    clip-rule='evenodd'
                  />
                  <path
                    class='fill-current text-gray-300 group-hover:text-cyan-300'
                    d='M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z'
                  />
                </svg>
                <span class='group-hover:text-gray-700'>Completed Task</span>
              </Link>
            </li>
            <li>
              <Link class='px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  class='h-5 w-5'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                >
                  <path
                    class='fill-current text-gray-600 group-hover:text-cyan-600'
                    d='M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z'
                  />
                  <path
                    class='fill-current text-gray-300 group-hover:text-cyan-300'
                    d='M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z'
                  />
                </svg>
                <span class='group-hover:text-gray-700'>Retrospective</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {/* DARK SIDE OF NAVBAR */}
      <div className='w-1/3 bg-black opacity-70 h-full'></div>
    </div>
  );
};

export default NavBar;
