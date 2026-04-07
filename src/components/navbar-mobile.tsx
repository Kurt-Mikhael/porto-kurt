'use client';

import { useState, useCallback } from 'react';

export default function NavbarMobile() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (!element) return;

    const elementRect = element.getBoundingClientRect();
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const elementTop = elementRect.top + scrollTop;
    
    const offset = 70;
    const targetScroll = elementTop - offset;

    window.scrollTo({
      top: targetScroll, 
      behavior: 'smooth'
    });
    
    setIsOpen(false);
  }, []);

  const menuItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'Interests' },
    { id: 'projects', label: 'Projects' },
    { id: 'experiences', label: 'Experiences' },
    { id: 'tech-stack', label: 'Tech Stack' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 md:hidden bg-zinc-950/95 border-b border-zinc-800" style={{ backdropFilter: 'blur(4px)' }}>
      <div className="flex items-center justify-between px-4 py-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-violet-600 rounded-xl flex items-center justify-center text-white font-bold text-sm" style={{ willChange: 'transform' }}>
            K
          </div>
          <span className="text-lg font-semibold text-white">Kurt</span>
        </div>

        {/* Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 hover:bg-white/5 rounded-lg"
          aria-label="Toggle menu"
        >
          <div className="flex flex-col gap-1.5">
            <span className={`block w-5 h-0.5 bg-white ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-5 h-0.5 bg-white ${isOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-0.5 bg-white ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className="bg-gradient-to-b from-zinc-950 to-zinc-900/95 border-b border-zinc-800 py-2 px-4 space-y-1"
          style={{ backdropFilter: 'blur(4px)' }}
        >
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="w-full text-left px-4 py-3 text-sm text-zinc-300 hover:text-white hover:bg-white/5 rounded-lg"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
