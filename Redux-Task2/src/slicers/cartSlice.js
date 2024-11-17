import{createSlice} from '@reduxjs/toolkit'
import courseItems from '../components/courseItems'

const initialState={
  cartItems:courseItems,
  quantity:4,
  total:0
}

const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
       clearCart: (state)=>{
          state.cartItems=[]
       },
       removeItem: (state,action)=>{
        const itemId=action.payload
        state.cartItems =state.cartItems.filter((item)=>item.id !== itemId)
       },
       increment:(state,action)=>{
        const cartItem =state.cartItems.find((item)=>item.id === action.payload)
        cartItem.quantity +=1
       },
       decrement: (state, action) => {
        const cartItem = state.cartItems.find(item => item.id === action.payload);
        if (cartItem && cartItem.quantity > 0) {
          cartItem.quantity -= 1;
        }
      },

      calculationTotal:(state)=>{
        let total=0
        let quantity=0
        state.cartItems.forEach((item)=>(
          total += item.quantity * item.price,
          quantity += item.quantity
        )),
        state.quantity=quantity
        state.total=total 
      }
      

    }
})

export const { clearCart, removeItem, increment, decrement, calculationTotal }  =cartSlice.actions

export default cartSlice.reducer