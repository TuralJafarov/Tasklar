import { useDispatch, useSelector } from "react-redux"
import { changeSearchTerm } from "../slices/courseSlice"


function CourseSearch() {

    const searchTerm =useSelector((store)=>store.course.searchTerm)
    const dispatch =useDispatch()
  return (
    <div className="d-flex align-items-center justify-content-between py-5">
      <h3>Courses</h3>
      <div className="d-flex align-items-center">
        <label className="mx-2">Search</label>
        <input value={searchTerm} onChange={(e)=>dispatch(changeSearchTerm(e.target.value))} type="text" className="form-control border-dark"/>
      </div>
      
    </div>
  )
}

export default CourseSearch
