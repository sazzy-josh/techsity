import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";
import {removeItem} from "../../redux/features/noteSlice/notesReducer";

const NoteCard = ({...task}) => {
  const dispatch = useDispatch();
  const {id, title, content, createdAt, theme, labels} = task;

  return (
    <div
      className={`w-40 h-56 md:w-52 md:h-44 flex flex-col items-center justify-between ${
        theme == "green"
          ? "bg-green-100"
          : theme == "red"
          ? "bg-orange-100"
          : theme == "brown"
          ? "bg-amber-100"
          : "bg-sky-100"
      } rounded-2xl p-2`}
    >
      <div className='w-full flex flex-row justify-between items-center'>
        <div
          className={`rounded-full p-1 shadow-sm text-xs font-semibold ${
            labels == "Ongoing"
              ? "bg-blue-400 "
              : labels == "Completed"
              ? "bg-green-400"
              : "bg-red-400"
          }`}
        >
          <p>{labels}</p>
        </div>
        <div
          title='delete'
          className='p-1 rounded-full cursor-pointer'
          onClick={() => dispatch(removeItem(id))}
        >
          🚮
        </div>
      </div>

      <p className='text-md font-bold leading-none text-left w-full'>{title}</p>

      <div className='w-full leading-none text-left text-sm'>
        {content.length > 40 ? content.substring(0, 40) + "...." : content}
      </div>

      <div className='flex items-center justify-between w-full'>
        <p className='text-xs font-semibold'>{createdAt}</p>

        <div className='rounded-full w-8 h-8 flex items-center justify-center bg-slate-900 p-2 ml-auto cursor-pointer'>
          <Link to={`notes/update/${id}`}>
            <svg
              fill='white'
              version='1.1'
              id='Capa_1'
              width='20px'
              height='20px'
              viewBox='0 0 423.42 423.421'
            >
              <g>
                <path
                  d='M14.968,329.597l78.703,78.642L8.052,422.804c-4.468,0.796-8.751-3.488-7.956-8.017L14.968,329.597z M32.349,310.747
		l80.845,80.845l121.115-121.114l-80.846-80.845L32.349,310.747z M410.994,13.499l-0.551-0.551
		c-15.545-15.545-39.597-16.646-53.733-2.51l-20.563,20.563l56.794,56.794l20.562-20.563
		C427.64,53.096,426.539,29.044,410.994,13.499z M310.748,41.834c-2.631-2.631-6.671-2.814-9.058-0.428L284.676,58.42
		l-20.869-20.869l8.018-8.018c5.019-5.019,5.019-13.158,0-18.115c-5.019-5.019-13.158-5.019-18.115,0L115.03,149.975
		c-5.019,5.019-5.019,13.158,0,18.115c5.019,5.019,13.158,5.019,18.115,0l97.921-97.92l20.869,20.869l-80.295,80.417l80.846,80.845
		l129.988-130.05c2.387-2.387,2.203-6.426-0.429-9.058L310.748,41.834z'
                />
              </g>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NoteCard;
