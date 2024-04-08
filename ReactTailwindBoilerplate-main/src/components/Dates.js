import React, { useContext, useEffect, useState } from "react"
import { DemoContext } from "../App"
import { day, getDay, getDayOfWeek } from "../helper-functions/dateTime"

const Dates = ({ startDay, endDay, month, yearNum }) => {
  const [pastDays, setPastDays] = useState(0)
  const now = new Date()
  const thisMonth = now.getMonth()
  const [dotHidden, setDotHidden] = useState(false)
  const [selctedDay, setSelectedDay] = useState(0)

  const context = useContext(DemoContext)
  const handleClick = (dayCounter, e) => {
    context.changeSelected()
    if (selctedDay === e.target.textContent) {
      context.changeSelectedToFalse()
      setSelectedDay(0)
    } else {
      setSelectedDay(e.target.textContent)
      context.changeSelectedToTrue()

      context.setDateTime((prevState) => ({
        ...prevState,
        dayName: getDayOfWeek(e.target.textContent, month, yearNum),
      }))
    }
  }

  // useEffect(() => {
  //   console.log("im here")
  //   const today = now.getDay()
  //   setPastDays(today)
  // }, [])

  useEffect(() => {
    const today = now.getDate()
    setPastDays(today)
  }, [startDay])

  useEffect(() => {
    context.setDateTime((prevState) => ({
      ...prevState,
      day: selctedDay,
    }))
  }, [selctedDay])

  const generateCells = () => {
    let cells = []
    let dayCounter = 1

    function render() {
      if (dayCounter === pastDays && thisMonth + 1 === month) {
        return (
          <button
            className={`w-[45px] h-[45px] rounded-full relative hover:bg-[#0269fe] hover:text-white
            `}
            onMouseEnter={() => setDotHidden(true)}
            onMouseLeave={() => setDotHidden(false)}
            onClick={(e) => handleClick(dayCounter, e)}
          >
            {dayCounter}
            <span
              className={`absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-gray-600 rounded-full hover:bg-[#0269fe] ${
                dotHidden ? "hidden" : ""
              }`}
            ></span>
          </button>
        )
      } else if (dayCounter < pastDays && thisMonth + 1 === month) {
        return <div>{dayCounter} </div>
        // } else if (dayCounter > pastDays && thisMonth + 1 === month) {
      } else {
        return (
          <button
            className={`w-[45px] h-[45px] rounded-full bg-[#eff5ff] text-[#0c5eeb] hover:bg-[#0269fe] hover:text-white `}
            onClick={(e) => handleClick(dayCounter, e)}
          >
            {dayCounter}{" "}
          </button>
        )
      }
    }

    for (let i = 1; i < startDay; i++) {
      cells.push(<td key={`empty-${i}`}></td>)
    }

    for (let i = startDay; i < 8; i++) {
      cells.push(
        <td
          className="text-gray-600 pr-[10px] pl-[10px] m-auto text-center text-[22px] pt-[10px] pb-[10px]"
          key={dayCounter}
        >
          {render()}
        </td>
      )
      dayCounter++
    }
    while (dayCounter <= 35) {
      let rowCells = []
      for (let i = 0; i < 7; i++) {
        if (dayCounter <= endDay) {
          rowCells.push(
            <td
              className="text-gray-600 pr-[10px] pl-[10px] m-auto text-center text-[22px] pt-[10px] pb-[10px] "
              key={dayCounter}
            >
              {render()}
            </td>
          )
          dayCounter++
        } else {
          rowCells.push(<td key={`empty-${dayCounter}`}></td>)
          dayCounter++
        }
      }
      cells.push(<tr key={`row-${dayCounter / 7}`}>{rowCells}</tr>)
    }

    return cells
  }

  return (
    <table className="m-auto">
      <thead>
        <tr className="text-gray-600 text-[16px] ">
          <td className="pr-[10px] pl-[10px] m-auto text-center pt-[10px] pb-[10px]">
            MON
          </td>
          <td className="pr-[10px] pl-[10px] m-auto text-center">TUE</td>
          <td className="pr-[10px] pl-[10px] m-auto text-center">WED</td>
          <td className="pr-[10px] pl-[10px] m-auto text-center">THU</td>
          <td className="pr-[10px] pl-[10px] m-auto text-center">FRI</td>
          <td className="pr-[10px] pl-[10px] m-auto text-center">SAT</td>
          <td className="pr-[10px] pl-[10px] m-auto text-center">SUN</td>
        </tr>
      </thead>
      <tbody>{generateCells()}</tbody>
    </table>
  )
}

export default Dates
