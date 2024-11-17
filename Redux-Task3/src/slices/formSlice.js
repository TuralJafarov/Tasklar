import { createSlice } from "@reduxjs/toolkit";
import { addCourse } from "./courseSlice";

const initialState={
    name:'',
    description:'',
    coast:0
}

export const formSlice= createSlice({
    name:'form',
    initialState,
    reducers:{
        changeName:(state,action)=>{
            state.name=action.payload
        },
        changeDescription:(state,action)=>{
          state.description=action.payload
        },
        changeCoast:(state,action)=>{
            state.coast=action.payload
        }
    },
    extraReducers(builder){
        builder.addCase(addCourse,(state,action)=>{
            state.name='';
            state.description='';
            state.coast='';
        })

    }

})

export const{ changeName, changeDescription, changeCoast }=formSlice.actions

export default formSlice.reducer