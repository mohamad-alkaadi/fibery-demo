import { createPortal } from "react-dom"
import { useContext } from "react"
import MeetingForm from "./components/MeetingForm"
import { DemoContext } from "./App"
import EmailSent from "./components/EmailSent"

const DemoComponent = ({ demoOpen }) => {
  const context = useContext(DemoContext)
  if (!demoOpen) return null
  else {
    return createPortal(
      <div className="popup-container">
        {!context.emailSent ? <MeetingForm /> : <EmailSent />}
      </div>,
      document.querySelector("#pop-up")
    )
  }
}

export default DemoComponent
