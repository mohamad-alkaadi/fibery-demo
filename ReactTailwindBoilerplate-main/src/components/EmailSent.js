import React, { useContext } from "react"
import placeholder from "../assets/placeholder.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faCalendar,
  faCircleCheck,
  faUser,
} from "@fortawesome/free-regular-svg-icons"
import {
  faCheck,
  faEarthAmericas,
  faVideo,
} from "@fortawesome/free-solid-svg-icons"
import google from "../assets/google.svg"
import microsoft from "../assets/microsoft.svg"
import { DemoContext } from "../App"
import { addMinutesToTime } from "../helper-functions/dateTime"

const EmailSent = () => {
  const context = useContext(DemoContext)
  console.log(context.form)
  return (
    <div className="flex">
      <div className="h-[804px] w-[1099px] bg-white">
        {/* <div className="grid justify-center"> */}
        <div className="w-[80px] h-[80px] m-auto mt-[40px]">
          <img className="rounded-full" src={placeholder} />
        </div>
        <h1 className="text-center text-[33px] font-bold mb-3 mt-7">
          <FontAwesomeIcon
            icon={faCircleCheck}
            className="bg-[#0b8063]
          rounded-full text-white"
          />{" "}
          You are scheduled
        </h1>
        <h5 className="text-center text-[19px]">
          a calendar invitation has been sent your email address
        </h5>
        <div className="m-auto w-[555px] border-b-[1px] pb-8">
          <div className="border-[1px] rounded-lg pl-5">
            <h3 className="text-[23px] mt-5 font-bold mb-3">Fibery Demo</h3>
            <div className="flex text-[19px] text-gray-500 mb-5">
              <div className="flex justify-center items-center text-[23px] mr-3">
                <FontAwesomeIcon icon={faUser} />
              </div>
              <p>{context.form.name}</p>
            </div>
            <div className="flex text-[19px] text-gray-500 mb-5">
              <div className="flex justify-center items-center text-[23px] mr-3">
                <FontAwesomeIcon icon={faCalendar} />
              </div>

              <p>
                {context.dateTime.time} -{" "}
                {addMinutesToTime(context.dateTime.time, 45)},{" "}
                {context.dateTime.dayName}, {context.dateTime.monthName}{" "}
                {context.dateTime.day}, {context.dateTime.year}
              </p>
            </div>
            <div className="flex text-[19px] text-gray-500 mb-5">
              <div className="flex justify-center items-center text-[23px] mr-3">
                <FontAwesomeIcon icon={faEarthAmericas} />{" "}
              </div>
              <p>UK, Ireland, Lisbon Time</p>
            </div>
            <div className="flex text-[19px] text-gray-500 mb-6">
              <div className="flex justify-center items-center text-[23px] mr-[9px]">
                <FontAwesomeIcon icon={faVideo} />
              </div>
              <p>Web conferencing detail to follow.</p>
            </div>
          </div>
        </div>
        <div className="w-[555px] m-auto mt-9">
          <p className="font-bold text-[18px] mb-2">
            Schedule your own meetings with Calendly for free
          </p>
          <p className="text-[18px]">
            Eliminate the back-and-forth emails for finding time
          </p>
        </div>
        <div className="m-auto w-fit flex mt-6">
          <button className="h-[51px] flex border-[1px] justify-center items-center rounded-full mr-3 pr-8 pl-8 border-black">
            <div className="flex justify-center items-center mr-2">
              <img src={google} className="h-[30px]" />
            </div>
            Sign up with Google
          </button>
          <button className="h-[51px] flex border-[1px] justify-center items-center rounded-full mr-3 pr-8 pl-8 border-black">
            <div className="flex justify-center items-center mr-2">
              <img src={microsoft} className="h-[30px]" />
            </div>
            Sign up with Microsoft
          </button>
        </div>
        <div className="text-center text-[#4387db] mt-6">
          Sign up with work email
        </div>
        {/* </div> */}
        <div className="self-start justify-self-start ml-8 text-[#4387db] cursor-pointer">
          Cookie settings
        </div>
      </div>
    </div>
  )
}

export default EmailSent
