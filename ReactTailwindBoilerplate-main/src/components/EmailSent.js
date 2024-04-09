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
      <div className="sm:h-[804px] overflow-auto xsm:h-[640px] lg:w-[1099px] md:w-[831px] sm:w-[540px] xsm:w-[349px] bg-white">
        <div className="w-[80px] h-[80px] m-auto mt-[40px]">
          <img className="rounded-full" src={placeholder} />
        </div>
        <h1 className="text-center sm:text-[30px] md:text-[33px] xsm:text-[25px] font-bold mb-3 mt-7">
          <FontAwesomeIcon
            icon={faCircleCheck}
            className="bg-[#0b8063]
          rounded-full text-white"
          />{" "}
          You are scheduled
        </h1>
        <h5 className="text-center font-light md:text-[19px] sm:text-[18px] xsm:text-[16px] xsm:mb-2 sm:mb-0">
          A calendar invitation has been sent your email address
        </h5>
        <div className="m-auto sm:w-full md:w-[555px] border-b-[1px] pb-8">
          <div className="border-[1px] md:border-l-[1px] md:border-r-[1px] sm:border-l-0 sm:border-r-0 md:rounded-lg pl-5 ">
            <h3 className="xsm:text-[20px] sm:text-[25px] md:text-[27px] mt-5 font-semibold mb-3">
              Fibery Demo
            </h3>
            <div className="flex text-[19px] text-gray-500 mb-5 md:text-[19px] xsm:text-[18px] sm:text-[22px]">
              <div className="flex justify-center items-center text-[23px] mr-3">
                <FontAwesomeIcon icon={faUser} />
              </div>
              <p>{context.form.name}</p>
            </div>
            <div className="flex text-[19px] text-gray-500 mb-5 md:text-[19px]  xsm:text-[18px] sm:text-[22px]">
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
            <div className="flex text-[19px] text-gray-500 mb-5 md:text-[19px]  xsm:text-[18px] sm:text-[22px]">
              <div className="flex justify-center items-center text-[23px] mr-3">
                <FontAwesomeIcon icon={faEarthAmericas} />{" "}
              </div>
              <p>UK, Ireland, Lisbon Time</p>
            </div>
            <div className="flex text-[19px] text-gray-500 mb-6 md:text-[19px]  xsm:text-[18px] sm:text-[22px]">
              <div className="flex justify-center items-center text-[23px] mr-[9px]">
                <FontAwesomeIcon icon={faVideo} />
              </div>
              <p>Web conferencing detail to follow.</p>
            </div>
          </div>
        </div>
        <div className="m-auto mt-9 md:ml-0 xsm:ml-5">
          <p className="font-bold m-auto md:w-[555px] sm:text-[18px] xsm:text-[17px] mb-2">
            Schedule your own meetings with Calendly for free
          </p>
          <p className="sm:text-[18px] m-auto md:w-[555px] xsm:text-[16px]">
            Eliminate the back-and-forth emails for finding time
          </p>
        </div>
        <div className="m-auto w-fit flex sm:flex-row xsm:flex-col mt-6">
          <button className="h-[51px] flex border-[1px] justify-center items-center rounded-full mr-3 md:pr-8 md:pl-8 xsm:pr-8 xsm:pl-8 xsm:mb-2 sm:mb-0 sm:pl-4 sm:pr-4 border-black">
            <div className="flex justify-center items-center mr-2">
              <img src={google} className="h-[30px]" />
            </div>
            Sign up with Google
          </button>
          <button className="h-[51px] flex border-[1px] justify-center items-center rounded-full mr-3 md:pr-8 md:pl-8 sm:pl-4 sm:pr-4 border-black">
            <div className="flex justify-center items-center mr-2">
              <img src={microsoft} className="h-[30px]" />
            </div>
            Sign up with Microsoft
          </button>
        </div>
        <div className="text-center text-[#4387db] sm:mt-6 xsm:mt-2 sm:mb-0 xsm:mb-8">
          Sign up with work email
        </div>
        {/* </div> */}
        <div className="self-start justify-self-start sm:ml-8 xsm:ml-4  text-[#4387db] cursor-pointer">
          Cookie settings
        </div>
      </div>
    </div>
  )
}

export default EmailSent
