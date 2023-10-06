"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Form() {
  const form = useRef<any>();
  const [formSubmit, setFormSubmit] = useState<boolean>(false);

  function sendEmail(event: any) {
    event.preventDefault();

    emailjs
      .sendForm(
        "service_ql4kfzi",
        "template_cuc1fdf",
        form.current,
        "8nIg2t_rNO5VjyR2v"
      )
      .then((response: any) => {
        console.log("SUCCESS!", response.status, response.text);
        setFormSubmit(true);
      })
      .catch((error: any) => {
        console.log("FAILED...", error);

        alert(
          "The email service is temporarily unavailable. Please contact me directly at qvtran.00@gmail.com"
        );
      });
  }

  return (
    <>
      {formSubmit ? (
        <p className="text-center font-semibold border my-2 py-2 px-10 rounded-lg">
          Your message has been sent!
        </p>
      ) : (
        <form className="flex flex-col w-[60%]" ref={form} onSubmit={sendEmail}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="user_name"
            className="bg-[#131313] border"
          />{" "}
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="user_email"
            className="bg-[#131313] border"
          />{" "}
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            className="bg-[#131313] border"
          />{" "}
          <div>
            <button
              type="submit"
              className="text-left font-semibold border my-2 py-2 px-4 rounded-lg link"
            >
              Submit
            </button>
          </div>
        </form>
      )}
    </>
  );
}

function Contact() {
  return (
    <div
      id="contact"
      className="outline h-[600px] flex flex-col items-center justify-center"
    >
      <h2 className="text-3xl">Let's have a chat</h2>
      <p className="text-xl">I am currently open to new opportunities</p>
      <Form />
    </div>
  );
}

export default Contact;
