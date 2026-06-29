'use client';

import { useState, useCallback } from 'react';

interface NavbarMobileProps {
  activeSection?: string;
}

export default function NavbarMobile({ activeSection = 'home' }: NavbarMobileProps) {
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
    { id: 'projects', label: 'Projects' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'research', label: 'Research' },
    { id: 'experiences', label: 'Experiences' },
    { id: 'tech-stack', label: 'Tech Stack' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 md:hidden bg-[#07080a] border-b border-[#242728]">
      <div className="flex items-center justify-between px-4 py-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#121212] rounded-lg flex items-center justify-center text-white font-bold text-sm border border-[#242728]">
            K
          </div>
          <span className="text-lg font-semibold text-white">Kurt</span>
        </div>

        {/* Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 hover:bg-[#101111] rounded-lg"
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
          className="bg-[#07080a] border-b border-[#242728] py-3 px-4 flex flex-col items-center gap-1"
        >
          {menuItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`inline-flex items-center justify-center px-4 py-2.5 text-sm rounded-lg transition-all duration-200 w-full ${
                  isActive
                    ? 'text-white bg-[#101111] border border-[#242728]'
                    : 'text-[#cdcdcd] hover:text-white hover:bg-[#101111]'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      )}
    </nav>
  );
}
