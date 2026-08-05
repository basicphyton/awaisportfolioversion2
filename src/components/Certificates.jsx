import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink, Calendar, ShieldCheck, CheckCircle } from 'lucide-react';
import { certificatesData } from '../data/portfolioData';

const Certificates = () => {
  return (
    <section id="certificates" className="py-20 relative bg-white/[0.01]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-card border border-[var(--color-border)] mb-3">
            <Award className="w-3.5 h-3.5 text-[var(--color-primary)]" />
            <span className="text-xs font-semibold uppercase tracking-wider text-[var(--color-primary)]">
              Verified Credentials
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Certifications & <span className="gradient-text">Badges</span>
          </h2>
          <p className="mt-4 text-base text-[var(--color-muted)]">
            Industry recognized certifications from leading cloud providers, technology companies, and universities.
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {certificatesData.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 sm:p-8 rounded-3xl glass-card border border-[var(--color-border)] flex flex-col justify-between hover:border-[var(--color-primary)] transition-all group"
            >
              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded-xl bg-[var(--color-primary)]/20 text-[var(--color-primary)]">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono font-semibold text-[var(--color-secondary)]">
                      {cert.issuer}
                    </span>
                  </div>

                  <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-white/5 text-[var(--color-muted)] border border-white/10 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {cert.date}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-[var(--color-primary)] transition-colors mb-2">
                  {cert.title}
                </h3>

                <div className="text-xs font-mono text-[var(--color-muted)] mb-6 flex items-center gap-1.5">
                  <span>ID:</span>
                  <span className="text-white font-semibold">{cert.credentialId}</span>
                </div>

                {/* Skills Certified Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {cert.skills.map((s) => (
                    <span
                      key={s}
                      className="px-2.5 py-0.5 rounded-md text-[10px] font-mono font-semibold bg-white/5 text-[var(--color-muted)] border border-white/10 flex items-center gap-1"
                    >
                      <CheckCircle className="w-3 h-3 text-[var(--color-primary)]" />
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Verify Link */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-[10px] text-emerald-400 font-mono font-bold uppercase tracking-wider">
                  ✓ Verified Credential
                </span>

                <a
                  href={cert.link}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded-xl text-xs font-semibold btn-glow flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Verify</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Certificates;
