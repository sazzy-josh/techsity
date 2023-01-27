import React, {useState} from "react";
import {Button} from "../components";
import {ModalLayout} from "../layout";
import {v4 as uuidv4} from "uuid";
import {format} from "date-fns";
import {useDispatch} from "react-redux";
import {addNote} from "../redux/features/noteSlice/notesReducer";
import {useNavigate} from "react-router-dom";

const AddNote = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [values, setValues] = useState({
    id: uuidv4(),
    title: "",
    content: "",
    createdAt: getFormattedDate(),
    labels: "Ongoing",
    theme: "",
  });

  function handleChange(e) {
    const {name, value} = e.target;

    setValues({...values, [name]: value});
  }

  function getFormattedDate() {
    const date = new Date();

    // "do, MMM, yyyy" will output "12th, Dec, 2022"
    const formattedDate = format(date, "do, MMM, yyyy");

    // Return the formatted date
    return formattedDate;
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(addNote(values));
    navigate(-1);
  }

  return (
    <ModalLayout>
      <div className='flex flex-col w-full h-full gap-y-2'>
        <h4 className='text-xl font-bold text-slate-800 text-center'>
          Add New Note
        </h4>

        <div className='flex flex-col gap-y-1'>
          <label htmlFor='noteTitle' className='font-medium'>
            Title{" "}
          </label>
          <input
            type='text'
            name='title'
            placeholder='Note title...'
            className='border rounded-lg p-2 focus:outline-none'
            value={values.title}
            onChange={(e) => handleChange(e)}
          />
        </div>

        <div className='flex flex-col gap-y-1'>
          <label htmlFor='noteTitle' className='font-medium'>
            Content{" "}
          </label>

          <textarea
            name='content'
            rows={4}
            placeholder='Task content...'
            className='border rounded-lg p-2 focus:outline-none'
            value={values.content}
            onChange={(e) => handleChange(e)}
          ></textarea>
        </div>

        <div className='flex flex-col gap-y-1'>
          <label
            htmlFor='labelColor'
            className='font-medium text-slate-700 text-md'
          >
            Theme{" "}
          </label>

          <select
            name='theme'
            className='border rounded-lg p-2 focus:outline-none'
            value={values.theme}
            onChange={(e) => handleChange(e)}
          >
            <option value=''>Select color</option>
            <option value='red'>Red</option>
            <option value='blue'>Blue</option>
            <option value='green'>Green</option>
            <option value='brown'>Brown</option>
          </select>
        </div>
      </div>

      <div className='w-full h-12'>
        <Button
          content={"Add Note"}
          bg_color='text-white bg-gradient-to-r from-sky-600 to-cyan-400'
          handleClick={handleSubmit}
        />
      </div>
    </ModalLayout>
  );
};

export default AddNote;
