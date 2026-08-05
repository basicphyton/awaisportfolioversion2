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
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card border border-[var(--color-border)] w-fit">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-semibold tracking-wide text-[var(--color-text)]">
                {personalInfo.availability}
              </span>
            </div>

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
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-[var(--color-primary)] via-[var(--color-secondary)] to-[var(--color-accent)] opacity-40 blur-2xl animate-pulse-slow" />
              
              <div className="relative w-full h-full rounded-3xl glass-card p-3 border-2 border-[var(--color-border)] shadow-2xl flex flex-col justify-between overflow-hidden group">
                
                <div className="relative w-full h-full rounded-2xl overflow-hidden bg-gradient-to-b from-[var(--color-primary)]/20 to-[var(--color-bg)] flex items-center justify-center">
                  
                  <div className="absolute inset-0 opacity-20">
                    <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                      <circle cx="50" cy="50" r="40" stroke="var(--color-primary)" strokeWidth="0.5" fill="none" />
                      <circle cx="50" cy="50" r="30" stroke="var(--color-secondary)" strokeWidth="0.5" fill="none" />
                    </svg>
                  </div>

                  <div className="relative z-10 flex flex-col items-center justify-center p-6 text-center">
                    <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-full p-1 bg-gradient-to-tr from-[var(--color-primary)] via-[var(--color-secondary)] to-[var(--color-accent)] shadow-2xl mb-4 relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
                      <img 
                        src={awaisImage} 
                        alt="Muhammad Awais" 
                        className="w-full h-full object-cover rounded-full shadow-inner"
                      />
                    </div>

                    <h3 className="text-xl font-bold text-white tracking-tight">Muhammad Awais</h3>
                    <p className="text-xs text-[var(--color-primary)] font-mono mt-1">Full-Stack Engineer</p>

                    <div className="mt-3 flex items-center gap-2">
                      <span className="px-2.5 py-1 rounded-md text-[10px] font-semibold bg-[var(--color-primary)]/20 text-[var(--color-primary)] border border-[var(--color-primary)]/30">
                        React Specialist
                      </span>
                      <span className="px-2.5 py-1 rounded-md text-[10px] font-semibold bg-[var(--color-secondary)]/20 text-[var(--color-secondary)] border border-[var(--color-secondary)]/30">
                        Node.js Architect
                      </span>
                    </div>
                  </div>
                </div>

                <div className="absolute top-4 left-4 p-2.5 rounded-xl glass-card border border-white/20 shadow-lg flex items-center gap-2 animate-float">
                  <div className="p-1.5 rounded-lg bg-[var(--color-primary)]/20 text-[var(--color-primary)]">
                    <Cpu className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-[var(--color-muted)] font-bold uppercase">Focus</div>
                    <div className="text-xs font-bold text-white">MERN & Next.js</div>
                  </div>
                </div>

                <div className="absolute bottom-4 right-4 p-2.5 rounded-xl glass-card border border-white/20 shadow-lg flex items-center gap-2 animate-float" style={{ animationDelay: '1.5s' }}>
                  <div className="p-1.5 rounded-lg bg-emerald-500/20 text-emerald-400">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-[var(--color-muted)] font-bold uppercase">Experience</div>
                    <div className="text-xs font-bold text-white">3+ Years Pro</div>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
