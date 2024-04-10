import { faPlus, faXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React, { useContext, useRef, useState } from "react"
import { DemoContext } from "../App"

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
  const [guestEmails, setGuestEmails] = useState([])
  const [showGuestButton, setShowGuestButton] = useState(false)
  const [checkError, setCheckError] = useState({
    name: false,
    email: false,
  })
  const nameRef = useRef()
  const emailRef = useRef()
  const guestRef = useRef()
  const shareAnythingRef = useRef()
  const shareWorkspaceName = useRef()
  const context = useContext(DemoContext)
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

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email.trim())
  }

  const handleAddGuest = () => {
    const newGuestEmail = guestRef.current.value.trim()

    if (!validateEmail(newGuestEmail)) {
      alert("Please enter a valid email address.")
      guestRef.current.value = ""
      return
    }

    if (guestEmails.includes(newGuestEmail)) {
      alert("This email address has already been added.")
      guestRef.current.value = ""
      return
    }

    setGuestEmails([...guestEmails, newGuestEmail])
    guestRef.current.value = ""
  }

  const handleRemoveGuest = (guestEmail) => {
    setGuestEmails(guestEmails.filter((email) => email !== guestEmail))
  }

  const nameCheck = () => {
    return nameRef.current.value.trim() !== ""
  }

  const emailCheck = () => {
    return validateEmail(emailRef.current.value)
  }

  function handleSchedule() {
    const validName = nameCheck()
    const validEmail = emailCheck()
    if (validName && validEmail) {
      setCheckError({ email: false, name: false })
      context.setForm((prevState) => ({
        ...prevState,
        name: nameRef.current.value,
        email: emailRef.current.value,
        guestEmails: guestEmails,
        shareAnything: shareAnythingRef.current.value,
        shareName: shareWorkspaceName.current.value,
      }))
      context.setEmailSent(true)
    } else if (!validEmail && !validName) {
      setCheckError({ email: true, name: true })
      alert("Please enter your name and email before scheduling.")
    } else if (!validName) {
      setCheckError({ email: false, name: true })

      alert("Please enter your name before scheduling.")
    } else if (!validEmail) {
      setCheckError({ email: true, name: false })
      alert("Please enter a valid email before scheduling.")
    }
  }

  return (
    <div className="xsm:pl-3 md:pl-0 xl:h-[792px] md:h-[858px] md:w-[560px] xl:w-[723px] sm:w-[532px] xsm:w-[350px] bg-white overflow-auto">
      <h1 className="md:pl-8 pt-8 text-gray-800 text-[23px] font-bold">
        Enter Details
      </h1>
      <div>
        <div className="md:pl-8 mt-2 pb-0">
          <label className="text-[17px] font-semibold">
            Name{" "}
            {checkError.name ? <span className="text-red-500">*</span> : null}
            <br />
            <input
              className="border-[1px] border-[#ccc] h-[54px] xsm:w-[280px] sm:w-[450px] md:w-[492px] rounded-md mt-2"
              type="text"
              ref={nameRef}
            />
          </label>
        </div>
        <div className="md:pl-8 mt-6 pb-0">
          <label className="text-[17px] font-semibold">
            Email{" "}
            {checkError.email ? <span className="text-red-500">*</span> : null}
            <br />
            <input
              className="border-[1px] border-[#ccc] h-[54px] xsm:w-[280px] md:w-[492px] rounded-md mt-2 sm:w-[450px]"
              type="text"
              ref={emailRef}
            />
          </label>
        </div>

        {!showGuestButton ? (
          <div className="md:ml-8 mt-3">
            <button
              onClick={() => setShowGuestButton(true)}
              className="border-[1px] rounded-2xl text-[#026af9] border-[#026af9] pl-[14px] pr-[14px] pt-[4px] pb-[7px] text-[16px]"
            >
              Add Guests
            </button>
          </div>
        ) : (
          <div className="md:pl-8 mt-6 pb-0">
            <label className="text-[17px] font-bold">
              Add Guest
              <br />
              <div className="flex items-center">
                <input
                  className="border-[1px] border-[#ccc] h-[54px] md:w-[492px] xsm:w-[280px] rounded-md mt-2 sm:w-[450px]"
                  type="text"
                  ref={guestRef}
                />
                <div className="mt-2 ml-2">
                  <button
                    onClick={handleAddGuest}
                    className="text-[#026af9] border-[#026af9] border-[1px] w-[22px] h-[22px] mb-1 flex justify-center items-center hover:bg-[#026af9] hover:text-[#fff]"
                  >
                    <FontAwesomeIcon icon={faPlus} />
                  </button>
                  <button
                    onClick={() => setShowGuestButton(false)}
                    className="text-red-500 border-red-500 hover:bg-red-500 hover:text-white border-[1px] w-[22px] h-[22px] flex justify-center items-center"
                  >
                    <FontAwesomeIcon icon={faXmark} />
                  </button>
                </div>
              </div>
            </label>
          </div>
        )}

        {guestEmails.length > 0 && (
          <div className="md:ml-8 mt-3">
            <div className="font-bold">Guests:</div>
            <ul>
              {guestEmails.map((guestEmail) => (
                <li className="flex" key={guestEmail}>
                  <div className="flex justify-center items-center">
                    {guestEmail}
                  </div>
                  <div className="flex justify-center items-center">
                    <button
                      onClick={() => handleRemoveGuest(guestEmail)}
                      className="text-red-500 border-red-500 hover:bg-red-500 hover:text-white border-[1px] w-[16px] h-[16px] flex justify-center items-center ml-2 mt-1"
                    >
                      <FontAwesomeIcon icon={faXmark} />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
        <div className="md:ml-8 mt-6 ">
          <div className="font-semibold">I want Fibery to work for: *</div>
          {workCheckboxes.map((checkbox) => (
            <div className="h-[18px] mb-4 mt-4 font-light">
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
        <div className="md:ml-8 mt-6 ">
          <div className="font-semibold">You are more about *</div>
          {aboutCheckboxes.map((checkbox) => (
            <div className="h-[18px] mb-4 mt-4 font-light">
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
        <div className="md:ml-8 mt-10">
          <div className="sm:w-[450px] md:max-w-[500px] text-[15.9px] font-semibold mb-3">
            Please, share anything that will help prepare for our meeting
          </div>
          <textarea
            ref={shareAnythingRef}
            className="border-[1px] xsm:w-[280px] border-[#ccc] sm:w-[450px] md:w-[492px] rounded-lg min-h-[83px]"
          />
        </div>
        <div className="md:ml-8 mt-5">
          <div className="sm:w-[450px] md:max-w-[500px] text-[15.9px] font-semibold mb-3">
            Please, share with us the name of your Fibery workspace (if any)
          </div>
          <input
            type="text"
            ref={shareWorkspaceName}
            className="sm:w-[450px] md:w-[492px] xsm:w-[280px] h-[54px] border-[#ccc] border-[1px] rounded-lg"
          />
        </div>
        <button
          onClick={() => handleSchedule()}
          className="md:ml-8 mb-[30px] text-[19px] pt-[11px] pb-[12px] pr-[20px] pl-[20px] rounded-3xl mt-[24px] bg-[#016afe] text-white"
        >
          Schedule Event
        </button>
      </div>
    </div>
  )
}

export default MeetingDetails
