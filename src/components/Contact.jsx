import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';

const contactInfo = [
  {
    icon: '📧',
    label: 'Email',
    value: 'harvanshchaurasia@gmail.com',
    href: 'mailto:harvanshchaurasia@gmail.com',
    color: '#6c63ff',
  },
  {
    icon: '💼',
    label: 'LinkedIn',
    value: 'linkedin.com/in/harvansh-chaurasia',
    href: 'https://linkedin.com/in/harvansh-chaurasia',
    color: '#0077b5',
  },
  {
    icon: '🐙',
    label: 'GitHub',
    value: 'github.com/harvansh',
    href: 'https://github.com/harvansh',
    color: '#e8e8f0',
  },
];

/* Social quick-link buttons (GitHub, LinkedIn, Email) */
const socialBtns = [
  {
    label: 'GitHub',
    href: 'https://github.com/harvansh',
    color: '#e8e8f0',
    hoverBg: 'rgba(232,232,240,0.1)',
    isEmail: false,
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/harvansh-chaurasia',
    color: '#0ea5e9',
    hoverBg: 'rgba(14,165,233,0.1)',
    isEmail: false,
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: 'Email Me',
    href: 'mailto:harvanshchaurasia@gmail.com',
    color: '#a78bfa',
    hoverBg: 'rgba(108,99,255,0.15)',
    isEmail: true,
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
];

// ── EmailJS Config ─────────────────────────────────────────────────────────────
const EMAILJS_SERVICE_ID  = 'service_8hzzqm9';
const EMAILJS_TEMPLATE_ID = 'template_cvwpfp8';
const EMAILJS_PUBLIC_KEY  = 'GOOotVRtWxyceoElQ';
// Initialize EmailJS once
emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });
// ──────────────────────────────────────────────────────────────────────────────

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState(null);
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('harvanshchaurasia@gmail.com').then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const handleChange = e => setForm(p => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus('sending');

    if (
      EMAILJS_SERVICE_ID === 'YOUR_SERVICE_ID' ||
      EMAILJS_TEMPLATE_ID === 'YOUR_TEMPLATE_ID' ||
      EMAILJS_PUBLIC_KEY === 'YOUR_PUBLIC_KEY'
    ) {
      const mailtoUrl = `mailto:harvanshchaurasia@gmail.com`
        + `?subject=${encodeURIComponent(form.subject)}`
        + `&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`)}`;
      window.location.href = mailtoUrl;
      setStatus('success');
      setForm({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus(null), 5000);
      return;
    }

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name:    form.name,
          email:   form.email,
          subject: form.subject,
          message: form.message,
          title:   form.subject,
        }
      );
      setStatus('success');
      setForm({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus(null), 5000);
    } catch (err) {
      console.error('EmailJS error:', err);
      if (err && err.status) console.error('Status:', err.status, 'Text:', err.text);
      setStatus('error');
      setTimeout(() => setStatus(null), 5000);
    }
  };

  const inputStyle = {
    width: '100%',
    padding: '12px 16px',
    borderRadius: '12px',
    fontSize: '0.875rem',
    outline: 'none',
    transition: 'all 0.3s ease',
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(108,99,255,0.2)',
    color: '#e8e8f0',
  };

  return (
    <section id="contact" className="section-padding relative" ref={ref}
      style={{ background: 'rgba(10,15,46,0.5)' }}
    >
      <div className="absolute left-0 bottom-0 w-80 h-80 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(108,99,255,0.08) 0%, transparent 70%)', filter: 'blur(60px)' }}
      />
      <div className="absolute right-0 top-0 w-80 h-80 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,212,255,0.06) 0%, transparent 70%)', filter: 'blur(60px)' }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-10">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-12" style={{ background: 'linear-gradient(90deg, transparent, #6c63ff)' }} />
            <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: '#6c63ff' }}>
              Contact
            </span>
            <div className="h-px w-12" style={{ background: 'linear-gradient(90deg, #6c63ff, transparent)' }} />
          </div>
          <h2 className="section-title">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-4 mt-8"
          >
            {socialBtns.map(btn => (
              btn.isEmail ? (
                // Email button — copy to clipboard
                <motion.button
                  key={btn.label}
                  type="button"
                  onClick={copyEmail}
                  whileHover={{ scale: 1.06, y: -3 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300"
                  style={{
                    background: copied ? 'rgba(134,239,172,0.15)' : btn.hoverBg,
                    border: `1px solid ${copied ? '#86efac' : btn.color}40`,
                    color: copied ? '#86efac' : btn.color,
                    minWidth: '140px',
                    justifyContent: 'center',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={e => {
                    if (!copied) {
                      e.currentTarget.style.background = 'rgba(108,99,255,0.25)';
                      e.currentTarget.style.borderColor = btn.color;
                      e.currentTarget.style.boxShadow = `0 8px 25px ${btn.color}30`;
                    }
                  }}
                  onMouseLeave={e => {
                    if (!copied) {
                      e.currentTarget.style.background = btn.hoverBg;
                      e.currentTarget.style.borderColor = `${btn.color}40`;
                      e.currentTarget.style.boxShadow = 'none';
                    }
                  }}
                >
                  {copied ? (
                    <>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      Copied!
                    </>
                  ) : (
                    <>
                      {btn.icon}
                      {btn.label}
                    </>
                  )}
                </motion.button>
              ) : (
                <motion.a
                  key={btn.label}
                  href={btn.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.06, y: -3 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300"
                  style={{
                    background: btn.hoverBg,
                    border: `1px solid ${btn.color}40`,
                    color: btn.color,
                    minWidth: '140px',
                    justifyContent: 'center',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = btn.hoverBg.replace('0.1', '0.2').replace('0.15', '0.25');
                    e.currentTarget.style.borderColor = btn.color;
                    e.currentTarget.style.boxShadow = `0 8px 25px ${btn.color}30`;
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = btn.hoverBg;
                    e.currentTarget.style.borderColor = `${btn.color}40`;
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  {btn.icon}
                  {btn.label}
                </motion.a>
              )
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
            className="inline-flex items-center gap-3 mt-6 px-5 py-3 rounded-full glass-card"
            style={{ border: '1px solid rgba(134,239,172,0.25)' }}
          >
            <div className="relative">
              <div className="w-3 h-3 rounded-full" style={{ background: '#86efac' }} />
              <div className="absolute inset-0 w-3 h-3 rounded-full animate-ping" style={{ background: '#86efac', opacity: 0.4 }} />
            </div>
            <p className="text-sm" style={{ color: '#c4c4d4' }}>
              <span className="font-semibold" style={{ color: '#86efac' }}>Available</span> for new opportunities
            </p>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-2 space-y-4"
          >
            <div className="mb-6">
              <h3 className="text-xl font-bold text-white mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                Let's work together
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: '#9ca3af' }}>
                I'm currently open to freelance opportunities and full-time roles.
                Whether you have a question or just want to say hi, my inbox is always open!
              </p>
            </div>

            {contactInfo.map((info, i) => (
              <motion.a
                key={info.label}
                href={info.href}
                target={info.label !== 'Email' ? '_blank' : undefined}
                rel={info.label !== 'Email' ? 'noopener noreferrer' : undefined}
                onClick={info.label === 'Email' ? e => {
                  e.preventDefault();
                  copyEmail();
                } : undefined}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1 }}
                whileHover={{ x: 6, scale: 1.02 }}
                className="glass-card p-4 flex items-center gap-4 group"
                style={{ border: `1px solid ${info.color}25`, cursor: 'pointer' }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                  style={{ background: `${info.color}15`, border: `1px solid ${info.color}30` }}
                >
                  {info.icon}
                </div>
                <div className="overflow-hidden flex-1 min-w-0">
                  <p className="text-xs font-semibold mb-0.5" style={{ color: info.color }}>{info.label}</p>
                  <p className="text-sm truncate" style={{ color: '#c4c4d4' }}>{info.value}</p>
                </div>
                <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0">
                  <span style={{ color: info.color }}>→</span>
                </div>
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="glass-card p-8 space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-xs font-semibold tracking-wide uppercase" style={{ color: '#9ca3af' }}>Name</label>
                  <input
                    type="text" name="name" value={form.name} onChange={handleChange} required
                    placeholder="Your name"
                    style={inputStyle}
                    onFocus={e => { e.target.style.borderColor = '#6c63ff'; e.target.style.boxShadow = '0 0 0 3px rgba(108,99,255,0.1)'; }}
                    onBlur={e => { e.target.style.borderColor = 'rgba(108,99,255,0.2)'; e.target.style.boxShadow = 'none'; }}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-semibold tracking-wide uppercase" style={{ color: '#9ca3af' }}>Email</label>
                  <input
                    type="email" name="email" value={form.email} onChange={handleChange} required
                    placeholder="your@email.com"
                    style={inputStyle}
                    onFocus={e => { e.target.style.borderColor = '#6c63ff'; e.target.style.boxShadow = '0 0 0 3px rgba(108,99,255,0.1)'; }}
                    onBlur={e => { e.target.style.borderColor = 'rgba(108,99,255,0.2)'; e.target.style.boxShadow = 'none'; }}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold tracking-wide uppercase" style={{ color: '#9ca3af' }}>Subject</label>
                <input
                  type="text" name="subject" value={form.subject} onChange={handleChange} required
                  placeholder="What's this about?"
                  style={inputStyle}
                  onFocus={e => { e.target.style.borderColor = '#6c63ff'; e.target.style.boxShadow = '0 0 0 3px rgba(108,99,255,0.1)'; }}
                  onBlur={e => { e.target.style.borderColor = 'rgba(108,99,255,0.2)'; e.target.style.boxShadow = 'none'; }}
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold tracking-wide uppercase" style={{ color: '#9ca3af' }}>Message</label>
                <textarea
                  name="message" value={form.message} onChange={handleChange} required rows={5}
                  placeholder="Tell me about your project..."
                  style={{ ...inputStyle, resize: 'none' }}
                  onFocus={e => { e.target.style.borderColor = '#6c63ff'; e.target.style.boxShadow = '0 0 0 3px rgba(108,99,255,0.1)'; }}
                  onBlur={e => { e.target.style.borderColor = 'rgba(108,99,255,0.2)'; e.target.style.boxShadow = 'none'; }}
                />
              </div>

              <motion.button
                type="submit"
                disabled={status === 'sending'}
                whileHover={status !== 'sending' ? { scale: 1.02, y: -2 } : {}}
                whileTap={status !== 'sending' ? { scale: 0.98 } : {}}
                className="btn-primary w-full"
                style={{ opacity: status === 'sending' ? 0.8 : 1 }}
              >
                {status === 'sending' ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">Send Message 🚀</span>
                )}
              </motion.button>

              <AnimatePresence>
                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-center py-3 px-4 rounded-xl text-sm font-medium"
                    style={{
                      background: 'rgba(134,239,172,0.1)',
                      border: '1px solid rgba(134,239,172,0.3)',
                      color: '#86efac',
                    }}
                  >
                    ✅ Message sent! I'll get back to you soon.
                  </motion.div>
                )}
                {status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-center py-3 px-4 rounded-xl text-sm font-medium"
                    style={{
                      background: 'rgba(239,68,68,0.1)',
                      border: '1px solid rgba(239,68,68,0.3)',
                      color: '#f87171',
                    }}
                  >
                    ❌ Something went wrong. Please email directly: harvanshchaurasia@gmail.com
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
