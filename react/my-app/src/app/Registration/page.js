import React from 'react'
import {Input} from "@nextui-org/react";

const page = () => {
  return (
    <div>
      <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
      <Input type="email" label="Email" placeholder="Enter your email" />
    </div>
    <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
      <Input type="email" label="Email" placeholder="Enter your email" />
    </div>
    <div className="flex w-1/2 flex-wrap md:flex-nowrap gap-4">
      <Input type="email" label="Email" placeholder="Enter your email" />
    </div>
    </div>
  )
}

export default page
