'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle } from 'lucide-react'

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('sent')
        setForm({ name: '', email: '', phone: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-40 px-6 md:px-20 max-w-[1400px] mx-auto">
      <div className="grid lg:grid-cols-12 gap-12">
        {/* Left intro */}
        <div className="lg:col-span-4 hidden lg:flex flex-col justify-between border-t border-black/5 pt-8">
          <div>
            <span className="text-xs font-normal tracking-[0.2em] text-[#b19777] uppercase">Get in touch</span>
            <p className="text-sm text-gray-400 mt-8 max-w-xs leading-relaxed font-light">
              Ready to transform your space? Reach out and one of our designers will respond within 24 hours.
            </p>
          </div>
          <div className="flex flex-col gap-2 text-xs text-gray-400 tracking-[0.1em]">
            <span>0726 452055</span>
            <span>petricolimited@gmail.com</span>
          </div>
        </div>

        {/* Right form */}
        <div className="lg:col-span-7 lg:col-start-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="display-font text-4xl md:text-6xl font-normal tracking-tight text-[#111] mb-16 uppercase">
              Start Your
              <br />
              <span className="italic font-light">Project</span>
            </h2>

            {status === 'sent' ? (
              <div className="flex flex-col items-start gap-4 text-[#111]">
                <CheckCircle className="w-12 h-12 text-[#b19777]" strokeWidth={1.5} />
                <h3 className="display-font text-2xl font-normal">Message received.</h3>
                <p className="text-gray-500 font-light">We&apos;ll be in touch within 24 hours.</p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-6 text-xs uppercase tracking-[0.2em] text-[#b19777] hover:underline"
                >
                  Send another →
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] uppercase tracking-[0.2em] text-gray-400">Full Name</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="John Smith"
                      className="bg-transparent border-b border-black/15 pb-3 text-[#111] placeholder:text-gray-300 focus:outline-none focus:border-[#b19777] transition-colors text-sm font-light"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] uppercase tracking-[0.2em] text-gray-400">Email</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="john@email.com"
                      className="bg-transparent border-b border-black/15 pb-3 text-[#111] placeholder:text-gray-300 focus:outline-none focus:border-[#b19777] transition-colors text-sm font-light"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-gray-400">Phone (optional)</label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="+254 7XX XXX XXX"
                    className="bg-transparent border-b border-black/15 pb-3 text-[#111] placeholder:text-gray-300 focus:outline-none focus:border-[#b19777] transition-colors text-sm font-light"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-gray-400">Tell us about your project</label>
                  <textarea
                    required
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="I&apos;m looking to redesign my living room and kitchen..."
                    rows={4}
                    className="bg-transparent border-b border-black/15 pb-3 text-[#111] placeholder:text-gray-300 focus:outline-none focus:border-[#b19777] transition-colors resize-none text-sm font-light"
                  />
                </div>

                {status === 'error' && (
                  <p className="text-red-500 text-sm font-light">Something went wrong. Please try again or email us directly.</p>
                )}

                <div className="flex items-center justify-between mt-4">
                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="group flex items-center gap-4 text-xs font-normal uppercase tracking-[0.2em] hover:text-[#b19777] transition-colors disabled:opacity-50"
                  >
                    {status === 'sending' ? 'Sending...' : 'Send Message'}
                    <div className="w-10 h-10 rounded-full border border-current flex items-center justify-center group-hover:bg-[#b19777] group-hover:border-[#b19777] group-hover:text-white transition-all duration-300">
                      <Send className="w-3.5 h-3.5" strokeWidth={1.5} />
                    </div>
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
