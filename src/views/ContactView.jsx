import { useState } from 'react'
import { sendEmail } from '../controllers/contactController'
import Input from '../components/ui/Input'
import Button from '../components/ui/Button'
import { toast } from 'react-hot-toast'
import { motion as Motion } from 'framer-motion'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

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
    <section className="min-h-screen py-20 px-6 bg-gradient-to-br from-gray-50 via-white to-pink-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-pink-400 to-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{animationDelay: '3s'}}></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <Motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full text-sm text-gray-600 font-medium mb-6 shadow-lg">
            <FaPaperPlane className="mr-2 text-pink-600" />
            Let's Connect
          </div>
          <h1 className="text-4xl md:text-5xl font-semibold mb-4 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-600 font-normal max-w-2xl mx-auto">
            Ready to start your next project? Let's discuss how I can help bring your ideas to life.
          </p>
        </Motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Motion.div
            className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-200"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <h2 className="text-2xl font-medium text-gray-800 mb-6">Send me a message</h2>
              
              <div className="space-y-4">
                <Input 
                  name="name" 
                  placeholder="Your Name" 
                  value={form.name} 
                  onChange={handleChange}
                  className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent bg-white/50 backdrop-blur-sm"
                />
                <Input 
                  type="email" 
                  name="email" 
                  placeholder="Your Email" 
                  value={form.email} 
                  onChange={handleChange}
                  className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent bg-white/50 backdrop-blur-sm"
                />
                <textarea
                  name="message"
                  rows="6"
                  required
                  placeholder="Your Message"
                  className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent bg-white/50 backdrop-blur-sm resize-none"
                  value={form.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              
              <Button 
                text={loading ? "Sending..." : "Send Message"} 
                loading={loading}
                className="w-full py-4 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-xl font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
              />
            </form>
          </Motion.div>

          {/* Contact Info */}
          <Motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Contact Cards */}
            <div className="space-y-6">
              {[
                {
                  icon: FaEnvelope,
                  title: 'Email',
                  content: 'rohitmahto7479@gmail.com',
                  color: 'pink'
                },
                {
                  icon: FaPhone,
                  title: 'Phone',
                  content: '+91 70619 86556',
                  color: 'purple'
                },
                {
                  icon: FaMapMarkerAlt,
                  title: 'Location',
                  content: 'Ranchi, Jharkhand, India',
                  color: 'blue'
                }
              ].map((item, index) => (
                <Motion.div
                  key={item.title}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200 flex items-center space-x-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
                >
                  <div className={`p-3 rounded-xl bg-gradient-to-r from-${item.color}-500 to-${item.color}-600 text-white`}>
                    <item.icon className="text-xl" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800">{item.title}</h3>
                    <p className="text-gray-600 font-normal">{item.content}</p>
                  </div>
                </Motion.div>
              ))}
            </div>

            {/* Social Links */}
            <Motion.div
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <h3 className="font-medium text-gray-800 mb-4">Follow me on social media</h3>
              <div className="flex space-x-4">
                {[
                  { icon: FaGithub, href: 'https://github.com/Rohit-Codess/', color: 'gray' },
                  { icon: FaLinkedin, href: 'https://linkedin.com/in/itsrohitdev', color: 'blue' },
                  { icon: FaTwitter, href: 'https://x.com/rohitmahto7479/', color: 'blue' }
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-xl bg-gradient-to-r from-${social.color}-500 to-${social.color}-600 text-white hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300`}
                  >
                    <social.icon className="text-xl" />
                  </a>
                ))}
              </div>
            </Motion.div>
          </Motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactView
