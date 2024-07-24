"use client";
import React, { useState } from "react";
import axios from "axios";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    msg: "",
  });

  // fill the formData
  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const sendEmail = async (e: { preventDefault: () => void }) => {
    sendEmail;
    e.preventDefault(); // prevent page reload

    try {
      const response = axios({
        method: "post",
        url: "api/contact",
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      })
        .then(function (response) {
          //handle success
          console.log(response);
        })
        .catch(function (response) {
          //handle error
          console.log(response);
        });

      console.log("Success:", response);
      console.log(formData);
      setFormData({ email: "", subject: "", msg: "" }); // clear all fields
    } catch (error) {
      console.error("Fail to send email :", error);
    }
  };

  return (
    <section className="bg-gray-900 ">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center">
          Contact Us
        </h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-gray-300  sm:text-xl">
          Want to send feedback about a beta feature? Need details about our
          Business plan? Let us know.
        </p>
        <form className="space-y-8" onSubmit={sendEmail}>
          <div>
            <label htmlFor="email" className="form-label">
              Your email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              id="email"
              className="my-input-base"
              placeholder="email@lasevolution.com"
              required
            />
          </div>
          <div>
            <label htmlFor="subject" className="form-label">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="my-input-base"
              placeholder="Let us know how we can help you"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="form-label">
              Your message
            </label>
            <textarea
              id="msg"
              name="msg"
              value={formData.msg}
              onChange={handleChange}
              className="my-input-base"
              placeholder="Leave a comment..."
            />
          </div>

          <button type="submit" className="my-input-base my-btn">
            Send message
          </button>
        </form>
      </div>
    </section>
  );
};
export default ContactUs;
