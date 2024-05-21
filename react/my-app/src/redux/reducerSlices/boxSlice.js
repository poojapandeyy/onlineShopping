import { createSlice } from '@reduxjs/toolkit'

const initialState = { 
    color: 'red',
   width:'50',
   height: '20'
}

const counterSlice = createSlice({
  name: 'box',
  initialState: initialState,
  reducers: {
    changeHeight(state){
        state.height= state.height+1
    }
  },
})

export const {changeHeight} = counterSlice.actions
export default boxSlice.reducer