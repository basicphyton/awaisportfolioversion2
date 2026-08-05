import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle2, ChevronRight } from 'lucide-react';
import { experienceData } from '../data/portfolioData';

const Experience = () => {
  return (
    <section id="experience" className="py-20 relative bg-white/[0.01]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-card border border-[var(--color-border)] mb-3">
            <Briefcase className="w-3.5 h-3.5 text-[var(--color-primary)]" />
            <span className="text-xs font-semibold uppercase tracking-wider text-[var(--color-primary)]">
              Career Timeline
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="mt-4 text-base text-[var(--color-muted)]">
            My professional career path, software engineering milestones, and impact delivered.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical central line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[var(--color-primary)] via-[var(--color-secondary)] to-transparent transform -translate-x-1/2" />

          <div className="space-y-12">
            {experienceData.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
                  className={`relative flex flex-col md:flex-row items-center ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Node Circle Pin */}
                  <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 z-10 w-8 h-8 rounded-full bg-[var(--color-bg)] border-2 border-[var(--color-primary)] flex items-center justify-center shadow-lg shadow-[var(--color-glow)]">
                    <div className="w-2.5 h-2.5 rounded-full bg-[var(--color-primary)] animate-ping" />
                  </div>

                  {/* Content Box */}
                  <div className="ml-12 md:ml-0 md:w-1/2 md:px-8 w-full">
                    <div className="p-6 sm:p-8 rounded-3xl glass-card border border-[var(--color-border)] hover:border-[var(--color-primary)] transition-all group">
                      
                      {/* Period Badge & Company */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-[var(--color-primary)]/15 text-[var(--color-primary)] border border-[var(--color-primary)]/30 flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5" />
                          {item.period}
                        </span>
                        <span className="text-xs font-medium text-[var(--color-muted)] flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-[var(--color-secondary)]" />
                          {item.location}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-white group-hover:text-[var(--color-primary)] transition-colors">
                        {item.role}
                      </h3>
                      <h4 className="text-sm font-semibold text-[var(--color-secondary)] mb-4">
                        {item.company}
                      </h4>

                      <p className="text-xs text-[var(--color-muted)] mb-4">
                        {item.description}
                      </p>

                      {/* Deliverables Bullet List */}
                      <ul className="space-y-2 mb-6">
                        {item.achievements.map((ach, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs text-white/90 leading-relaxed">
                            <ChevronRight className="w-3.5 h-3.5 text-[var(--color-primary)] shrink-0 mt-0.5" />
                            <span>{ach}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Tech Badges */}
                      <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/10">
                        {item.tech.map((t) => (
                          <span
                            key={t}
                            className="px-2.5 py-0.5 rounded-md text-[10px] font-mono font-semibold bg-white/5 text-[var(--color-muted)] border border-white/10"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                    </div>
                  </div>

                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;
