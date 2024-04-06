// import React, { useRef } from "react"
// import emailjs from "@emailjs/browser"

// export const SendEmail = () => {
//   const form = useRef()

//   const sendEmail = (e) => {
//     e.preventDefault()

//     emailjs
//       .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", form.current, {
//         publicKey: "YOUR_PUBLIC_KEY",
//       })
//       .then(
//         () => {
//           console.log("SUCCESS!")
//         },
//         (error) => {
//           console.log("FAILED...", error.text)
//         }
//       )
//   }

//   return (
//     <form className="hidden" ref={form} onSubmit={sendEmail}>
//       <input type="text" name="user_name" />
//       <input type="email" name="user_email" />
//       <textarea name="message" />
//     </form>
//   )
// }
