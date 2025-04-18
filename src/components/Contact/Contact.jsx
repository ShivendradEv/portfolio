import React, { useState, useEffect, useRef } from 'react';
import { useForm } from "react-hook-form"
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from 'emailjs-com';
import { db } from '../firebase';
import { collection, addDoc } from "firebase/firestore";
import "./Contact.css";

const Contact = () => {

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    const [formSubmitted, setFormSubmitted] = useState(false);
    const [captchaVerified, setCaptchaVerified] = useState(false);
    const [loading, setLoading] = useState(false);
    const [success, setSuccsess] = useState(false);
    const [error, setError] = useState(false);
    const captchaRef = useRef();

    const { register, handleSubmit, formState: { errors }, setValue, reset } = useForm();

    useEffect(() => {
        const todayDate = new Date().toISOString().split('T')[0];
        const todayTime = new Date().toTimeString().split(' ')[0];
        const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        setValue("date", todayDate);
        setValue("time", todayTime);
        setValue("timezone", timezone);
    }, [setValue]);

    const onSubmit = async (data) => {
        setFormSubmitted(true);
        if (!captchaVerified) return;
        setLoading(true);
        try {
            await addDoc(collection(db, "contact"), data);
            await emailjs.send(
                serviceId,
                templateId,
                data,
                publicKey
            );
            setSuccsess(true);
            reset();
            captchaRef.current.reset();
        } catch (err) {
            console.error("Error:", err);
            setError(true);
        } finally {
            setLoading(false);
        }
    };

    const onInvalid = () => setFormSubmitted(true);

    function onChange(value) {
        if (value !== null) {
            setCaptchaVerified(true);
        }
        else {
            setCaptchaVerified(false);
        }
    }

    return (
        <>
            <div className={`thankyou-msg ${success ? "show" : ""}`}>
                <button type='button' className='close' onClick={() => setSuccsess(false)}><img src='close.png' alt='close icon' /></button>
                <h2>🎉 Thank You!</h2>
                <p>
                    Your message has been sent successfully.
                    I’ll get back to you as soon as possible.
                    Have a great day! 😊
                </p>
            </div>
            <div className={`error-msg ${error ? "show" : ""}`}>
                <button type='button' className='close' onClick={() => setError(false)}><img src='close.png' alt='close icon' /></button>
                <h2>⚠️ Error</h2>
                <p>
                    🙁 Something went wrong. Please try again.
                </p>
            </div>
            {loading && <div className='loader'><span className='spinner'></span></div>}
            <div className='container' id='contact'>
                <div className='contact-main'>
                    <form className='contact' onSubmit={handleSubmit(onSubmit, onInvalid)}>
                        <h2 className='heading'>Contact Me</h2>
                        <input type='hidden' {...register("date")} />
                        <input type='hidden' {...register("time")} />
                        <input type='hidden' {...register("timezone")} />
                        <div className='form-group'>
                            <label htmlFor="name">Name</label>
                            <input type='text' className={`form-control ${errors.name ? "error-input" : ""}`} id='name' {...register("name", { required: true })} />
                            {errors.name && <span className='error-field'>This field is required.</span>}
                        </div>
                        <div className='form-group'>
                            <label htmlFor="email">Email</label>
                            <input type='text' className={`form-control ${errors.email ? "error-input" : ""}`} id='email' {...register("email", {
                                required: "This field is required.",
                                pattern: {
                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                    message: "Please enter a valid email."
                                }
                            })} />
                            {errors.email && <span className='error-field'>{errors.email.message}</span>}
                        </div>
                        <div className='form-group'>
                            <label htmlFor="message">Message</label>
                            <textarea className={`form-control ${errors.message ? "error-input" : ""}`} id='message' placeholder='Type your message...' {...register("message", { required: true })} />
                            {errors.message && <span className='error-field'>This field is required.</span>}
                        </div>
                        <div className='captcha'>
                            <ReCAPTCHA sitekey="6Lf89xorAAAAAPMMS3x7R8TKEe-g1oebwcTgTmN5" onChange={onChange} ref={captchaRef} />
                            {!captchaVerified && formSubmitted && <span className='error-field'>Please verify the CAPTCHA.</span>}
                        </div>
                        <button type='submit' className='btn'>Submit</button>
                    </form>
                    <div className='thumbnail'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3561.333740949082!2d80.9524250762582!3d26.79749997671615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjbCsDQ3JzUxLjAiTiA4MMKwNTcnMTguMCJF!5e0!3m2!1sen!2sin!4v1744788424697!5m2!1sen!2sin" loading="lazy"></iframe>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;
