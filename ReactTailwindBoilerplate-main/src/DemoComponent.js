import { useContext } from "react"
import MeetingForm from "./components/MeetingForm"
import { DemoContext } from "./App"
import EmailSent from "./components/EmailSent"

const DemoComponent = (e) => {
  const context = useContext(DemoContext)
  return <div>{!context.emailSent ? <MeetingForm /> : <EmailSent />}</div>
}

export default DemoComponent
