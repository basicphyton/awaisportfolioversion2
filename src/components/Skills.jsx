import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, 
  FileCode, 
  FileJson, 
  Globe, 
  Palette, 
  Layout, 
  Boxes, 
  Sparkles,
  Server, 
  Cpu, 
  Zap, 
  Share2, 
  Lock, 
  Database, 
  HardDrive, 
  Flame, 
  Cloud, 
  Container,
  GitBranch, 
  Wrench, 
  Send, 
  CloudUpload,
  Layers
} from 'lucide-react';
import { FigmaIcon } from './SocialIcons';
import { skillsData } from '../data/portfolioData';

const iconMap = {
  Code2,
  FileCode,
  FileJson,
  Globe,
  Palette,
  Layout,
  Boxes,
  Sparkles,
  Server,
  Cpu,
  Zap,
  Share2,
  Lock,
  Database,
  HardDrive,
  Flame,
  Cloud,
  Container,
  GitBranch,
  Wrench,
  Figma: FigmaIcon,
  Send,
  CloudUpload
};

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', ...skillsData.map((s) => s.category)];

  const filteredData = activeCategory === 'All'
    ? skillsData
    : skillsData.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="py-20 relative bg-white/[0.01]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-card border border-[var(--color-border)] mb-3">
            <Layers className="w-3.5 h-3.5 text-[var(--color-primary)]" />
            <span className="text-xs font-semibold uppercase tracking-wider text-[var(--color-primary)]">
              Technical Expertise
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="mt-4 text-base text-[var(--color-muted)]">
            A comprehensive suite of modern frameworks, languages, databases, and DevOps tools I use daily.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 ${
                  isActive
                    ? 'bg-[var(--color-primary)] text-white shadow-lg shadow-[var(--color-glow)] scale-105'
                    : 'glass-card border border-white/10 text-[var(--color-muted)] hover:text-white hover:border-[var(--color-primary)]'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredData.map((section, idx) => (
            <motion.div
              key={section.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-8 rounded-3xl glass-card border border-[var(--color-border)] flex flex-col justify-between"
            >
              <h3 className="text-xl font-bold text-white mb-6 flex items-center justify-between border-b border-white/10 pb-4">
                <span>{section.category}</span>
                <span className="text-xs font-mono text-[var(--color-primary)] bg-[var(--color-primary)]/10 px-2.5 py-1 rounded-full border border-[var(--color-primary)]/20">
                  {section.skills.length} Stack Tools
                </span>
              </h3>

              <div className="flex flex-wrap gap-3">
                {section.skills.map((skill) => {
                  const IconComponent = iconMap[skill.icon] || Code2;
                  return (
                    <div
                      key={skill.name}
                      className="flex items-center gap-2 px-3.5 py-2 rounded-xl glass-card border border-white/10 hover:border-[var(--color-primary)] hover:bg-[var(--color-primary)]/10 transition-all duration-300 group cursor-default"
                    >
                      <IconComponent className="w-4 h-4 text-[var(--color-primary)] group-hover:scale-110 transition-transform duration-300" />
                      <span className="text-sm font-medium text-white">{skill.name}</span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
