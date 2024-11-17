import CourseForm from "./components/CourseForm"
import CourseList from "./components/CourseList"
import CourseSearch from "./components/CourseSearch"
import CourseValue from "./components/CourseValue"
import './App.css'
function App() {
  return (
    <div className="container">
    <CourseForm/>
    <CourseSearch/>
    <CourseList/>
    <CourseValue/>
    </div>
  )
}

export default App
