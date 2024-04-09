import { createContext, useState } from "react"
import DemoComponent from "./DemoComponent"
import "./App.css"
export const DemoContext = createContext()

function App() {
  const [dateTime, setDateTime] = useState({
    month: 0,
    monthName: "no name",
    day: 0,
    dayName: "",
    time: "",
    year: 0,
  })
  const [form, setForm] = useState({
    name: "",
    email: "",
    guestEmails: [],
    shareAnything: "",
    shareName: "",
  })
  const [isTimeSelected, setIsTimeSelected] = useState(false)
  const [selectedTime, setSelectedTime] = useState("")
  const [timeConfirmed, setTimeConfirmed] = useState(false)
  const [emailSent, setEmailSent] = useState(false)
  const [demoOpen, setDemoOpen] = useState(false)
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
        form,
        setForm,
      }}
    >
      <div className="select-none">
        <button
          className="bg-slate-600 text-white rounded-lg ml-2 mt-2 p-1"
          onClick={() => setDemoOpen((d) => !d)}
        >
          {!demoOpen ? "Open demo" : "Close"}
        </button>
        <DemoComponent demoOpen={demoOpen} setDemoOpen={setDemoOpen} />
      </div>
    </DemoContext.Provider>
  )
}

export default App
