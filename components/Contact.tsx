import React from "react";

function Form() {
  return (
    <form className="flex flex-col w-[60%]">
      <label>
        Name
        <input type="text" name="name" className="bg-[#131313] border" />{" "}
      </label>
      <label>
        Email
        <input type="email" name="email" className="bg-[#131313] border" />{" "}
      </label>
      <label>
        Message
        <textarea name="message" className="bg-[#131313] border" />{" "}
      </label>
      <button className="text-left">Submit</button>
    </form>
  );
}

function Contact() {
  return (
    <div>
      <h2 className="text-3xl">Let's have a chat</h2>
      <p className="text-xl">I am currently open to new opportunities</p>
      <Form />
    </div>
  );
}

export default Contact;
