import { createSlice } from '@reduxjs/toolkit'

const initialState = { 
    backgroundColor: 'red',
   width:'50',
   height: '20'
}

const boxSlice = createSlice({
  name: 'counter',
  initialState: initialState,
  reducers: {
    changeHeight(state){
        state.height= state.height+1
    }
  },
})

export const {changeHeight} = boxSlice.actions
export default boxSlice.reducer