import React from 'react';
import { motion } from 'framer-motion';
import { User, Award, Rocket, CheckCircle2, Code, ShieldCheck, HeartHandshake, Zap } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const coreValues = [
  {
    title: "Clean & Maintainable Code",
    desc: "Writing modular, self-documenting code built for scalability and performance.",
    icon: Code,
  },
  {
    title: "User-Centric Design",
    desc: "Crafting intuitive interfaces that offer smooth user journeys across devices.",
    icon: HeartHandshake,
  },
  {
    title: "Rapid Execution & Agile",
    desc: "Delivering features iteratively with high quality, rigorous testing, and speed.",
    icon: Zap,
  },
  {
    title: "Security & Reliability",
    desc: "Implementing modern authentication, API validation, and robust error handling.",
    icon: ShieldCheck,
  },
];

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-card border border-[var(--color-border)] mb-3">
            <User className="w-3.5 h-3.5 text-[var(--color-primary)]" />
            <span className="text-xs font-semibold uppercase tracking-wider text-[var(--color-primary)]">
              Get To Know Me
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            About <span className="gradient-text">Muhammad Awais</span>
          </h2>
          <p className="mt-4 text-base text-[var(--color-muted)]">
            Dedicated software engineer passionate about engineering high-impact digital experiences.
          </p>
        </div>

        {/* Top Info & Story Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
          
          {/* Bio Story Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 p-8 rounded-3xl glass-card border border-[var(--color-border)] flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <Rocket className="w-6 h-6 text-[var(--color-primary)]" />
                My Developer Journey
              </h3>
              <div className="space-y-4 text-[var(--color-muted)] leading-relaxed text-sm sm:text-base">
                <p>
                  I'm <strong className="text-white font-semibold">Muhammad Awais</strong>, a Full-Stack Engineer who specializes in building modern web applications that blend sleek UI design with robust backend architecture.
                </p>
                <p>
                  My journey began with a curiosity for how web software scales under high user demand. Over the past 3+ years, I have architected and deployed applications ranging from real-time SaaS dashboards and e-commerce platforms to AI generative studios.
                </p>
                <p>
                  I thrive in fast-paced environments where I can leverage cutting-edge tools like <span className="text-[var(--color-primary)] font-mono font-medium">React, Next.js, Node.js, Express, and Tailwind CSS</span> to turn complex ideas into seamless web solutions.
                </p>
              </div>
            </div>

            {/* Quick highlight checklist */}
            <div className="grid grid-cols-2 gap-3 mt-8 pt-6 border-t border-white/10">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-white font-medium">
                <CheckCircle2 className="w-4 h-4 text-[var(--color-primary)]" />
                <span>Full-Stack MERN Architecture</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-white font-medium">
                <CheckCircle2 className="w-4 h-4 text-[var(--color-primary)]" />
                <span>REST & GraphQL APIs</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-white font-medium">
                <CheckCircle2 className="w-4 h-4 text-[var(--color-primary)]" />
                <span>Responsive & Pixel Perfect</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-white font-medium">
                <CheckCircle2 className="w-4 h-4 text-[var(--color-primary)]" />
                <span>DevOps & Cloud Deployment</span>
              </div>
            </div>
          </motion.div>

          {/* Personal Info Writing Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 p-8 rounded-3xl glass-card border border-[var(--color-border)] flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <Award className="w-6 h-6 text-[var(--color-primary)]" />
                What Drives Me
              </h3>
              <div className="space-y-4 text-[var(--color-muted)] leading-relaxed text-sm sm:text-base">
                <p>
                  Beyond writing code, I'm deeply passionate about <strong className="text-white font-semibold">problem-solving at scale</strong> — engineering systems that handle real-world complexity while staying elegant and maintainable.
                </p>
                <p>
                  I believe great software is a blend of <span className="text-[var(--color-primary)] font-mono font-medium">technical precision</span> and <span className="text-[var(--color-secondary)] font-mono font-medium">human empathy</span>. Every feature I build, I ask: <em className="text-white">"Does this make the user's life simpler?"</em>
                </p>
                <p>
                  My goal is to continually grow as an engineer — contributing to impactful open-source projects, building products that matter, and collaborating with teams that value craft.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 mt-8 pt-6 border-t border-white/10">
              <div className="flex flex-col gap-1">
                <span className="text-2xl font-extrabold gradient-text">3+</span>
                <span className="text-xs text-[var(--color-muted)]">Years Experience</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-2xl font-extrabold gradient-text">35+</span>
                <span className="text-xs text-[var(--color-muted)]">Projects Completed</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-2xl font-extrabold gradient-text">25+</span>
                <span className="text-xs text-[var(--color-muted)]">Happy Clients</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-2xl font-extrabold gradient-text">2,400+</span>
                <span className="text-xs text-[var(--color-muted)]">Code Commits</span>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Core Philosophy Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreValues.map((val, i) => {
            const IconComp = val.icon;
            return (
              <motion.div
                key={val.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-6 rounded-2xl glass-card border border-[var(--color-border)] hover:border-[var(--color-primary)] transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-[var(--color-primary)]/15 border border-[var(--color-primary)]/30 flex items-center justify-center text-[var(--color-primary)] mb-4 group-hover:bg-[var(--color-primary)] group-hover:text-white transition-all duration-300">
                  <IconComp className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">{val.title}</h4>
                <p className="text-xs text-[var(--color-muted)] leading-relaxed">{val.desc}</p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default About;
