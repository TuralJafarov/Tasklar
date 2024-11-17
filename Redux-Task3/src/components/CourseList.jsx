import { useDispatch, useSelector } from "react-redux";
import { removeCourse } from "../slices/courseSlice";

function CourseList() {
  const { searchTerm, data } = useSelector(({ course }) => course);

  const filteredCourses = data.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const dispatch = useDispatch();

  return (
    <div>
      {filteredCourses.map((item) => (
        <div className="d-flex flex-column justify-content-between align-items-center border border-2 p-2 rounded-2 mb-3" key={item.id}>
          <h3>{item.name}</h3>
          <p>{item.description}</p>
          <p>{item.coast} $</p>
          <button
            onClick={() => dispatch(removeCourse(item.id))} 
            className="btn btn-danger">
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default CourseList;
