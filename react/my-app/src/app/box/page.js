import { color } from 'framer-motion'
import React from 'react'
import { useSelector } from 'react-redux'

const box = () => {
    const(color, width, height)= useSelector[state=>state.box]
  return (
    <div>
      Box
    </div>
  )
}

export default box
