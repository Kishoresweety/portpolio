import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import "./contact.css"

const Result = () =>{
    return (
        <p>Your message has been successfully sent.</p>
    )
}

const Contact = () => {
                                //   Email.js Function
    const form = useRef();
    const [result, showResult] = useState(false);
    const sendEmail = (e) => {
     e.preventDefault();

    emailjs
    .sendForm(
        'service_mb0pdc7', 
        'template_wtzx4ej', 
        form.current, 
        'nlQWBsICqOWJa9xVn'
    )
    .then(
        (result) => {
            console.log(result.text)
        },
        (error) => {
            console.log(error.text)
        }
    );
    e.target.reset();
    showResult(true);
    };
                                  // Form Details
  return (
   <section className="contact section" id="contact">
        <h1 className="section__title">Get in touch</h1>
        <span className="section__subtitle">Contact Me</span>

        <div className="contact__container container grid">
            <div className="contact__content">
                <h1 className="contact__title">Talk to me</h1>

                <div className="contact_info">
                    <div className="contact__card">
                        <i className="bx bx-mail-send contact__card-icon"></i>

                        <h3 className="contact__card-title">Email</h3>
                        <span className="contact__card-data">user@gmail.com</span>

                        <a href="mailto:kishore21061@gmail.com" className="contact__button">Write me{" "}
                         <i className="bx bx-right-arrow-alt contact__button-icon"></i></a>
                    </div>

                    <div className="contact__card">
                        <i className="bx bxl-whatsapp contact__card-icon"></i>

                        <h3 className="contact__card-title">Whatsapp</h3>
                        <span className="contact__card-data">999-888-777</span>

                        <a href="https://api.whatsapp.com/send?phone=919786750241&text=Hello,%20more%20information" className="contact__button">Write me{" "}
                         <i className="bx bx-right-arrow-alt contact__button-icon"></i></a>
                    </div>

                    <div className="contact__card">
                        <i className="bx bxl-messenger contact__card-icon"></i>
                        

                        <h3 className="contact__card-title">Messenger</h3>
                        <span className="contact__card-data">user.fb123</span>

                        <a href="m.me/kishore.kishor.984" className="contact__button">Write me{" "}
                         <i className="bx bx-right-arrow-alt contact__button-icon"></i></a>
                    </div>
                </div>
            </div>

            <div className="contact__content">
                <h3 className="contact__title">Write me your message</h3>

                <form ref={form} onSubmit={sendEmail}
                className="contact__form">
                    <div className="contact__form-div">
                        <label  className="contact__form-tag">Name</label>
                        <input
                        type="text"
                        name="name" 
                        className="contact__form-input" 
                        placeholder="Insert your name"
                        />
                    </div>

                    <div className="contact__form-div">
                        <label  className="contact__form-tag">Mail</label>
                        <input
                        type="email"
                        name="email" 
                        className="contact__form-input" 
                        placeholder="Insert your email"
                        />
                    </div>

                    <div className="contact__form-div">
                        <label  className="contact__form-tag">Message</label>
                        <textarea
                        name="message" id="" 
                        cols="30" 
                        rows="10" 
                        className="contact__form-input" 
                        placeholder="Write your message"
                        ></textarea>
                    </div>
                    <input type="submit"
                      value ="Send Message">
                    </input>

                    <div className="row">{result ? <Result /> : null}</div>
              </form>
            </div>
        </div>
   </section>
  )
}

export default Contact