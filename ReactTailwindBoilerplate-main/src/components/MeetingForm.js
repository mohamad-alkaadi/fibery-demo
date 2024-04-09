import { faCalendar, faClock } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React, { useContext, useState } from "react"
import logo from "../assets/logo.png"
import Meeting from "./Meeting"
import SelectTime from "./SelectTime"
import { DemoContext } from "../App"
import MeetingDetails from "./MeetingDetails"
import { faArrowLeft, faEarthAmericas } from "@fortawesome/free-solid-svg-icons"
import { addMinutesToTime } from "../helper-functions/dateTime"
// import {}
const MeetingForm = () => {
  const [month, setMonth] = useState(1)
  const context = useContext(DemoContext)
  function handleBack() {
    context.setTimeConfirmed(false)
    context.changeSelectedToFalse()
  }
  function render() {
    if (!context.timeConfirmed) {
      return (
        <div className="flex">
          <div className="bg-white col-span-1 lg:w-[494px]">
            <Meeting month={month} setMonth={setMonth} />
          </div>
          <div className="hidden xl:block">
            {context.isTimeSelected ? (
              <div>
                <SelectTime month={month} />
              </div>
            ) : null}
          </div>
        </div>
      )
    } else {
      return (
        <div>
          <MeetingDetails />
        </div>
      )
    }
  }
  return (
    <div className="flex xsm:flex-col md:flex-row overflow-auto sm:h-[800px] xsm:h-[640px] md:h-auto">
      <div
        className={`border-r-[1px] sm:flex-col sm:flex md:block md:min-w-[300px] sm:min-w-[399px] ${
          context.timeConfirmed ? "lg:w-[389px]" : "lg:w-[493px]"
        }`}
      >
        <div className="bg-white sm:h-[150px] xsm:pb-4 xsm:pt-4 md:h-[213px] xl:h-[223px] sm:w-[532px] md:w-auto flex justify-center items-center border-b-[1px] relative">
          {context.timeConfirmed ? (
            <button
              onClick={() => handleBack()}
              className="absolute cursor-pointer left-0 top-0 lg:ml-9 lg:mt-9 xsm:ml-5 xsm:mt-5 text-[27px] text-[#0071fc] hover:text-[#fff] hover:bg-[#0071fc] border-[1px] w-[52px] h-[52px] flex justify-center items-center rounded-full pointer-events-auto"
            >
              <FontAwesomeIcon icon={faArrowLeft} />
            </button>
          ) : null}
          <img
            src={logo}
            alt="logo"
            className="mx-auto md:scale-100 md:w-auto sm:scale-75 xsm:w-[130px]"
          />
        </div>
        <div
          className={`bg-white md:w-auto sm:w-[532px] pt-5 pb-7 xsm:pb-3 xsm:pl-3 sm:pr-10 md:pl-9 md sm:pl-2 xsm:border-b-[1px] sm:border-b-black md:border-b-0 ${
            context.timeConfirmed
              ? "xl:h-[568px] md:h-[645px]"
              : "xl:h-[528px] md:h-[645px]"
          } flex flex-col justify-between `}
        >
          <div className="sm:pl-5 md:pl-0">
            <h1 className="mb-6 xsm:text-[20px] font-medium sm:text-[25px] md:text-[32px]">
              Fibery Demo
            </h1>
            <div className="text-gray-500 mb-6 font-medium flex justify-start items-center md:text-[20px] xsm:text-[18px] sm:text-[22px]">
              <FontAwesomeIcon icon={faClock} />
              <div className="ml-3">45 min</div>
            </div>
            {context.timeConfirmed ? (
              <div className="text-gray-500 font-medium mb-6 md:text-[20px] xsm:text-[18px] sm:text-[22px] flex justify-start items-center">
                <FontAwesomeIcon icon={faCalendar} />
                <div className="ml-3">
                  {context.dateTime.time} -{" "}
                  {addMinutesToTime(context.dateTime.time, 45)},{" "}
                  {context.dateTime.dayName},
                  <br />
                  {context.dateTime.monthName} {context.dateTime.day},{" "}
                  {context.dateTime.year}
                </div>
              </div>
            ) : null}
            {context.timeConfirmed ? (
              <div className="text-gray-500 font-medium mb-6 md:text-[20px] xsm:text-[18px] sm:text-[22px] flex justify-start items-center">
                <FontAwesomeIcon icon={faEarthAmericas} />{" "}
                <div className="ml-3">UK, Ireland, Lisbon Time</div>
              </div>
            ) : null}
            <p className="md:text-[18px] text-gray-800 xsm:text-[16px] sm:text-[19px]">
              Book a meeting with our Fibery team. Talk to a real person about
              how to get your processes set up with us' or not '💩'
            </p>
          </div>
          <div className="text-[#4285f4] sm:pl-5 md:pl-0 hover:text-blue-400 cursor-pointer xsm:text-[14px] md:text-[16px] xsm:mt-5">
            Cookie settings
          </div>
        </div>
      </div>
      {render()}
    </div>
  )
}

export default MeetingForm
