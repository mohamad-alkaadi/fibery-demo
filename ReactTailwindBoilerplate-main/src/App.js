import { createContext, useState } from "react"
import DemoComponent from "./DemoComponent"

export const DemoContext = createContext()

function App() {
  const [dateTime, setDateTime] = useState({
    month: 0,
    monthName: "no name",
    day: 0,
    dayName: "",
    time: 0,
  })
  const [isTimeSelected, setIsTimeSelected] = useState(false)
  const [selectedTime, setSelectedTime] = useState("")
  const [timeConfirmed, setTimeConfirmed] = useState(false)
  const [emailSent, setEmailSent] = useState(false)
  const now = new Date()
  const time = now.getHours()
  function changeSelected() {
    setIsTimeSelected((t) => !t)
  }
  function changeSelectedToFalse() {
    setIsTimeSelected(false)
  }
  function changeSelectedToTrue() {
    setIsTimeSelected(true)
  }

  function handleSelectTime(time) {
    setSelectedTime(time)
  }
  console.log("date time week name:", dateTime.dayName)
  return (
    <DemoContext.Provider
      value={{
        dateTime,
        setDateTime,
        isTimeSelected,
        changeSelected,
        changeSelectedToFalse,
        changeSelectedToTrue,
        handleSelectTime,
        timeConfirmed,
        setTimeConfirmed,
        emailSent,
        setEmailSent,
      }}
    >
      <div className=" bg-red-300 h-[1080px] w-[1980px] select-none">
        <DemoComponent />
      </div>
    </DemoContext.Provider>
  )
}

export default App
