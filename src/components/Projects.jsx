import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, FolderGit2, Sparkles, ArrowUpRight, Eye } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { projectsData } from '../data/portfolioData';

const Projects = ({ onSelectProject }) => {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Full Stack', 'Python', 'React', 'UI/UX'];

  const filteredProjects = activeFilter === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-card border border-[var(--color-border)] mb-3">
            <FolderGit2 className="w-3.5 h-3.5 text-[var(--color-primary)]" />
            <span className="text-xs font-semibold uppercase tracking-wider text-[var(--color-primary)]">
              Featured Portfolio
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Crafted <span className="gradient-text">Projects</span>
          </h2>
          <p className="mt-4 text-base text-[var(--color-muted)]">
            Explore a curated selection of full-stack applications, interactive UI components, and digital platforms.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const isActive = activeFilter === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold transition-all duration-300 ${
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="rounded-3xl glass-card border border-[var(--color-border)] overflow-hidden flex flex-col justify-between group hover:border-[var(--color-primary)] transition-all duration-300"
            >
              <div>
                <div className="relative h-52 w-full overflow-hidden bg-slate-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090d16] via-transparent to-transparent opacity-80" />

                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[var(--color-primary)] text-white shadow-md">
                    {project.category}
                  </span>

                  <div className="absolute inset-0 bg-black/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                    <button
                      onClick={() => onSelectProject(project)}
                      className="p-3 rounded-full bg-[var(--color-primary)] text-white shadow-lg hover:scale-110 transition-transform"
                      title="View Details"
                    >
                      <Eye className="w-5 h-5" />
                    </button>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="p-3 rounded-full bg-white text-slate-900 shadow-lg hover:scale-110 transition-transform"
                        title="Live Demo"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="p-3 rounded-full bg-slate-800 text-white shadow-lg hover:scale-110 transition-transform"
                        title="GitHub Repository"
                      >
                        <GithubIcon className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[var(--color-primary)] transition-colors flex items-center justify-between">
                    <span>{project.title}</span>
                  </h3>
                  <p className="text-xs text-[var(--color-muted)] line-clamp-2 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 rounded-md text-[10px] font-mono font-semibold bg-white/5 text-[var(--color-muted)] border border-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="px-6 pb-6 pt-0 border-t border-white/10 flex items-center justify-between mt-auto">
                <button
                  onClick={() => onSelectProject(project)}
                  className="text-xs font-semibold text-[var(--color-primary)] hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <span>Project Details</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>

                <div className="flex items-center gap-2">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-1.5 rounded-lg text-[var(--color-muted)] hover:text-white hover:bg-white/10 transition-colors"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-1.5 rounded-lg text-[var(--color-muted)] hover:text-[var(--color-primary)] hover:bg-white/10 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
