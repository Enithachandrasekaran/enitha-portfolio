import { motion as Motion, useReducedMotion } from 'framer-motion'
import { useState } from 'react'
import {
  IconMail,
  IconMessage,
  IconPhone,
  IconUser,
} from '../Icons/Icons'
import './ContactForm.css'

const CONTACT_EMAIL =
  import.meta.env.VITE_CONTACT_RECEIVER_EMAIL || 'enitha2002c@gmail.com'
const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || ''

const MotionForm = Motion.form

function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')
  const reduce = useReducedMotion()

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const sendMessage = async (e) => {
    e.preventDefault()
    setSuccess(false)
    setError('')

    if (!WEB3FORMS_KEY) {
      setError(
        'Form is not set up yet. Get a free key at web3forms.com (use enitha2002c@gmail.com), add VITE_WEB3FORMS_ACCESS_KEY=your-key in .env, then restart npm run dev.',
      )
      return
    }

    setLoading(true)

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          name: form.name.trim(),
          email: form.email.trim(),
          phone: form.phone.trim(),
          message: form.message.trim(),
          subject: `Portfolio contact from ${form.name.trim()}`,
          from_name: 'Enitha Portfolio',
          replyto: form.email.trim(),
        }),
      })

      const result = await response.json()

      if (!response.ok || !result.success) {
        throw new Error(result?.message || 'Could not send message. Try again.')
      }

      setSuccess(true)
      setForm({ name: '', email: '', phone: '', message: '' })
    } catch (err) {
      const isNetwork =
        err?.name === 'TypeError' && String(err?.message || '').includes('fetch')
      setError(
        isNetwork
          ? 'Network error. Check your internet and try again.'
          : err?.message || 'Error sending message. Please try again.',
      )
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  const mailtoHref = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
    `Portfolio contact from ${form.name || 'visitor'}`,
  )}&body=${encodeURIComponent(
    `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\n\n${form.message}`,
  )}`

  return (
    <section id="contact" className="contact-container section-block">
      <div className="section-block__inner">
        <h2 className="section-block__title section-block__title--icon">
          <IconMessage className="section-title__icon" />
          Contact
        </h2>
        <p className="section-block__subtitle">
          Messages go to <strong>{CONTACT_EMAIL}</strong>
        </p>

        <MotionForm
          className="contact-form"
          onSubmit={sendMessage}
          initial={reduce ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
        >
          <label className="contact-form__field">
            <span className="contact-form__field-icon">
              <IconUser className="contact-form__icon" />
            </span>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
              autoComplete="name"
            />
          </label>

          <label className="contact-form__field">
            <span className="contact-form__field-icon">
              <IconMail className="contact-form__icon" />
            </span>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
              autoComplete="email"
            />
          </label>

          <label className="contact-form__field">
            <span className="contact-form__field-icon">
              <IconPhone className="contact-form__icon" />
            </span>
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={form.phone}
              onChange={handleChange}
              required
              autoComplete="tel"
            />
          </label>

          <label className="contact-form__field contact-form__field--area">
            <span className="contact-form__field-icon">
              <IconMessage className="contact-form__icon" />
            </span>
            <textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              required
            />
          </label>

          <Motion.button
            type="submit"
            disabled={loading}
            whileHover={reduce || loading ? undefined : { scale: 1.01 }}
            whileTap={reduce || loading ? undefined : { scale: 0.98 }}
          >
            {loading ? 'Sending...' : 'Send Message'}
          </Motion.button>

          <p className="contact-form__mailto">
            Or email directly:{' '}
            <a href={mailtoHref}>{CONTACT_EMAIL}</a>
          </p>

          {success ? (
            <p className="success-msg">Message sent successfully.</p>
          ) : null}
          {error ? <p className="error-msg">{error}</p> : null}
        </MotionForm>
      </div>
    </section>
  )
}

export default Contact
