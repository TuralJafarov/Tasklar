import{useDispatch, useSelector} from 'react-redux'
import { changeCoast, changeDescription, changeName } from '../slices/formSlice';
import { addCourse } from '../slices/courseSlice';

function CourseForm() {
    const dispatch=useDispatch();
    const { name, description, coast } = useSelector((store) => {
        return {
          name: store.form.name,
          description: store.form.description,
          coast: store.form.coast,
        };
      });
      const handleSubmit =(e)=>{
        e.preventDefault();
        dispatch(addCourse({ name, description, coast }))
      }

  return (
    <>
    <h3 className="p-3">Add Course</h3>
      <div className="d-flex align-item-center justify-content-between">
      <form onSubmit={handleSubmit} className="d-flex align-items-center ">

        <div className="d-flex align-items-center">
         <label className="px-3">Name</label>
         <input type="text" className="form-control" value={name} onChange={(e)=>dispatch(changeName(e.target.value))}></input>
        </div>

        <div className="d-flex align-items-center">
         <label className="px-3">Description</label>
         <input type="textarea" className="form-control" value={description} onChange={(e)=>dispatch(changeDescription(e.target.value))}></input>
        </div>

        <div className="d-flex align-items-center">
         <label className="px-3">Coast</label>
         <input type="number" className="form-control" value={coast} onChange={(e)=>dispatch(changeCoast(e.target.value))}></input>
        </div>

        <div className="btn-group">
        <button className="btn btn-danger btn-lg">Save</button>
        </div>
      </form>

      </div>
    </>
  )
}

export default CourseForm
