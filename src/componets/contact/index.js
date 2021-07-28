import './styles.css';
import { useState } from 'react';
import emailjs from 'emailjs-com';

export default function Contact () {
  const [email, setEmail] = useState({
    name:'',
    email:'',
    subject:'',
    message:''
  });

  const updateEmail = (e) => {
    setEmail({
      ...email,
      [e.target.name]: e.target.value
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_hd07kgs', 'template_690bcji', e.target, 'user_cXWPv5eluxd32uG1EwirT')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    e.target.reset();
  }

  return(
    <div className='contact'>
      <h1 className='contact-title'>Contact Me</h1>
      <div className='contact-container'>
        <form className='email-form' onSubmit={sendEmail}>
          <input placeholder='Name' id='name' name='name'/>
          <input placeholder='Email' id='email' name='email'/>
          <input placeholder='Subject' id='subject' name='subject'/>
          <textarea placeholder='Message' id='message' name='message'/>
          <button className='email-btn'>Send Email</button>
        </form>

        <div className='contact-info'>
          <div className='email-container icon-container'>
            <svg viewBox="0 0 24 24" className='email-icon'>
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
            <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
            <p>dortaedward@gmail.com</p>
          </div>
          <div className='icon-container'>
            <svg viewBox="0 0 24 24" className='phone-icon'>
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            <p>1-(646)-355-7925</p>
          </div>
          <div className='icon-container'>
            <svg viewBox="0 0 24 24" className='location-icon'>
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            <p>New York, 10468, USA</p>
          </div>
          <div className='icon-container'>
            <svg viewBox="0 0 24 24" className='linkedin-icon'>
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
            <p>https://www.linkedin.com/in/edwarddorta/</p>
          </div>
          <div className='icon-container'>
            <svg viewBox="0 0 24 24" className='github-icon'>
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
              <p>https://github.com/DortaEdward</p>
          </div>
        </div>
      </div>
    </div>
  )
};