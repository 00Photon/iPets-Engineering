"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    // Reset form or show success message
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-ipets-cyan" />,
      title: "Email Us",
      details: ["info@ipets-engineering.com", "hr@ipets-engineering.com"],
      description: "Send us an email and we'll respond within 24 hours",
    },
    {
      icon: <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-ipets-red" />,
      title: "Call Us",
      details: ["+234 (0) 123 456 7890", "+234 (0) 987 654 3210"],
      description: "Speak directly with our team during business hours",
    },
    {
      icon: <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-ipets-light-blue" />,
      title: "Visit Us",
      details: ["Lagos, Nigeria", "Port Harcourt, Nigeria"],
      description: "Schedule a visit to our offices",
    },
    {
      icon: <Clock className="h-5 w-5 sm:h-6 sm:w-6 text-ipets-cyan" />,
      title: "Business Hours",
      details: ["Monday - Friday: 8:00 AM - 6:00 PM", "Saturday: 9:00 AM - 2:00 PM"],
      description: "We're available during these hours",
    },
  ]

  const services = [
    "Engineering & Design",
    "Project Management",
    "Procurement",
    "Construction & Installation",
    "Commissioning & Completion",
    "Operation & Maintenance",
    "General Inquiry",
  ]

  return (
    <div className="bg-zinc-50">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-zinc-900 to-zinc-800 text-white min-h-[50vh] flex items-center">
        <div className="container-max w-full">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="responsive-text-5xl font-bold mb-4 sm:mb-6 px-4 sm:px-0">Contact Us</h1>
            <p className="responsive-text-xl text-zinc-300 leading-relaxed px-4 sm:px-0">
              Get in touch with our team to discuss your project requirements and discover how we can help bring your
              vision to life.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Form */}
            <div className="order-2 lg:order-1">
              <h2 className="responsive-text-3xl font-bold text-zinc-900 mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-zinc-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-zinc-300 rounded-lg focus:ring-2 focus:ring-ipets-cyan focus:border-transparent shadow-sm text-sm sm:text-base"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-zinc-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-zinc-300 rounded-lg focus:ring-2 focus:ring-ipets-cyan focus:border-transparent shadow-sm text-sm sm:text-base"
                      placeholder="your.email@company.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-zinc-700 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-zinc-300 rounded-lg focus:ring-2 focus:ring-ipets-cyan focus:border-transparent shadow-sm text-sm sm:text-base"
                      placeholder="Your company name"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-zinc-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-zinc-300 rounded-lg focus:ring-2 focus:ring-ipets-cyan focus:border-transparent shadow-sm text-sm sm:text-base"
                      placeholder="+234 (0) 123 456 7890"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-zinc-700 mb-2">
                    Service of Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-zinc-300 rounded-lg focus:ring-2 focus:ring-ipets-cyan focus:border-transparent shadow-sm text-sm sm:text-base"
                  >
                    <option value="">Select a service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-zinc-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-zinc-300 rounded-lg focus:ring-2 focus:ring-ipets-cyan focus:border-transparent shadow-sm text-sm sm:text-base resize-none"
                    placeholder="Tell us about your project requirements..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-ipets-red hover:bg-red-600 text-white px-6 py-3 sm:py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center space-x-2 shadow-md hover:shadow-lg text-sm sm:text-base touch-manipulation"
                >
                  <Send className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="order-1 lg:order-2">
              <h2 className="responsive-text-3xl font-bold text-zinc-900 mb-6">Get in Touch</h2>
              <p className="text-base sm:text-lg text-zinc-600 mb-6 sm:mb-8 leading-relaxed">
                We're here to help with your engineering needs. Reach out to us through any of the following channels
                and our team will get back to you promptly.
              </p>

              <div className="space-y-4 sm:space-y-6">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="bg-white p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
                  >
                    <div className="flex items-start space-x-3 sm:space-x-4">
                      <div className="flex-shrink-0 mt-1">{info.icon}</div>
                      <div className="min-w-0 flex-1">
                        <h3 className="text-base sm:text-lg font-semibold text-zinc-900 mb-2">{info.title}</h3>
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-zinc-700 font-medium text-sm sm:text-base break-words">
                            {detail}
                          </p>
                        ))}
                        <p className="text-zinc-600 text-xs sm:text-sm mt-2">{info.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="responsive-text-3xl font-bold text-zinc-900 mb-4">Our Locations</h2>
            <p className="responsive-text-xl text-zinc-600">Find us at our offices across Nigeria</p>
          </div>

          <div className="bg-zinc-300 h-64 sm:h-80 lg:h-96 rounded-lg flex items-center justify-center shadow-md">
            <div className="text-center">
              <MapPin className="h-8 w-8 sm:h-12 sm:w-12 text-ipets-cyan mx-auto mb-4" />
              <p className="text-zinc-600 text-sm sm:text-base">Interactive map would be integrated here</p>
              <p className="text-xs sm:text-sm text-zinc-500">Lagos & Port Harcourt Offices</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-zinc-900 to-zinc-800 text-white">
        <div className="container-max text-center">
          <h2 className="responsive-text-4xl font-bold mb-4 sm:mb-6 px-4 sm:px-0">Ready to Start Your Project?</h2>
          <p className="responsive-text-xl text-zinc-300 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed px-4 sm:px-0">
            Let's discuss how iPets Engineering can help bring your vision to life with our comprehensive EPICOM
            solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center px-4 sm:px-0">
            <a
              href="mailto:info@ipets-engineering.com"
              className="btn-primary shadow-md hover:shadow-lg w-full sm:w-auto"
            >
              Email Us Now
            </a>
            <a href="tel:+2341234567890" className="btn-secondary shadow-md hover:shadow-lg w-full sm:w-auto">
              Call Us Today
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
