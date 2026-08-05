import React, { useState, useRef, useEffect } from 'react';
import { useTheme, themes } from '../context/ThemeContext';
import { Palette, Check } from 'lucide-react';

const ThemeSwitcher = () => {
  const { currentTheme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const activeThemeObj = themes.find((t) => t.id === currentTheme) || themes[0];

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-1.5 rounded-full glass-card hover:border-[var(--color-primary)] text-sm font-medium transition-all duration-300 group"
        title="Change Theme Color Scheme"
      >
        <Palette className="w-4 h-4 text-[var(--color-primary)] group-hover:rotate-45 transition-transform duration-300" />
        <span className="hidden sm:inline text-xs text-[var(--color-text)]">Theme</span>
        <span
          className="w-3 h-3 rounded-full border border-white/20 shadow-sm"
          style={{ backgroundColor: activeThemeObj.primary }}
        />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 py-2 rounded-xl glass-card border border-[var(--color-border)] shadow-2xl z-50 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="px-3 py-1.5 mb-1 border-b border-white/10 flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-wider text-[var(--color-muted)]">
              Select Color Theme
            </span>
            <span className="text-[10px] px-1.5 py-0.5 rounded bg-[var(--color-primary)]/20 text-[var(--color-primary)] font-bold">
              4 Colors
            </span>
          </div>

          {themes.map((t) => {
            const isSelected = t.id === currentTheme;
            return (
              <button
                key={t.id}
                onClick={() => {
                  setTheme(t.id);
                  setIsOpen(false);
                }}
                className={`w-full flex items-center justify-between px-3 py-2 text-xs font-medium transition-colors ${
                  isSelected
                    ? 'bg-[var(--color-primary)]/20 text-[var(--color-primary)] font-bold'
                    : 'text-[var(--color-text)] hover:bg-white/5'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <div
                    className={`w-4 h-4 rounded-full bg-gradient-to-r ${t.previewGradient} shadow-md border border-white/20`}
                  />
                  <span>{t.name}</span>
                </div>
                {isSelected && <Check className="w-4 h-4 text-[var(--color-primary)]" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ThemeSwitcher;
