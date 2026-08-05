import React from 'react';
import { ArrowUp, Code2, Heart, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './SocialIcons';
import { personalInfo } from '../data/portfolioData';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#050811] border-t border-white/10 pt-16 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          
          <div className="md:col-span-5 flex flex-col gap-4">
            <a href="#hero" className="flex items-center gap-2 cursor-pointer w-fit">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[var(--color-primary)] to-[var(--color-secondary)] p-0.5 shadow-md">
                <div className="w-full h-full bg-[var(--color-bg)] rounded-[10px] flex items-center justify-center">
                  <Code2 className="w-5 h-5 text-[var(--color-primary)]" />
                </div>
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                Muhammad <span className="gradient-text">Awais</span>
              </span>
            </a>

            <p className="text-xs text-[var(--color-muted)] max-w-sm leading-relaxed">
              Full-Stack Web Developer passionate about building high-performance, accessible, and beautifully engineered user interfaces.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-white/5 hover:bg-[var(--color-primary)] hover:text-white text-[var(--color-muted)] transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-white/5 hover:bg-[var(--color-primary)] hover:text-white text-[var(--color-muted)] transition-colors"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.twitter}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-white/5 hover:bg-[var(--color-primary)] hover:text-white text-[var(--color-muted)] transition-colors"
              >
                <TwitterIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2 rounded-lg bg-white/5 hover:bg-[var(--color-primary)] hover:text-white text-[var(--color-muted)] transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="md:col-span-4 flex flex-col gap-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white">Navigation</h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <a href="#about" className="text-[var(--color-muted)] hover:text-[var(--color-primary)] transition-colors">About Me</a>
              <a href="#skills" className="text-[var(--color-muted)] hover:text-[var(--color-primary)] transition-colors">Skills</a>
              <a href="#projects" className="text-[var(--color-muted)] hover:text-[var(--color-primary)] transition-colors">Projects</a>
              <a href="#experience" className="text-[var(--color-muted)] hover:text-[var(--color-primary)] transition-colors">Experience</a>
              <a href="#education" className="text-[var(--color-muted)] hover:text-[var(--color-primary)] transition-colors">Education</a>
              <a href="#certificates" className="text-[var(--color-muted)] hover:text-[var(--color-primary)] transition-colors">Certificates</a>
              <a href="#contact" className="text-[var(--color-muted)] hover:text-[var(--color-primary)] transition-colors">Contact</a>
            </div>
          </div>

          <div className="md:col-span-3 flex flex-col items-start md:items-end justify-between">
            <button
              onClick={scrollToTop}
              className="p-3 rounded-2xl glass-card border border-white/10 hover:border-[var(--color-primary)] text-white hover:text-[var(--color-primary)] transition-all group flex items-center gap-2 text-xs font-semibold cursor-pointer"
            >
              <span>Back to top</span>
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
            </button>

            <span className="text-[10px] font-mono text-[var(--color-muted)] mt-4 md:mt-0">
              v2.0 Portfolio Built with React + Vite
            </span>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-[var(--color-muted)] gap-4">
          <p>© {new Date().getFullYear()} Muhammad Awais. All rights reserved.</p>
          <p className="flex items-center gap-1">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            <span>using React, Tailwind CSS & Framer Motion</span>
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
