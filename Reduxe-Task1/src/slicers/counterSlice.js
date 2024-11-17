import { createSlice } from "@reduxjs/toolkit";

const initialState={
    number:0,
    name:"Tural Jafarov"
}

export const counterSlice =createSlice({
   name:"counter",
   initialState,
   reducers:{
        increment:(state)=>{
            state.number +=1
        },
        decrement:(state)=>{
            state.number -=1
        },
        sifirla:(state)=>{
            state.number=0
        },
   }
})

export const {increment,decrement,sifirla}=counterSlice.actions

export default counterSlice.reducer





