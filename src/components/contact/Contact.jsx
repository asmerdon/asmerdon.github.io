import React, { useRef, useState } from 'react'
import './contact.css'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef()
  const [status, setStatus] = useState(null)

  const sendEmail = (e) => {
    e.preventDefault()
    setStatus('sending')

    emailjs.sendForm('service_t7x2vip', 'template_0ip5at6', form.current, 'R8o_9L9GesOHJ_ALH')
      .then(() => {
        setStatus('sent')
        form.current.reset()
      })
      .catch(() => {
        setStatus('error')
      })
  }

  return (
    <section id="contact">
      <h1 className="section__title">Contact Me</h1>

      <div className="container contact__container">
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="7" placeholder="Your Message" required />
          <button type="submit" className="btn btn-primary" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending...' : 'Send Message'}
          </button>
          {status === 'sent' && <p className="contact__status" role="status">Thanks, your message has been sent.</p>}
          {status === 'error' && <p className="contact__status contact__status--error" role="status">Something went wrong. Please try again later.</p>}
        </form>
      </div>
    </section>
  )
}

export default Contact
