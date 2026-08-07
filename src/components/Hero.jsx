import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Download, 
  Send, 
  Mail, 
  Sparkles, 
  Code2, 
  Terminal, 
  ArrowRight,
  Briefcase,
  Layers,
  Cpu,
  CheckCircle2
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './SocialIcons';
import { personalInfo } from '../data/portfolioData';
import awaisImage from '../assets/awais.jpg';

const Hero = ({ onOpenCVModal }) => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = personalInfo.roles[roleIndex];
    const typingSpeed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting && displayedText.length < currentRole.length) {
        setDisplayedText(currentRole.slice(0, displayedText.length + 1));
      } else if (!isDeleting && displayedText.length === currentRole.length) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayedText.length > 0) {
        setDisplayedText(currentRole.slice(0, displayedText.length - 1));
      } else if (isDeleting && displayedText.length === 0) {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % personalInfo.roles.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, roleIndex]);

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden"
    >
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[var(--color-primary)]/15 blur-3xl pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-[var(--color-secondary)]/15 blur-3xl pointer-events-none animate-pulse-slow" />

      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(var(--color-primary) 1px, transparent 1px)`,
          backgroundSize: '32px 32px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 flex flex-col gap-6"
          >

            <div className="space-y-2">
              <span className="text-sm font-semibold tracking-widest text-[var(--color-primary)] uppercase flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[var(--color-primary)]" />
                Hello World, I'm
              </span>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-none">
                <span className="text-[var(--color-text)]">Muhammad </span>
                <span className="gradient-text">{personalInfo.name.split(' ')[1]}</span>
              </h1>
            </div>

            <div className="h-12 flex items-center text-xl sm:text-2xl font-bold font-mono text-[var(--color-secondary)]">
              <Terminal className="w-6 h-6 mr-2 text-[var(--color-primary)] inline" />
              <span>{displayedText}</span>
              <span className="animate-pulse ml-1 text-[var(--color-primary)]">|</span>
            </div>

            <p className="text-base sm:text-lg text-[var(--color-muted)] max-w-2xl leading-relaxed">
              {personalInfo.bio}
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onOpenCVModal}
                className="px-6 py-3.5 rounded-xl font-bold text-sm btn-glow flex items-center gap-2 cursor-pointer shadow-lg"
              >
                <Download className="w-4 h-4" />
                <span>Download CV / Resume</span>
              </button>

              <a
                href="#contact"
                className="px-6 py-3.5 rounded-xl font-semibold text-sm glass-card border border-white/10 hover:border-[var(--color-primary)] text-white hover:bg-white/5 transition-all flex items-center gap-2"
              >
                <Send className="w-4 h-4 text-[var(--color-primary)]" />
                <span>Get In Touch</span>
              </a>

              <a
                href="#projects"
                className="px-6 py-3.5 rounded-xl font-semibold text-sm glass-card border border-white/10 hover:border-[var(--color-primary)] text-[var(--color-muted)] hover:text-white transition-all flex items-center gap-2"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 text-[var(--color-primary)]" />
              </a>
            </div>

            <div className="pt-4 flex items-center gap-4 border-t border-white/10 mt-2">
              <span className="text-xs text-[var(--color-muted)] font-mono">Connect:</span>
              <div className="flex items-center gap-3">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl glass-card text-[var(--color-muted)] hover:text-[var(--color-primary)] hover:border-[var(--color-primary)] transition-all"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl glass-card text-[var(--color-muted)] hover:text-[var(--color-primary)] hover:border-[var(--color-primary)] transition-all"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="p-2.5 rounded-xl glass-card text-[var(--color-muted)] hover:text-[var(--color-primary)] hover:border-[var(--color-primary)] transition-all"
                  aria-label="Send Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center relative"
          >
            <div className="relative">
              {/* Glow behind image */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-[var(--color-primary)] via-[var(--color-secondary)] to-[var(--color-accent)] opacity-50 blur-3xl animate-pulse-slow scale-105" />

              {/* Main Portrait Card */}
              <div className="relative w-64 sm:w-72 md:w-80 rounded-3xl p-[3px] bg-gradient-to-tr from-[var(--color-primary)] via-[var(--color-secondary)] to-[var(--color-accent)] shadow-2xl group">
                <div className="w-full rounded-3xl overflow-hidden bg-[var(--color-bg)]">
                  <img
                    src={awaisImage}
                    alt="Muhammad Awais"
                    className="w-full h-auto object-cover object-top group-hover:scale-105 transition-transform duration-700"
                    style={{ aspectRatio: '3/4' }}
                  />
                </div>
              </div>

              {/* Floating Badge — Top Left */}
              <div className="absolute -top-4 -left-6 p-2.5 rounded-xl glass-card border border-white/20 shadow-lg flex items-center gap-2 animate-float z-10">
                <div className="p-1.5 rounded-lg bg-[var(--color-primary)]/20 text-[var(--color-primary)]">
                  <Cpu className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-[var(--color-muted)] font-bold uppercase">Focus</div>
                  <div className="text-xs font-bold text-white">MERN & Next.js</div>
                </div>
              </div>

              {/* Floating Badge — Bottom Right */}
              <div className="absolute -bottom-4 -right-6 p-2.5 rounded-xl glass-card border border-white/20 shadow-lg flex items-center gap-2 animate-float z-10" style={{ animationDelay: '1.5s' }}>
                <div className="p-1.5 rounded-lg bg-emerald-500/20 text-emerald-400">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-[var(--color-muted)] font-bold uppercase">Experience</div>
                  <div className="text-xs font-bold text-white">2+ Years Pro</div>
                </div>
              </div>

              {/* Name tag at bottom */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-4 py-2 rounded-xl glass-card border border-white/20 shadow-xl backdrop-blur-md text-center whitespace-nowrap z-10">
                <div className="text-sm font-bold text-white">Muhammad Awais</div>
                <div className="text-[10px] text-[var(--color-primary)] font-mono">Full-Stack Engineer</div>
              </div>

            </div>
          </motion.div>


        </div>
      </div>
    </section>
  );
};

export default Hero;
