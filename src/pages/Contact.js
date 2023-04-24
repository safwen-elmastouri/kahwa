import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "../style/contact.css";

export default function Contact(props) {
  const location = useLocation();
  const data = location.state;
  const cond = data == "food";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your logic to submit the form data here
  };
  return (
    <>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          required></textarea>
        <button type="submit">Send</button>
      </form>
    </>
  );
}
