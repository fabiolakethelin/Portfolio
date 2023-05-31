import React, { useState } from "react"
import emailjs from "@emailjs/browser"
import Input from "../form/Input"
import { Form_Container, Form, Button } from './Contact.style.js'
import TextArea from "../form/TextArea"

const Contact = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const sendEmail = (e) => {
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
        <Form_Container>
            <h2>CONTACT</h2>
            <Form onSubmit={sendEmail}>
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
                <TextArea
                  placeholder="Message"
                  handleOnChange={(e) => setMessage(e.target.value)}
                  value={message}
                />
                <Button>Submit</Button>
            </Form>
        </Form_Container>
    )
}

export default Contact