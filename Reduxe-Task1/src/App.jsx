import { useDispatch, useSelector } from "react-redux"
import { decrement, increment, sifirla } from "./slicers/counterSlice"

function App() {
const deyer =useSelector((store)=>store.counter.number)
const name =useSelector((store)=>store.counter.name)
const dispatch =useDispatch()
  return (
    <div>
         <button onClick={()=>dispatch(increment())} className="btn btn-danger m-2">Artir</button>
         <h3>{deyer}</h3>
         <button onClick={()=>dispatch(decrement())} className="btn btn-danger m-2">Azalt</button>
         <button onClick={()=>dispatch(sifirla())} className="btn btn-danger m-5">Sifirla</button>
         <h1>{name}</h1>
    </div>
  )
}

export default App
