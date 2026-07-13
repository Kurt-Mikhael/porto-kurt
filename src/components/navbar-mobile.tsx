'use client';

import { useState, useCallback } from 'react';

interface NavbarMobileProps {
  activeSection?: string;
  isScrolled?: boolean;
}

export default function NavbarMobile({ activeSection = 'home', isScrolled = false }: NavbarMobileProps) {
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
    <div
      className={`fixed top-0 left-0 right-0 z-50 md:hidden transition-[padding] duration-300 ease-out ${
        isScrolled ? 'pt-2 px-2' : 'pt-0 px-0'
      }`}
    >
      <nav
        className={`mx-auto flex items-center justify-between transition-all duration-300 ease-out ${
          isScrolled
            ? 'max-w-3xl py-2.5 px-4 bg-[#07080a]/70 backdrop-blur-xl border border-[#242728] rounded-2xl shadow-lg shadow-black/30'
            : 'max-w-[2000px] py-4 px-4 bg-[#07080a] border-b border-[#242728] rounded-none'
        }`}
      >
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#121212] rounded-lg flex items-center justify-center text-white font-bold text-sm border border-[#242728]">
            K
          </div>
          <span className={`font-semibold text-white transition-all duration-300 ease-out ${
            isScrolled ? 'text-base' : 'text-lg'
          }`}>Kurt</span>
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
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className={`mx-auto flex flex-col items-center gap-1 transition-all duration-300 ease-out ${
            isScrolled
              ? 'max-w-3xl bg-[#07080a]/70 backdrop-blur-xl border-x border-b border-[#242728] rounded-b-2xl py-3 px-4'
              : 'max-w-[2000px] bg-[#07080a] border-b border-[#242728] py-3 px-4'
          }`}
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
    </div>
  );
}
