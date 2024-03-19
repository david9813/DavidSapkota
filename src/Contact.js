import React, { useState, useRef } from "react";
import "./Contact.css";
import emailjs from '@emailjs/browser';


function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_98ellnm', 'template_odp4a5t', form.current, {
        publicKey: 'wzdzusVRlxE_c7IFB',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert('Message sent successfully!');
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert('Failed to send message. Please try again later.');
        },
      );
  };

  return (
    <div className="contact_man">
      <div className="contact-form">
        <h1 className="contact_here">
          Contact <span>Here</span>
        </h1>   <div className="for_input">
          <form ref={form} onSubmit={sendEmail} >
            <label htmlFor="user_name" className="form-label">Name</label>
            <input type="text" id="user_name" name="user_name" placeholder="Name" required />
            <label htmlFor="user_email" className="form-label">Email</label>
            <input type="email" id="user_email" name="user_email" placeholder="Email"required />
            <label htmlFor="user_number" className="form-label" >Phone Number</label>
            <input type="tel" id="user_number" name="user_number"  placeholder="+49"required />
            <label htmlFor="message" className="form-label">Message</label>
            <textarea id="message" name="message" required placeholder="Message for David "></textarea>

            <input
              type="submit"
              value="Send"
              className="send" />

          </form>
        </div>

      </div>

      <div className="contact_contact">
        <p>
          For business-related questions and bug inquiries,
          <br />
          please contact me:
        </p>
        <p>Email: dr.david.sapkota.np@gmail.com</p>
        <p>Phone: +4915228094022</p>
      </div>
    </div>
  );
}

export default Contact;
