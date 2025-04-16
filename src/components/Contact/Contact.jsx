import React, { useState } from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import "./Contact.css";

const Contact = () => {

    const [captchaVerified, setCaptchaVerified] = useState(false);

    function onChange(value) {
        if (value !== null) {
            setCaptchaVerified(true);
        }
        else {
            setCaptchaVerified(false);
        }
    }

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
                    <div className='captcha'>
                        <ReCAPTCHA sitekey="6Lf89xorAAAAAPMMS3x7R8TKEe-g1oebwcTgTmN5" onChange={onChange} />
                    </div>
                    <button type='button' className='btn'>Submit</button>
                </form>
                <div className='thumbnail'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3561.333740949082!2d80.9524250762582!3d26.79749997671615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjbCsDQ3JzUxLjAiTiA4MMKwNTcnMTguMCJF!5e0!3m2!1sen!2sin!4v1744788424697!5m2!1sen!2sin" loading="lazy"></iframe>
                </div>
            </div>
        </div>
    )
}

export default Contact
