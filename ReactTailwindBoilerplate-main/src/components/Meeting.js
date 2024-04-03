import React from "react"
import Calender from "./Calender"

const Meeting = () => {
  return (
    <div className="pt-7 pb-7 pr-10 pl-9 text-[27px] font-bold select-none">
      <div className="">Select a Date & Time</div>
      <Calender />
    </div>
  )
}

export default Meeting
