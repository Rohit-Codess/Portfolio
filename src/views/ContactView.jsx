import { useState } from 'react'
import { sendEmail } from '../controllers/contactController'
import Input from '../components/ui/Input'
import Button from '../components/ui/Button'
import { toast } from 'react-hot-toast'

const ContactView = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    sendEmail(
      form,
      () => {
        setLoading(false)
        toast.success('Message sent successfully!')
        setForm({ name: '', email: '', message: '' })
      },
      () => {
        setLoading(false)
        toast.error('Failed to send message. Try again later.')
      }
    )
  }

  return (
    <div id='contact' className="min-h-screen flex items-center justify-center p-6 bg-gray-50">
      <form onSubmit={handleSubmit} className="w-full max-w-lg space-y-4 bg-white p-8 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold mb-2">Get in Touch</h2>
        <Input name="name" placeholder="Your Name" value={form.name} onChange={handleChange} />
        <Input type="email" name="email" placeholder="Your Email" value={form.email} onChange={handleChange} />
        <textarea
          name="message"
          rows="4"
          required
          placeholder="Your Message"
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={form.message}
          onChange={handleChange}
        ></textarea>
        <Button text="Send Message" loading={loading} />
      </form>
    </div>
  )
}

export default ContactView
