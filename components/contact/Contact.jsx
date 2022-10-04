import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {SiDiscord} from 'react-icons/si'
import {AiOutlineInstagram} from 'react-icons/ai'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_4t9b6i5', 'template_puumbza', form.current, 'Mq_dJpGdEl01bffm8')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
        <article className='contact__option'>
          <MdOutlineEmail className='contact__option-icon' />
          <h4>Email</h4>
          <h5>dgrahatama@gmail.com</h5>
          <a href="mailto:dgrahatama@gmail.com">Send a message</a>
        </article>
        <article className='contact__option'>
          <SiDiscord className='contact__option-icon' />
          <h4>Discord</h4>
          <h5>Dyfa Grahatama</h5>
          <a href="https://discord.com/channels/@me/9201" target="_blank">Send a message</a>
        </article>
        <article className='contact__option'>
          <AiOutlineInstagram className='contact__option-icon' />
          <h4>Instagram</h4>
          <h5>@dyfa_grahatama</h5>
          <a href="https://instagram.com/dyfa_grahatama" target="_blank">Send a message</a>
        </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Write Your Name' required />
          <input type="email" name='email' placeholder='Write Your Email' required />
          <textarea name="message" rows="7" placeholder='What do you think about me?' required></textarea>
          <button type='submit' className='btn btn-primary'>Hit me Guys</button>
        </form>
      </div>
    </section>
  )
}

export default Contact