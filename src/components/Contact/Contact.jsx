import React, { useState } from 'react';
import { useForm } from "react-hook-form"
import ReCAPTCHA from "react-google-recaptcha";
import "./Contact.css";

const Contact = () => {

    const [formSubmitted, setFormSubmitted] = useState(false);
    const [captchaVerified, setCaptchaVerified] = useState(false);

    const { register, handleSubmit, formState: { errors }, } = useForm();

    const onSubmit = (data) => {
        setFormSubmitted(true);
        if (!captchaVerified) {
            return;
        }
        console.log(data);
    }

    const onInvalid = () => {
        setFormSubmitted(true);
    };

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
                <form className='contact' onSubmit={handleSubmit(onSubmit, onInvalid)}>
                    <h2 className='heading'>Contact Me</h2>
                    <div className='form-group'>
                        <label htmlFor="name">Name</label>
                        <input type='text' className={`form-control ${errors.name ? "error-input" : ""}`} id='name' name='name' {...register("name", { required: true })} />
                        {errors.name && <span className='error-msg'>This field is required.</span>}
                    </div>
                    <div className='form-group'>
                        <label htmlFor="email">Email</label>
                        <input type='text' className={`form-control ${errors.email ? "error-input" : ""}`} id='email' name='email' {...register("email", {
                            required: "This field is required.",
                            pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: "Please enter a valid email."
                            }
                        })} />
                        {errors.email && <span className='error-msg'>{errors.email.message}</span>}
                    </div>
                    <div className='form-group'>
                        <label htmlFor="message">Message</label>
                        <textarea type='text' className={`form-control ${errors.message ? "error-input" : ""}`} id='message' name='message' placeholder='Type your message...' {...register("message", { required: true })} />
                        {errors.message && <span className='error-msg'>This field is required.</span>}
                    </div>
                    <div className='captcha'>
                        <ReCAPTCHA sitekey="6Lf89xorAAAAAPMMS3x7R8TKEe-g1oebwcTgTmN5" onChange={onChange} />
                        {!captchaVerified && formSubmitted && <span className='error-msg'>This field is required.</span>}
                    </div>
                    <button type='submit' className='btn'>Submit</button>
                </form>
                <div className='thumbnail'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3561.333740949082!2d80.9524250762582!3d26.79749997671615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjbCsDQ3JzUxLjAiTiA4MMKwNTcnMTguMCJF!5e0!3m2!1sen!2sin!4v1744788424697!5m2!1sen!2sin" loading="lazy"></iframe>
                </div>
            </div>
        </div>
    )
}

export default Contact
