import { createPortal } from "react-dom"
import { useContext } from "react"
import MeetingForm from "./components/MeetingForm"
import { DemoContext } from "./App"
import EmailSent from "./components/EmailSent"
import Ribbon from "./components/Ribbon"

const DemoComponent = ({ demoOpen }) => {
  const context = useContext(DemoContext)
  if (!demoOpen) return null
  else {
    return createPortal(
      <div className="popup-container">
        <Ribbon />

        {!context.emailSent ? <MeetingForm /> : <EmailSent />}
      </div>,
      document.querySelector("#pop-up")
    )
  }
}

export default DemoComponent
