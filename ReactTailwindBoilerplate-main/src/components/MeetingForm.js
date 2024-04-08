import { faCalendar, faClock } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React, { useContext, useState } from "react"
import logo from "../assets/logo.png"
import Meeting from "./Meeting"
import SelectTime from "./SelectTime"
import { DemoContext } from "../App"
import MeetingDetails from "./MeetingDetails"
import { faArrowLeft, faEarthAmericas } from "@fortawesome/free-solid-svg-icons"

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
          <div className="bg-white col-span-1 w-[494px]">
            <Meeting month={month} setMonth={setMonth} />
          </div>
          {context.isTimeSelected ? (
            <div>
              <SelectTime month={month} />
            </div>
          ) : null}
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
    <div className="pt-16 pl-16 flex bg-green-300">
      <div
        className={`border-r-[1px] ${
          context.timeConfirmed ? "w-[389px]" : "w-[493px]"
        }`}
      >
        <div className="bg-white h-[213px] flex justify-center items-center border-b-[1px] relative">
          {context.timeConfirmed ? (
            <button
              onClick={() => handleBack()}
              className="absolute cursor-pointer left-0 top-0 ml-9 mt-9 text-[27px] text-[#0071fc] hover:text-[#fff] hover:bg-[#0071fc] border-[1px] w-[52px] h-[52px] flex justify-center items-center rounded-full pointer-events-auto"
            >
              <FontAwesomeIcon icon={faArrowLeft} />
            </button>
          ) : null}
          <img src={logo} alt="logo" className="mx-auto" />
        </div>

        <div
          className={`bg-white pt-5 pb-7 pr-10 pl-9 ${
            context.timeConfirmed ? "h-[548px]" : "h-[507px]"
          } flex flex-col justify-between`}
        >
          <div className="">
            <h1 className="text-[32px] mb-6 font-bold">Fibery Demo</h1>
            <div className="text-gray-500 mb-6 text-[20px] flex justify-start items-center">
              <FontAwesomeIcon icon={faClock} />
              <div className="ml-3">45 min</div>
            </div>
            {context.timeConfirmed ? (
              <div className="text-gray-500 mb-6 text-[20px] flex justify-start items-center">
                <FontAwesomeIcon icon={faCalendar} />
                <div className="ml-3">
                  12:00 - 12:45, Thursday,
                  <br />
                  November 30, 2023
                </div>
              </div>
            ) : null}
            {context.timeConfirmed ? (
              <div className="text-gray-500 mb-6 text-[20px] flex justify-start items-center">
                <FontAwesomeIcon icon={faEarthAmericas} />{" "}
                <div className="ml-3">UK, Ireland, Lisbon Time</div>
              </div>
            ) : null}
            <p className="text-[18px] text-gray-800">
              Book a meeting with our Fibery team. Talk to a real person about
              how to get your processes set up with us' or not '💩'
            </p>
          </div>
          <div className="text-[#4285f4] hover:text-blue-400 cursor-pointer">
            Cookie settings
          </div>
        </div>
      </div>
      {render()}
    </div>
  )
}

export default MeetingForm
