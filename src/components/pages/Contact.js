import React, { useState } from "react"
import emailjs from "@emailjs/browser"
import Input from "../form/Input"
import './Contact.css'
import TxtArea from "../form/TxtArea"

const Contact = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    function sendEmail(e) {
        e.preventDefault();

        const templateParams = {
            from_name: name,
            message: message,
            email: email
        }

        emailjs.send("service_76hwctq", "template_7cble4o", templateParams, "XnQMRyfMBxrwWWJb6")
        .then((resp) => {
            setName('')
            setEmail('')
            setMessage('')
        })
        .catch((err) => console.log(err))
    }

    return (
        <div className="form-container">
            <h2>CONTACT</h2>
            <form className="form" onSubmit={sendEmail}>
                <Input
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  handleOnChange={(e) => setName(e.target.value)}
                  value={name}
                />
                <Input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  handleOnChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
                <TxtArea
                  placeholder="Message"
                  handleOnChange={(e) => setMessage(e.target.value)}
                  value={message}
                />
                <button className="btn">Submit</button>
            </form>
        </div>
    )
}

export default Contact