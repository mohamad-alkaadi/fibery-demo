import React, { useContext } from "react"
import Calender from "./Calender"
import { DemoContext } from "../App"
import SelectTime from "./SelectTime"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCaretDown, faEarthAmericas } from "@fortawesome/free-solid-svg-icons"

const Meeting = ({ month, setMonth }) => {
  const context = useContext(DemoContext)

  return (
    <div className="flex">
      <div className="bg-white col-span-1 lg:w-[494px] sm:w-[532px] xsm:w-[350px]">
        <div className="md:pt-7 sm:pb-7 sm:pr-0 xsm:pl-0 xsm:pt-5 xsm:pr-0 md:text-[27px] sm:text-[22px] select-none sm:pt-4">
          <div className="sm:mb-4 xsm:mb-4 xsm:ml-3 sm:ml-0 xsm:text-[20px] sm:text-[22px] md:text-[25px] sm:pl-5">
            Select a Date & Time
          </div>
          <Calender month={month} setMonth={setMonth} />
          <div className="block xl:hidden">
            {context.isTimeSelected ? (
              <div>
                <SelectTime month={month} />
              </div>
            ) : null}
          </div>
          <div className="xl:mt-6 md:mt-[20px] xsm:mt-[10px] xsm:mb-[20px] sm:pl-5 ">
            <div className="md:text-[21px] sm:text-[17px] mb-2 font-medium">
              Time zone
            </div>
            <div className="md:text-[18px] sm:text-[17px] ml-2 font-light">
              <FontAwesomeIcon icon={faEarthAmericas} className="mr-1" /> UK,
              Ireland, Lisbon Time (16:54){" "}
              <FontAwesomeIcon className="cursor-pointer" icon={faCaretDown} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Meeting
