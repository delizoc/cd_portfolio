import "./FormStyles.css"

import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';

export const Form = () => {
  const form = useRef();
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userSubject, setUserSubject] = useState("");
  const [userMessage, setUserMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_0ab88na', 'template_rlzkuk9', form.current, '6a8WLl9kFC7G2_DXy')
      .then((result) => {
        console.log(result.text);
        setUserName("");
        setUserEmail("");
        setUserSubject("");
        setUserMessage("");
      }, (error) => {
        console.log(error.text);
      });
  };
  return (
    <div className="form">
        <form ref={form} onSubmit={sendEmail}>
            <label>Your Name</label>
            <input type="text" name="user_name" onChange={event=>setUserName(event.target.value)} value={userName}></input>
            <label>Email</label>
            <input type="email" name="user_email" onChange={event=>setUserEmail(event.target.value)} value={userEmail}></input>
            <label>Subject</label>
            <input type="text" name="user_subject" onChange={event=>setUserSubject(event.target.value)} value={userSubject}></input>
            <label>Message</label>
            <textarea name="message" rows="6" placeholder="Type Your Message Here" onChange={event=>setUserMessage(event.target.value)} value={userMessage}/>
            <button className="btn" type="submit" value="send">Send</button>
        </form>
    </div>
  );
};

export default Form;