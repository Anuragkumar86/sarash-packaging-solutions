'use client'

import { useState } from 'react'

export default function ContactPage() {
  const [status, setStatus] = useState<string | null>(null)
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const formData = new FormData(form)

    const response = await fetch('/api/contact', {
      method: 'POST',
      body: formData,
    })

    if (response.ok) {
      setStatus('Thank you! Your message has been sent.')
      form.reset()
    } else {
      setStatus('Oops! Something went wrong, please try again.')
    }
  }


  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[15vh] bg-gradient-to-r from-blue-900 to-blue-600 flex items-center justify-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg text-center px-6">
          Get in Touch
        </h1>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto px-6 md:px-12 py-16 flex flex-col md:flex-row gap-14 md:gap-24 max-w-7xl flex-grow">
        {/* Contact Info */}
        <div className="md:w-1/2 bg-white rounded-2xl p-10 shadow-lg flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Contact Information</h2>
          <p className="text-gray-700 mb-8 leading-relaxed text-lg">
            We’d love to hear from you. Whether you’re curious about our products,
            need a quote, or want to discuss your packaging needs — we’re ready to answer.
          </p>
          <div className="space-y-5 text-gray-700 text-lg">
            <p>📍 <strong>Office:</strong> Gali No. 6, Shiv City Colony, Makhanpur, Bhagwanpur, Haridwar, Uttarakhand - 247661</p>
            <p>📞 <strong>Phone:</strong> +91 7654154900, +91 7004101167</p>
            <p>✉️ <strong>Email:</strong> sarash.pkg@gmail.com</p>
            <p>🆔 <strong>GSTIN:</strong> 05QZXPS9389J1ZK</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="md:w-1/2 bg-white rounded-2xl p-10 shadow-lg">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Send Us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <label className="block">
              <span className="text-gray-700 font-semibold">Full Name</span>
              <input
                type="text"
                name="name"
                required
                placeholder="Your full name"
                className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition"
              />
            </label>
            <label className="block">
              <span className="text-gray-700 font-semibold">Email</span>
              <input
                type="email"
                name="email"
                required
                placeholder="you@example.com"
                className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition"
              />
            </label>
            {/* <label className="block">
              <span className="text-gray-700 font-semibold">Phone</span>
              <input
                type="tel"
                name="phone"
                placeholder="+91 9999999999"
                className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition"
              />
            </label> */}
            <label className="block">
              <span className="text-gray-700 font-semibold">Message</span>
              <textarea
                name="message"
                rows={5}
                required
                placeholder="Tell us how we can help..."
                className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition"
              />
            </label>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg shadow-md hover:bg-blue-700 transition"
            >
              Send Message
            </button>
            {status && (
              <p
                className={`text-center mt-2 font-medium ${status.startsWith('Thank') ? 'text-green-600' : 'text-red-600'
                  }`}
              >
                {status}
              </p>
            )}
          </form>
        </div>
      </section>

      {/* Google Map Section */}
      <section className="h-96 w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3459.037857158788!2d78.0833!3d29.9156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39093fdd93f0c0c3%3A0x123456789abcdef!2sBhagwanpur%2C%20Haridwar%2C%20Uttarakhand%20247661!5e0!3m2!1sen!2sin!4v1694012345678"
          width="100%"
          height="100%"
          allowFullScreen={false}
          loading="lazy"
          className="border-0 w-full h-full"
          title="SARASH Location"
        ></iframe>
      </section>
    </div>
  )
}
