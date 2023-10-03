import React from 'react'

function Form() {
    return (
        <form className='flex flex-col w-[60%]'>
            <label>Name</label>
            <input />
            <label>Email</label>
            <input />
            <label>Message</label>
            <textarea />
            <button className='text-left'>Submit</button>
        </form>
    )
}

function Contact() {
  return (
    <div>
        <h2 className="text-3xl">Let's have a chat</h2>
        <p className="text-xl">I am currently open to new opportunities</p>
        <Form />
    </div>
  )
}

export default Contact