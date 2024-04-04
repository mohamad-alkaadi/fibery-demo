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
  function changeSelected() {
    setIsTimeSelected((t) => !t)
  }
  return (
    <DemoContext.Provider
      value={{ dateTime, setDateTime, isTimeSelected, changeSelected }}
    >
      <div className=" bg-red-300 h-[1080px] w-[1980px] select-none">
        <DemoComponent />
      </div>
    </DemoContext.Provider>
  )
}

export default App
