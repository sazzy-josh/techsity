import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";
import {Button} from "../components";
import {ModalLayout} from "../layout";
import {editNote} from "../redux/features/noteSlice/notesReducer";

const UpdateNote = () => {
  const {id} = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const note = useSelector((state) => state.notes.TaskDetails);

  const [values, setValues] = useState({
    id: "",
    title: "",
    content: "",
    createdAt: "",
    theme: "",
    labels: "",
  });

  useEffect(() => {
    const EditNote = note.find((item) => item.id == id);

    setValues({
      id: EditNote?.id,
      title: EditNote?.title,
      content: EditNote?.content,
      createdAt: EditNote?.createdAt,
      theme: EditNote?.theme,
      labels: EditNote?.labels,
    });
    // console.log("task", EditNote);
  }, [id]);

  function handleChange(e) {
    const {name, value} = e.target;

    setValues({...values, [name]: value});
  }

  function handleEdit(e) {
    e.preventDefault();
    dispatch(editNote(values));
    navigate(-1);
  }

  return (
    <ModalLayout>
      <div className='flex flex-col w-full h-full gap-y-2'>
        <h4 className='text-xl font-bold text-slate-800 text-center'>
          Edit Note
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

        <div className='flex flex-col gap-y-1'>
          <label
            htmlFor='labelColor'
            className='font-medium text-slate-700 text-md'
          >
            Label{" "}
          </label>

          <select
            name='labels'
            className='border rounded-lg p-2 focus:outline-none'
            value={values.labels}
            onChange={(e) => handleChange(e)}
          >
            <option value=''>Select Label</option>
            <option value='Completed'>Completed</option>
            <option value='Ongoing'>Ongoing</option>
            <option value='Backlog'>Backlog</option>
          </select>
        </div>
      </div>

      <div className='w-full h-12'>
        <Button
          content={"Add Note"}
          bg_color='text-white bg-gradient-to-r from-sky-600 to-cyan-400'
          handleClick={handleEdit}
        />
      </div>
    </ModalLayout>
  );
};

export default UpdateNote;
