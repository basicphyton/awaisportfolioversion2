import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award, BookOpen, Star } from 'lucide-react';
import { educationData } from '../data/portfolioData';

const Education = () => {
  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-card border border-[var(--color-border)] mb-3">
            <GraduationCap className="w-3.5 h-3.5 text-[var(--color-primary)]" />
            <span className="text-xs font-semibold uppercase tracking-wider text-[var(--color-primary)]">
              Academic Background
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Education & <span className="gradient-text">Qualifications</span>
          </h2>
          <p className="mt-4 text-base text-[var(--color-muted)]">
            My formal computer science foundation, academic achievements, and core coursework.
          </p>
        </div>

        {/* Education Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {educationData.map((edu, idx) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="p-8 rounded-3xl glass-card border border-[var(--color-border)] flex flex-col justify-between hover:border-[var(--color-primary)] transition-all group"
            >
              <div>
                {/* Header Period & Grade */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-[var(--color-primary)]/15 text-[var(--color-primary)] border border-[var(--color-primary)]/30 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    {edu.period}
                  </span>
                  {edu.grade && (
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30 flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 fill-amber-300" />
                      {edu.grade}
                    </span>
                  )}
                </div>

                {/* Degree & School */}
                <h3 className="text-xl font-bold text-white group-hover:text-[var(--color-primary)] transition-colors mb-1">
                  {edu.degree}
                </h3>
                <h4 className="text-sm font-semibold text-[var(--color-secondary)] mb-4 flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4 text-[var(--color-secondary)]" />
                  {edu.institution}
                </h4>

                <p className="text-xs text-[var(--color-muted)] leading-relaxed mb-6">
                  {edu.details}
                </p>

                {/* Achievements List */}
                <div className="space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-muted)]">
                    Key Highlights:
                  </span>
                  {edu.achievements.map((ach, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-white font-medium">
                      <Award className="w-4 h-4 text-[var(--color-primary)] shrink-0" />
                      <span>{ach}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Location Bar */}
              <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between text-xs text-[var(--color-muted)]">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-[var(--color-primary)]" />
                  {edu.location}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--color-primary)]">
                  Verified Degree
                </span>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Education;
