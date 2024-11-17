import { useDispatch, useSelector } from "react-redux"
import CourseList from "./components/CourseList"
import Navbar from "./components/Navbar"
import { useEffect } from "react"
import { calculationTotal } from "./slicers/cartSlice"


function App() {
 
  const{cartItems}= useSelector((store)=>store.cart)
  const dispatch =useDispatch()

  useEffect(()=>{
    dispatch(calculationTotal())
  },[cartItems])


  return (
    <div>
    <Navbar/>
    <CourseList/>
    </div>
  )
}

export default App
