import React, { useRef, useState } from "react"

const MeetingDetails = () => {
  const [workCheckboxes, setWorkCheckboxes] = useState([
    { id: 1, value: "🥕 Myself", isChecked: false },
    { id: 2, value: "👩🏽‍🤝‍👩🏻 < 10 people", isChecked: false },
    { id: 3, value: "🦄 10-50 people", isChecked: false },
    { id: 4, value: "🦅 50+ people", isChecked: false },
  ])

  const [aboutCheckboxes, setAboutCheckboxes] = useState([
    { id: 1, value: "🗻 Leadership", isChecked: false },
    { id: 2, value: "🦉 Consulting", isChecked: false },
    { id: 3, value: "🌞 Product Management", isChecked: false },
    { id: 4, value: "🎨 Design", isChecked: false },
    { id: 5, value: "💻 Engineering", isChecked: false },
    { id: 6, value: "🎣 Sales", isChecked: false },
    { id: 7, value: "💣 Marketing", isChecked: false },
    { id: 8, value: "💎 Human Resources", isChecked: false },
    { id: 9, value: "📚 Education", isChecked: false },
    { id: 10, value: "❓ Something else", isChecked: false },
  ])
  const nameRef = useRef()
  const emailRef = useRef()
  const shareAnythingRef = useRef()
  const shareWorkspaceName = useRef()
  const handleMeetingCheckboxChange = (id) => {
    const updatedCheckboxes = workCheckboxes.map((checkbox) =>
      checkbox.id === id
        ? { ...checkbox, isChecked: !checkbox.isChecked }
        : checkbox
    )
    setWorkCheckboxes(updatedCheckboxes)
  }
  const handleAboutCheckboxChange = (id) => {
    const updatedCheckboxes = aboutCheckboxes.map((checkbox) =>
      checkbox.id === id
        ? { ...checkbox, isChecked: !checkbox.isChecked }
        : checkbox
    )
    setAboutCheckboxes(updatedCheckboxes)
  }
  return (
    <div className="h-[760px] w-[723px] bg-white overflow-auto">
      <h1 className="pl-8 pt-8 text-[25px] font-bold">Enter Details</h1>
      <div>
        <div className="pl-8 mt-2 pb-0">
          <label className="text-[17px] font-bold">
            Name <span></span>*
            <br />
            <input
              className="border-[1px] border-[#ccc] h-[54px] w-[492px] rounded-md mt-2"
              type="text"
              ref={nameRef}
            />
          </label>
        </div>
        <div className="pl-8 mt-6 pb-0">
          <label className="text-[17px] font-bold">
            Email *
            <br />
            <input
              className="border-[1px] border-[#ccc] h-[54px] w-[492px] rounded-md mt-2"
              type="text"
              ref={emailRef}
            />
          </label>
        </div>
        <div className="ml-8 mt-3">
          <button className="border-[1px] rounded-2xl text-[#026af9] border-[#026af9] pl-[14px] pr-[14px] pt-[4px] pb-[7px] text-[16px]">
            Add Guests
          </button>
        </div>
        <div className="ml-8 mt-6 ">
          <div className="font-bold">I want Fibery to work for: *</div>
          {workCheckboxes.map((checkbox) => (
            <div className="h-[18px] mb-4 mt-4">
              <label key={checkbox.id} className="flex">
                <div className="flex justify-center items-center">
                  <input
                    type="checkbox"
                    className="h-[22px] w-[20px] mr-1"
                    checked={checkbox.isChecked}
                    onChange={() => handleMeetingCheckboxChange(checkbox.id)}
                  />
                </div>
                <div className="flex justify-center items-center text-[18px]">
                  {checkbox.value}
                </div>
              </label>
              <br />
            </div>
          ))}
        </div>
        <div className="ml-8 mt-6 ">
          <div className="font-bold">You are more about *</div>
          {aboutCheckboxes.map((checkbox) => (
            <div className="h-[18px] mb-4 mt-4">
              <label key={checkbox.id} className="flex">
                <input
                  type="checkbox"
                  className="h-[22px] w-[20px] mr-1"
                  checked={checkbox.isChecked}
                  onChange={() => handleAboutCheckboxChange(checkbox.id)}
                />
                <div className="flex justify-center items-center text-[18px]">
                  {checkbox.value}
                </div>
              </label>
              <br />
            </div>
          ))}
        </div>
        <div className="ml-8 mt-10">
          <div className="max-w-[500px] text-[15.9px] font-bold mb-3">
            Please, share anything that will help prepare for our meeting
          </div>
          <textarea
            ref={shareAnythingRef}
            className="border-[1px] border-[#ccc] w-[512px] rounded-lg min-h-[83px]"
          />
        </div>
        <div className="ml-8 mt-5">
          <div className="max-w-[500px] text-[15.9px] font-bold mb-3">
            Please, share with us the name of your Fibery workspace (if any)
          </div>
          <input
            type="text"
            ref={shareWorkspaceName}
            className="w-[500px] h-[54px] border-[#ccc] border-[1px] rounded-lg"
          />
        </div>
        <button className="ml-8 mb-[30px] text-[19px] pt-[11px] pb-[12px] pr-[20px] pl-[20px] rounded-3xl mt-[24px] bg-[#016afe] text-white">
          Schedule Event
        </button>
      </div>
    </div>
  )
}

export default MeetingDetails
