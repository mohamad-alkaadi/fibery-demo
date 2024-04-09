import React, { useContext, useEffect, useRef } from "react"
import emailjs from "@emailjs/browser"
import { DemoContext } from "../App"

export const SendEmail = () => {
  const form = useRef()
  const context = useContext(DemoContext)

  const isShareNameEmpty = !context.form.shareName
  const isShareAnythingEmpty = !context.form.shareAnything
  const areGuestEmailsEmpty = context.form.guestEmails.length === 0

  let shareWork = isShareNameEmpty
    ? ""
    : `in the name of ${context.form.shareName} the Fibery work`
  let shareAny = isShareAnythingEmpty
    ? ""
    : `you need ${context.form.shareAnything} to prepare for the meeting`
  let gEmails = areGuestEmailsEmpty
    ? ""
    : `with the following guests:\n${context.form.guestEmails.join("\n")}`

  const sendEmail = (e) => {
    emailjs
      .sendForm("Calendly", "template_vl4311m", form.current, {
        publicKey: "rrBbz2UOge-oblTXi",
      })
      .then(
        () => {
          console.log("SUCCESS!")
        },
        (error) => {
          console.log("FAILED...", error.text)
        }
      )
  }

  useEffect(() => {
    if (context.emailSent) {
      sendEmail()
    }
  }, [context.emailSent])

  return (
    <form className="hidden" ref={form} onSubmit={sendEmail}>
      <input value={context.form.name} type="text" name="name" />
      <input value={context.form.email} type="email" name="email" />
      <textarea value={shareAny} name="share_anything" />
      <textarea value={gEmails} name="guest_emails" />
      <textarea value={shareWork} name="share_name" />
      <button type="submit">Submit</button>
    </form>
  )
}

export default SendEmail
