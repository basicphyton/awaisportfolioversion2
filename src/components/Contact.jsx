import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Copy, Check, MessageSquare, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './SocialIcons';
import { personalInfo } from '../data/portfolioData';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1200);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 3000);
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-card border border-[var(--color-border)] mb-3">
            <MessageSquare className="w-3.5 h-3.5 text-[var(--color-primary)]" />
            <span className="text-xs font-semibold uppercase tracking-wider text-[var(--color-primary)]">
              Let's Connect
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="mt-4 text-base text-[var(--color-muted)]">
            Have a project in mind, a job opportunity, or just want to connect? Send a message below!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto items-start">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            <div className="p-8 rounded-3xl glass-card border border-[var(--color-border)] flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Let's talk about your next project</h3>
                <p className="text-xs text-[var(--color-muted)] leading-relaxed mb-8">
                  I'm currently available for full-time software engineering roles, freelance contracts, and technology consultations.
                </p>

                <div className="space-y-6">
                  
                  <div className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/10 group hover:border-[var(--color-primary)] transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="p-3 rounded-xl bg-[var(--color-primary)]/20 text-[var(--color-primary)]">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-[10px] uppercase font-mono text-[var(--color-muted)]">Direct Email</div>
                        <div className="text-xs sm:text-sm font-semibold text-white">{personalInfo.email}</div>
                      </div>
                    </div>

                    <button
                      onClick={handleCopyEmail}
                      className="p-2 rounded-lg bg-white/10 hover:bg-[var(--color-primary)] text-white transition-colors cursor-pointer"
                      title="Copy Email Address"
                    >
                      {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>

                  <a
                    href={personalInfo.whatsapp}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/10 group hover:border-[var(--color-primary)] transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-3 rounded-xl bg-[var(--color-secondary)]/20 text-[var(--color-secondary)]">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-[10px] uppercase font-mono text-[var(--color-muted)]">WhatsApp / Phone</div>
                        <div className="text-xs sm:text-sm font-semibold text-white">{personalInfo.phone}</div>
                      </div>
                    </div>

                    <span className="text-xs font-semibold text-[var(--color-secondary)] group-hover:underline">
                      Chat
                    </span>
                  </a>

                  <div className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/10">
                    <div className="p-3 rounded-xl bg-amber-500/20 text-amber-400">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[10px] uppercase font-mono text-[var(--color-muted)]">Location</div>
                      <div className="text-xs sm:text-sm font-semibold text-white">{personalInfo.location}</div>
                    </div>
                  </div>

                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs font-mono text-[var(--color-muted)]">Socials:</span>
                <div className="flex items-center gap-3">
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-xl glass-card text-[var(--color-muted)] hover:text-white hover:border-[var(--color-primary)] transition-all"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-xl glass-card text-[var(--color-muted)] hover:text-white hover:border-[var(--color-primary)] transition-all"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={personalInfo.twitter}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-xl glass-card text-[var(--color-muted)] hover:text-white hover:border-[var(--color-primary)] transition-all"
                  >
                    <TwitterIcon className="w-4 h-4" />
                  </a>
                </div>
              </div>

            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="p-8 rounded-3xl glass-card border border-[var(--color-border)]">
              
              {isSubmitted ? (
                <div className="py-12 text-center flex flex-col items-center justify-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center animate-bounce">
                    <Check className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Message Sent Successfully!</h3>
                  <p className="text-xs sm:text-sm text-[var(--color-muted)] max-w-md">
                    Thank you for reaching out, Muhammad Awais will get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    
                    <div className="space-y-2">
                      <label className="text-xs font-semibold uppercase tracking-wider text-[var(--color-muted)]">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Alex Johnson"
                        className="w-full px-4 py-3 rounded-xl glass-card bg-white/5 border border-white/10 focus:border-[var(--color-primary)] focus:outline-none text-white text-sm transition-colors"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-semibold uppercase tracking-wider text-[var(--color-muted)]">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="alex@company.com"
                        className="w-full px-4 py-3 rounded-xl glass-card bg-white/5 border border-white/10 focus:border-[var(--color-primary)] focus:outline-none text-white text-sm transition-colors"
                      />
                    </div>

                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-[var(--color-muted)]">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Project Inquiry / Job Opportunity"
                      className="w-full px-4 py-3 rounded-xl glass-card bg-white/5 border border-white/10 focus:border-[var(--color-primary)] focus:outline-none text-white text-sm transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-[var(--color-muted)]">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Hi Awais, I'd like to discuss a project..."
                      className="w-full px-4 py-3 rounded-xl glass-card bg-white/5 border border-white/10 focus:border-[var(--color-primary)] focus:outline-none text-white text-sm transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl font-bold text-sm btn-glow flex items-center justify-center gap-2 cursor-pointer shadow-xl disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <Sparkles className="w-4 h-4 animate-spin" />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>

                </form>
              )}

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
