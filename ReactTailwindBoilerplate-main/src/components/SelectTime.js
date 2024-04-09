import React, { useContext, useState } from "react"
import {
  time,
  getMonth,
  convertTimeToInt,
  getTime,
  getDay,
} from "../helper-functions/dateTime"
import { DemoContext } from "../App"

const SelectTime = () => {
  const [timeSelected, setTimeSelected] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(-1)
  const context = useContext(DemoContext)
  const handleNext = (e, t) => {
    context.setDateTime((prevState) => ({ ...prevState, time: t }))
    context.setTimeConfirmed(true)
    e.stopPropagation()
  }
  const handleBack = () => {
    setSelectedIndex(-1)
    context.handleSelectTime("")
  }
  const thisMonth = getMonth()
  const timeNow = getTime()
  const dayNow = getDay()

  function render(t, index) {
    if (
      thisMonth === context.dateTime.month &&
      convertTimeToInt(t) <= convertTimeToInt(timeNow) &&
      dayNow == context.dateTime.day
    ) {
      return (
        <div
          className="h-[61px] xl:w-[215px] sm:w-[200px] xsm:w-[170px] text-[19px] text-[#fff] bg-[#4b5563] font-bold rounded-md mb-[12px] flex justify-center items-center
          "
        >
          {t}
        </div>
      )
    } else {
      return (
        <button
          className="h-[61px] xl:w-[215px] sm:w-[200px] xsm:w-[170px] text-[19px] text-[#0269fe] font-bold rounded-md border mb-[12px] border-[2px] border-[#8daaea] hover:bg-[#0269fe] hover:text-white hover:border-none"
          onClick={() => setSelectedIndex(index)}
        >
          {t}
        </button>
      )
    }
  }
  return (
    <div className="xl:w-[280px] sm:pl-5 xl:h-[753px] bg-white">
      <div className="text-[20px] xl:pt-[110px] md:pt-[20px] sm:pt-[5px] xl:mb-[43px] sm:mb-[20px] xsm:mb-5 ">
        {context.dateTime.dayName}, {context.dateTime.monthName}{" "}
        {context.dateTime.day}
      </div>
      <div className="overflow-auto xl:h-[504px] xsm:h-[144px] xsm:grid xsm:grid-cols-2 xl:block">
        {time.map((t, index) => (
          <div className="md:col-span-1" key={index}>
            {selectedIndex !== index ? (
              render(t, index)
            ) : (
              <div key={index} className="md:col-span-1 flex">
                <button
                  className="h-[61px] xl:w-[105px] sm:w-[97px] xsm:w-[90px] xsm:mr-[2px] sm:mr-[6px] text-[19px] text-[#fff] bg-[#666666] font-bold rounded-md  mb-[12px] border-none hover:bg-[#7c7c7c] hover:border-none"
                  onClick={handleBack}
                >
                  {t}
                </button>
                <button
                  onClick={(e) => handleNext(e, t)}
                  className="h-[61px] xl:w-[105px] sm:w-[97px] xsm:w-[90px] xsm:mr-[4px] sm:mr-0 text-[19px] text-[#fff] bg-[#0269fe] font-bold rounded-md mb-[12px] border-none hover:bg-[#0269fe] hover:bg-[#1272fe] hover:text-white "
                >
                  Next
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default SelectTime
