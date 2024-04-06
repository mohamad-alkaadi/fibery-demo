import React, { useContext, useEffect, useState } from "react"
import {
  time,
  day,
  leapYear,
  getFirstDay,
  getDayOfWeek,
} from "../helper-functions/dateTime"
import Dates from "./Dates"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCaretDown, faEarthAmericas } from "@fortawesome/free-solid-svg-icons"
import { DemoContext } from "../App"
const Calender = () => {
  const [month, setMonth] = useState(1)
  const [year, setYear] = useState(1)
  const [startDay, setStartDay] = useState(0)
  const [endDay, setEndDay] = useState(0)
  const [activeLeftButton, setActiveLeftButton] = useState(true)
  const [activeRightButton, setActiveRightButton] = useState(true)
  const context = useContext(DemoContext)
  const now = new Date()
  const DayNumber = now.getDay()
  const yearNum = now.getFullYear()
  const months = leapYear(yearNum)
  const cleanedMonthName = months[month].name
  const monthLength = months[month].days
  const monthNumber = now.getMonth() + 1

  useEffect(() => {
    setMonth(monthNumber)
    setYear(yearNum)
  }, [])

  useEffect(() => {
    setActiveLeftButton(month > monthNumber || year > yearNum)
    setActiveRightButton(month < monthNumber + 12)
    const day = getFirstDay(year, month)
    setStartDay(day)
    setEndDay(leapYear(year)[month].days)
    context.setDateTime((prevState) => {
      return {
        ...prevState,
        month: month,
        monthName: cleanedMonthName,
        // dayName: getDayOfWeek(context.dateTime.day, month, yearNum),
      }
    })
  }, [month, year, day])

  const leftChange = () => {
    if (activeLeftButton) {
      if (month === 1) {
        setYear((y) => y - 1)
        setMonth(12)
        context.changeSelectedToFalse()
      } else {
        setMonth((m) => m - 1)
        context.changeSelectedToFalse()
      }
    }
  }

  const rightChange = () => {
    if (activeRightButton) {
      if (month === 12) {
        setYear((y) => y + 1)
        setMonth(1)
        context.changeSelectedToFalse()
      } else {
        setMonth((m) => m + 1)
        context.changeSelectedToFalse()
      }
    }
  }

  return (
    <div className="mt-10 select-none">
      <div className="text-gray-700 text-center text-[23px] mb-3">
        <button
          onClick={() => leftChange()}
          className="mr-6 w-[45px] h-[45px] rounded-full hover:bg-[#eff5ff] hover:text-[#0c5eeb]"
        >
          {"<"}
        </button>
        {cleanedMonthName} {year}
        <button
          onClick={() => rightChange()}
          className="ml-6 w-[45px] h-[45px] rounded-full hover:bg-[#eff5ff] hover:text-[#0c5eeb]"
        >
          {">"}
        </button>
      </div>
      <div className="flex justify-center items-center">
        <Dates
          month={month}
          yearNum={yearNum}
          startDay={startDay}
          endDay={endDay}
        />
      </div>
      <div className="mt-6">
        <div className="text-[21px]">Time zone</div>
        <div className="text-[21px]">
          <FontAwesomeIcon icon={faEarthAmericas} /> UK, Ireland, Lisbon Time
          (16:54){" "}
          <FontAwesomeIcon className="cursor-pointer" icon={faCaretDown} />
        </div>
      </div>
    </div>
  )
}

export default Calender
