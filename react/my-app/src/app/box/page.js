'use client'
import React from 'react'
import { useSelector } from 'react-redux'

const box = () => {
    const {height, width, backgroundColor}= useSelector(state=>state.box)
  return (
    <div>
      <div style={{backgroundColor: backgroundColor, height: height, width:width }}>
        
        </div>
  
    </div>
  )
}

export default box
