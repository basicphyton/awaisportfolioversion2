import React, { useState, useEffect } from 'react';
import { Menu, X, Download, Code2, Sparkles } from 'lucide-react';
import ThemeSwitcher from './ThemeSwitcher';
import { personalInfo } from '../data/portfolioData';
import awaisImage from '../assets/awais.jpg';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Education', href: '#education' },
  { name: 'Certificates', href: '#certificates' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = ({ onOpenCVModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Section highlighting logic
      const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'education', 'certificates', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-nav py-3 shadow-lg shadow-black/30 backdrop-blur-xl'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            className="flex items-center gap-2 group cursor-pointer focus:outline-none"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[var(--color-primary)] to-[var(--color-secondary)] p-0.5 shadow-lg group-hover:shadow-[var(--color-glow)] transition-all duration-300 overflow-hidden">
              <img src={awaisImage} alt="Awais" className="w-full h-full object-cover rounded-[10px]" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-tight text-[var(--color-text)] flex items-center gap-1">
                Awais<span className="text-[var(--color-primary)]">.dev</span>
              </span>
              <span className="text-[10px] text-[var(--color-muted)] font-mono -mt-1 hidden sm:block">
                Full-Stack Engineer
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 px-4 py-1.5 rounded-full glass-card border border-white/10">
            {navLinks.map((link) => {
              const linkId = link.href.substring(1);
              const isActive = activeSection === linkId;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-[var(--color-primary)] text-white shadow-sm font-semibold'
                      : 'text-[var(--color-muted)] hover:text-[var(--color-text)] hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Actions: Theme Switcher & CV Button */}
          <div className="hidden sm:flex items-center gap-3">
            <ThemeSwitcher />

            <button
              onClick={onOpenCVModal}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold btn-glow cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Resume / CV</span>
            </button>
          </div>

          {/* Mobile Actions & Menu Toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <ThemeSwitcher />

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl glass-card text-[var(--color-text)] hover:border-[var(--color-primary)] transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 p-4 rounded-2xl glass-card border border-[var(--color-border)] animate-in fade-in slide-in-from-top-4 duration-300">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2.5 rounded-xl text-sm font-medium text-[var(--color-text)] hover:bg-[var(--color-primary)]/15 hover:text-[var(--color-primary)] transition-colors flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <Sparkles className="w-3.5 h-3.5 text-[var(--color-primary)] opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              ))}

              <div className="pt-3 mt-2 border-t border-white/10 flex flex-col gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenCVModal();
                  }}
                  className="w-full py-3 rounded-xl text-sm font-semibold btn-glow flex items-center justify-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  <span>Download / Preview Resume</span>
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
