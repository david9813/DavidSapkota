import React, { useState } from "react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    console.log("Form submitted:", formData);
  
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <div className="contact_man">
      <div className="contact-form">
        <h1 className="contact_here">
          Contact <span>Here</span>
        </h1>

        <div className="for_input">
          <form onSubmit={handleSubmit} className="form">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="example@gmail.com"
              value={formData.email}
              onChange={handleChange}
            />
            <input
              type="tel"
              name="phone"
              placeholder="+41"
              value={formData.phone}
              onChange={handleChange}
            />
            <textarea
              name="message"
              cols="30"
              rows="10"
              placeholder="Type here"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            <button className="contact_button" type="submit">
              Send
            </button>
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
