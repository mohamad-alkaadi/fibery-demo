import { createContext, useState } from "react"
import DemoComponent from "./DemoComponent"

export const DemoContext = createContext()

function App() {
  const [dateTime, setDateTime] = useState({
    month: "no month",
    day: 0,
    time: 0,
  })
  const [isTimeSelected, setIsTimeSelected] = useState(false)
  const [selectedTime, setSelectedTime] = useState("")
  const now = new Date()
  const time = now.getHours()
  console.log("the time is:", time)
  function changeSelected() {
    setIsTimeSelected((t) => !t)
    console.log("is time selected:", isTimeSelected)
  }
  function changeSelectedToFalse() {
    setIsTimeSelected(false)
  }
  function changeSelectedToTrue() {
    setIsTimeSelected(true)
  }

  function handleSelectTime(time) {
    setSelectedTime(time)
    console.log("function in app is active")
    console.log(selectedTime)
  }
  console.log("selected time outside function is:", selectedTime)

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
      }}
    >
      <div className=" bg-red-300 h-[1080px] w-[1980px] select-none">
        <DemoComponent />
      </div>
    </DemoContext.Provider>
  )
}

export default App
