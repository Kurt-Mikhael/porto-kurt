'use client';

import { useEffect, useState, useRef } from 'react';
import NavbarContent from '@/components/navbar';
import NavbarMobile from '@/components/navbar-mobile';

const SECTIONS = ['home', 'projects', 'achievements', 'research','experiences', 'tech-stack', 'contact'];
const NAVBAR_HEIGHT = 80;

export default function NavbarWrapper() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const lastActive = useRef('home');

  useEffect(() => {
    const getActiveSection = () => {
      const scrollY = window.scrollY + NAVBAR_HEIGHT + 16;
      const viewportBottom = window.scrollY + window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      let current = lastActive.current;

      // Check each section from bottom to top for more stable detection
      for (let i = SECTIONS.length - 1; i >= 0; i--) {
        const el = document.getElementById(SECTIONS[i]);
        if (!el) continue;

        const offsetTop = el.offsetTop;
        const offsetHeight = el.offsetHeight;
        const offsetBottom = offsetTop + offsetHeight;

        // For the last section (contact/footer), also activate when near bottom of page
        if (i === SECTIONS.length - 1) {
          // If we're near the bottom of the page OR inside the contact section
          if (viewportBottom >= docHeight - 100 || (scrollY >= offsetTop && scrollY < offsetBottom)) {
            current = SECTIONS[i];
            break;
          }
        }

        // Standard check: is this section's top within the viewport?
        if (scrollY >= offsetTop && scrollY < offsetBottom) {
          current = SECTIONS[i];
          break;
        }
      }

      if (current !== lastActive.current) {
        lastActive.current = current;
        setActiveSection(current);
      }
    };

    // Run on mount and scroll
    getActiveSection();

    let rafId: number | null = null;
    const handleScroll = () => {
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        getActiveSection();
        setIsScrolled(window.scrollY > 20);
        rafId = null;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      <div className="hidden md:block">
        <NavbarContent activeSection={activeSection} isScrolled={isScrolled} />
      </div>
      <div className="md:hidden">
        <NavbarMobile activeSection={activeSection} isScrolled={isScrolled} />
      </div>
    </>
  );
}
