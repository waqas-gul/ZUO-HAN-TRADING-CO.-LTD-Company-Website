'use client'

import { useState } from 'react'
import { Mail, AlertCircle, CheckCircle, Loader2 } from 'lucide-react'

export default function ContactForm() {
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
    newsletter: false,
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setStatus({
          type: 'success',
          message: 'Message sent successfully! We will get back to you soon.',
        })
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          subject: '',
          message: '',
          newsletter: false,
        })
        // Auto-clear success message after 5 seconds
        setTimeout(() => setStatus(null), 5000)
      } else {
        setStatus({
          type: 'error',
          message: data.message || 'Failed to send message. Please try again.',
        })
      }
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'An error occurred. Please try again later.',
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-border bg-slate-900 p-8 shadow-lg hover:shadow-xl transition-shadow"
    >
      <h3 className="mb-2 text-2xl font-bold text-white">Send us a Message</h3>
      <p className="mb-6 text-secondary">
        Fill out the form below and we'll get back to you within 24 hours.
      </p>

      {/* Status Messages */}
      {status && (
        <div
          className={`mb-6 rounded-lg p-4 flex items-start gap-3 border ${
            status.type === "success"
              ? "bg-success/10 border-success/30 text-success"
              : "bg-error/10 border-error/30 text-error"
          }`}
        >
          {status.type === "success" ? (
            <CheckCircle size={20} className="flex-shrink-0 mt-0.5" />
          ) : (
            <AlertCircle size={20} className="flex-shrink-0 mt-0.5" />
          )}
          <p className="text-sm">{status.message}</p>
        </div>
      )}

      {/* Name & Email Row */}
      <div className="mb-4 grid gap-4 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-semibold text-white">
            Full Name <span className="text-error">*</span>
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full rounded-lg border border-border bg-slate-800 px-4 py-3 text-white placeholder:text-muted focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all"
            placeholder="John Doe"
          />
        </div>
        <div>
          <label className="mb-2 block text-sm font-semibold text-white">
            Email Address <span className="text-error">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full rounded-lg border border-border bg-slate-800 px-4 py-3 text-white placeholder:text-muted focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all"
            placeholder="john@company.com"
          />
        </div>
      </div>

      {/* Phone & Company Row */}
      <div className="mb-4 grid gap-4 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-semibold text-white">
            Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full rounded-lg border border-border bg-slate-800 px-4 py-3 text-white placeholder:text-muted focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all"
            placeholder="+971 50 123 4567"
          />
        </div>
        <div>
          <label className="mb-2 block text-sm font-semibold text-white">
            Company Name
          </label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full rounded-lg border border-border bg-slate-800 px-4 py-3 text-white placeholder:text-muted focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all"
            placeholder="Your Company Ltd."
          />
        </div>
      </div>

      {/* Subject */}
      <div className="mb-4">
        <label className="mb-2 block text-sm font-semibold text-white">
          Subject <span className="text-error">*</span>
        </label>
        <select
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="w-full rounded-lg border border-border bg-slate-800 px-4 py-3 text-white focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all"
        >
          <option value="">Select a subject...</option>
          <option value="Contract Packaging Inquiry">
            Contract Packaging Inquiry
          </option>
          <option value="Private Label Services">Private Label Services</option>
          <option value="Product Development">Product Development</option>
          <option value="Quality & Compliance">Quality & Compliance</option>
          <option value="Bulk Pricing Request">Bulk Pricing Request</option>
          <option value="Partnership Opportunity">
            Partnership Opportunity
          </option>
          <option value="Other">Other</option>
        </select>
      </div>

      {/* Message */}
      <div className="mb-6">
        <label className="mb-2 block text-sm font-semibold text-white">
          Message <span className="text-error">*</span>
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full rounded-lg border border-border bg-slate-800 px-4 py-3 text-white placeholder:text-muted focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all resize-none"
          placeholder="Tell us about your packaging or private label requirements, product specifications, and timeline..."
        />
      </div>

      {/* Newsletter Checkbox */}
      <div className="mb-6 flex items-start gap-3 rounded-lg bg-accent/10 p-4 border border-accent/30">
        <input
          type="checkbox"
          id="newsletter"
          name="newsletter"
          checked={formData.newsletter}
          onChange={handleChange}
          className="mt-1 rounded border-border cursor-pointer accent-accent"
        />
        <label
          htmlFor="newsletter"
          className="cursor-pointer text-sm text-secondary leading-relaxed"
        >
          Yes, subscribe me to the Zuohan Trading newsletter for packaging
          insights, industry trends, and exclusive offers.
        </label>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={loading}
        className="button-primary w-full disabled:opacity-70 transition-all flex items-center justify-center gap-2 font-semibold bg-accent hover:bg-accent-light text-foreground"
      >
        {loading ? (
          <>
            <Loader2 size={20} className="animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Mail size={20} />
            Send Message
          </>
        )}
      </button>

      <p className="mt-4 text-xs text-center text-muted">
        We respect your privacy. Your information will only be used to respond
        to your inquiry.
      </p>
    </form>
  );
}
