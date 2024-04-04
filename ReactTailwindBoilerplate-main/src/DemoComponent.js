import { faClock } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React, { useContext } from "react"
import logo from "./assets/logo.png"
import Meeting from "./components/Meeting"
import SelectTime from "./components/SelectTime"
import { DemoContext } from "./App"
const DemoComponent = () => {
  const context = useContext(DemoContext)
  return (
    <div className="pt-16 pl-16 flex bg-green-300">
      <div className="border-r-[1px]">
        <div className="bg-white w-[493px] h-[213px] flex justify-center items-center border-b-[1px] pointer-events-none">
          <img src={logo} alt="logo" />
        </div>

        <div className=" bg-white pt-5 pb-7 pr-10 pl-9 h-[507px] flex flex-col justify-between w-[493px]">
          <div className="">
            <h1 className="text-[32px] mb-6 font-bold">Fibery Demo</h1>
            <div className="text-gray-500 mb-6 text-[20px]">
              <FontAwesomeIcon icon={faClock} /> 45 min
            </div>
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
      <div className="bg-white col-span-1 w-[494px]">
        <Meeting />
      </div>
      {context.isTimeSelected ? (
        <div>
          <SelectTime />
        </div>
      ) : null}
    </div>
  )
}

export default DemoComponent
