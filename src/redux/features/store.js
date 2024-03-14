import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    
    add:(state, action)=> {
        const productToAdd=action.payload;
      const existingProduct=state.find((item)=> item.id === productToAdd)
    },
    remove:(state, action)=> {
      const cart = state.find((cart) => cart.id === action.payload)
      cart.completed = !cart.completed
    },
  },
})

export const { add, remove } = cartSlice.actions
export default cartSlice.reducer
