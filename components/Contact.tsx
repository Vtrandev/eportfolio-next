import React from "react";

function Form() {
  return (
    <form className="flex flex-col w-[60%]">
      <label htmlFor="name">Name</label>
      <input type="text" id="name" className="bg-[#131313] border" />{" "}
      <label htmlFor="email">Email</label>
      <input type="email" id="email" className="bg-[#131313] border" />{" "}
      <label htmlFor="message">Message</label>
      <textarea id="message" className="bg-[#131313] border" />{" "}
      <button className="text-left">Submit</button>
    </form>
  );
}

function Contact() {
  return (
    <div id="contact" className="outline">
      <h2 className="text-3xl">Let's have a chat</h2>
      <p className="text-xl">I am currently open to new opportunities</p>
      <Form />
    </div>
  );
}

export default Contact;
