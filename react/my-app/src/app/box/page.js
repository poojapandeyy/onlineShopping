'use client'
import { changeBackgroundColor, changeHeight, changeShape, changeWidth } from '@/redux/reducerSlices/boxSlice'
import { Button,Input } from '@nextui-org/react'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'




const box = () => {
    const {height, width, backgroundColor, borderRadius}= useSelector(state=>state.box)
    const dispatch = useDispatch()
  return (
    <div>
      <div style={{backgroundColor: backgroundColor, height: height, width:width, borderRadius:borderRadius}}>
       hii
        </div>
        
        <Button onClick={()=>dispatch(changeHeight())}>+height</Button>
        <Button onClick={()=>dispatch(changeWidth())}>+width</Button>
        <Button onClick={()=>dispatch(changeShape())}>Change to circle</Button>
        <Input onChange={(e)=>dispatch(changeBackgroundColor(e.target.value)) } placeholder='Enter color'/>
        
    </div>
  )
}

export default box
