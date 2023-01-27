import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {calculateTotal} from "../../redux/features/noteSlice/notesReducer";
import {Greeting} from "../global-comps";
import OverviewCard from "./OverviewCard";

const Overview = () => {
  const countDetails = useSelector((state) => state.notes);
  const dispatch = useDispatch();
  const {Ongoing, Backlogs, Completed, TaskDetails} = countDetails;

  useEffect(() => {
    dispatch(calculateTotal());
  }, [TaskDetails]);

  return (
    <div className='w-full justify-end items-center border-b'>
      <div className='p-2 mx-2 flex justify-end'>
        <Greeting text_size='xs' />
      </div>
      <div className='w-full p-2 flex items-center justify-center bg-slate-50 h-40 shadow-lg'>
        <div className='w-[95%] md:w-[3/4] flex gap-x-1 lg:gap-x-3 items-center justify-center h-5/6 bg-slate-200 rounded-lg  shadow-md lg:rounded-full p-2'>
          <OverviewCard
            title='Total Notes'
            count={countDetails.TaskDetails.length}
          />
          <OverviewCard title='Ongoing' count={Ongoing} />
          <OverviewCard title='Completed' count={Completed} />
        </div>
      </div>
    </div>
  );
};

export default Overview;
