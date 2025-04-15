import React from 'react';
import "./Contact.css";

const Contact = () => {
    return (
        <div className='container' id='contact'>
            <div className='contact-main'>
                <form className='contact'>
                    <h2 className='heading'>Contact Me</h2>
                    <div className='form-group'>
                        <label htmlFor="name">Name</label>
                        <input type='text' className='form-control' id='name' name='name' />
                    </div>
                    <div className='form-group'>
                        <label htmlFor="email">Email</label>
                        <input type='text' className='form-control' id='email' name='email' />
                    </div>
                    <div className='form-group'>
                        <label htmlFor="message">Message</label>
                        <textarea type='text' className='form-control' id='message' name='message' placeholder='Type your message...' />
                    </div>
                    <button type='button' className='btn'>Submit</button>
                </form>
                <div className='thumbnail'>
                    <img src='contact.jpg' alt='contact us' />
                </div>
            </div>
        </div>
    )
}

export default Contact
