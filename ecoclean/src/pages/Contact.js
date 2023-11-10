import React from "react";
import  {
  Button
  } from "@mui/material";


import "../styles/Contact.css";
import Layout from "../components/Layout/Layout";

function Contact() {
  return (
    <Layout>
    <div className="contact">
      <div
        className="leftSide"
        
      ></div>
      <div className="rightSide">
        <h1> Contact Us</h1>

        <form id="contact-form" method="POST">
          <label htmlFor="name">Full Name</label>
          <input name="name" placeholder="Enter full name..." type="text" />
          <label htmlFor="email">Email</label>
          <input name="email" placeholder="Enter email..." type="email" />
          <label htmlFor="message">Message</label>
          <textarea
            rows="6"
            placeholder="Enter message..."
            name="message"
            required
          ></textarea>
          <Button variant="contained" color="success" sx={{float:'right'}}>Send message</Button>
        </form>
      </div>
    </div>
    </Layout>
  );
}

export default Contact;