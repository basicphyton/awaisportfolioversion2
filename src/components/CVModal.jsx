import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, Printer, FileText, CheckCircle2, Mail, Phone, MapPin, Globe, ExternalLink } from 'lucide-react';
import { personalInfo, skillsData, experienceData, educationData, certificatesData } from '../data/portfolioData';

const CVModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!isOpen) return null;

  const handleDownloadCV = () => {
    // Triggers download of the resume document from public folder
    const link = document.createElement('a');
    link.href = '/Muhammad_Awais_Resume.pdf';
    link.download = 'Muhammad_Awais_FullStack_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* CV Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl glass-card border border-[var(--color-border)] bg-[#0d1527] shadow-2xl z-10 p-6 sm:p-10"
        >
          {/* Action Header Bar */}
          <div className="flex items-center justify-between border-b border-white/10 pb-6 mb-6">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-[var(--color-primary)]/20 text-[var(--color-primary)]">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-white">Curriculum Vitae</h2>
                <p className="text-xs text-[var(--color-muted)] font-mono">Official Professional Resume</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={handleDownloadCV}
                className="px-4 py-2.5 rounded-xl text-xs font-bold btn-glow flex items-center gap-2 cursor-pointer shadow-lg"
              >
                <Download className="w-4 h-4" />
                <span className="hidden sm:inline">Download PDF</span>
              </button>

              <button
                onClick={onClose}
                className="p-2.5 rounded-xl bg-white/10 text-white hover:bg-rose-500 transition-colors"
                aria-label="Close CV Modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Resume Body Document Preview */}
          <div className="space-y-8 text-white">
            
            {/* Resume Header Info */}
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-white">{personalInfo.name}</h1>
                <p className="text-sm font-semibold text-[var(--color-primary)]">{personalInfo.title}</p>
                <p className="text-xs text-[var(--color-muted)] mt-1 max-w-lg">{personalInfo.bio}</p>
              </div>

              <div className="space-y-1.5 text-xs text-[var(--color-muted)] font-mono">
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-[var(--color-primary)]" />
                  <span>{personalInfo.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[var(--color-primary)]" />
                  <span>{personalInfo.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[var(--color-primary)]" />
                  <span>{personalInfo.location}</span>
                </div>
              </div>
            </div>

            {/* Core Competencies / Summary */}
            <div className="space-y-3">
              <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-[var(--color-primary)] border-b border-[var(--color-primary)]/30 pb-1">
                Executive Summary
              </h3>
              <p className="text-xs sm:text-sm text-[var(--color-muted)] leading-relaxed">
                Full-Stack & AI Software Engineer with 2+ years of hands-on experience in building, testing, and deploying robust scalable web solutions and Python intelligent applications. Completed 3-month Full Stack AI Engineer Internship at Falcon Swift Software House. Expert in React.js, Python, Node.js, FastAPI, Express, MongoDB, and modern software architecture.
              </p>
            </div>

            {/* Work Experience */}
            <div className="space-y-4">
              <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-[var(--color-primary)] border-b border-[var(--color-primary)]/30 pb-1">
                Professional Experience
              </h3>

              {experienceData.map((exp) => (
                <div key={exp.id} className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-bold text-white">{exp.role} — <span className="text-[var(--color-secondary)]">{exp.company}</span></h4>
                    <span className="text-xs font-mono text-[var(--color-primary)] font-semibold">{exp.period}</span>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-xs text-[var(--color-muted)]">
                    {exp.achievements.map((ach, i) => (
                      <li key={i}>{ach}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Education */}
            <div className="space-y-4">
              <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-[var(--color-primary)] border-b border-[var(--color-primary)]/30 pb-1">
                Education
              </h3>

              {educationData.map((edu) => (
                <div key={edu.id} className="p-4 rounded-xl bg-white/5 border border-white/10 flex justify-between items-center">
                  <div>
                    <h4 className="text-sm font-bold text-white">{edu.degree}</h4>
                    <p className="text-xs text-[var(--color-muted)]">{edu.institution} | Grade: {edu.grade}</p>
                  </div>
                  <span className="text-xs font-mono text-[var(--color-primary)] font-semibold">{edu.period}</span>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div className="space-y-3">
              <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-[var(--color-primary)] border-b border-[var(--color-primary)]/30 pb-1">
                Verified Certifications
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {certificatesData.map((c) => (
                  <div key={c.id} className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between text-xs">
                    <div>
                      <div className="font-bold text-white">{c.title}</div>
                      <div className="text-[10px] text-[var(--color-muted)]">{c.issuer} ({c.date})</div>
                    </div>
                    <span className="text-[10px] font-mono text-emerald-400 font-bold">VERIFIED</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Footer Actions */}
          <div className="pt-8 mt-8 border-t border-white/10 flex items-center justify-between">
            <span className="text-xs text-[var(--color-muted)] font-mono">
              Muhammad Awais • Developer Portfolio Resume
            </span>

            <button
              onClick={handleDownloadCV}
              className="px-6 py-3 rounded-xl text-xs font-bold btn-glow flex items-center gap-2 cursor-pointer shadow-lg"
            >
              <Download className="w-4 h-4" />
              <span>Download Resume PDF</span>
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default CVModal;
