import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: null,
  isAuthenticated: false,
  
}

export const counterSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
   login: (state, action) => {
    state.user = action.payload
   },
   logout: (state) => {
    state.user = null
   }
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer