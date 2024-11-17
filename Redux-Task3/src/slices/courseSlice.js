import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState={
    searchTerm:'',
    data:[]
}

export const courseSlice = createSlice({
    name:'course',
    initialState,
    reducers:{
        addCourse:(state,action)=>{
            state.data.push({
                name:action.payload.name,
                description:action.payload.description,
                coast:action.payload.coast,
                id:nanoid()
            })
        },
          changeSearchTerm:(state,action)=>{
            state.searchTerm=action.payload
          },
            removeCourse:(state,action)=>{
                const updateCourse =state.data.filter((item)=>item.id!==action.payload)
                state.data=updateCourse
            }
    }

})

export const {addCourse,removeCourse,changeSearchTerm} =courseSlice.actions


export default courseSlice.reducer