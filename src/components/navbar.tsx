'use client';

import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu";
import { memo, useCallback, useRef } from "react";

interface NavbarContentProps {
  activeSection?: string;
  isScrolled?: boolean;
}

const NavbarContent = memo(function NavbarContent({ activeSection = 'home', isScrolled = false }: NavbarContentProps) {
  const navRef = useRef<HTMLDivElement>(null);

  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (!element) return;

    const NAVBAR_HEIGHT = 80;
    const elementRect = element.getBoundingClientRect();
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const elementTop = elementRect.top + scrollTop;
    const targetScroll = elementTop - NAVBAR_HEIGHT - 16;

    const startScroll = window.scrollY;
    const difference = targetScroll - startScroll;
    const duration = 300;
    let start: number | null = null;

    const easeInOutQuad = (t: number) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

    const animate = (timestamp: number) => {
      if (start === null) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const ease = easeInOutQuad(progress);
      window.scrollTo(0, startScroll + difference * ease);
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, []);

  const menuItems = [
    { id: 'home', label: 'Home' },
    { id: 'projects', label: 'Projects' },
    { id: 'achievements', label: 'Achievements' },
    {id: 'research', label: 'Research'},
    { id: 'experiences', label: 'Experiences' },
    { id: 'tech-stack', label: 'Tech Stack' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <div
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-[padding] duration-300 ease-out ${
        isScrolled ? 'pt-3 px-3 md:px-4' : 'pt-0 px-0'
      }`}
    >
      <nav
        className={`mx-auto flex items-center justify-between transition-all duration-300 ease-out ${
          isScrolled
            ? 'max-w-7xl py-2.5 px-4 bg-[#07080a]/70 backdrop-blur-xl border border-[#242728] rounded-2xl shadow-lg shadow-black/30'
            : 'max-w-[2000px] py-5 px-8 bg-[#07080a] border-b border-[#242728] rounded-none'
        }`}
      >
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-[#121212] rounded-lg flex items-center justify-center text-white font-bold text-xl border border-[#242728]">
            K
          </div>
          <span className={`font-semibold tracking-tighter text-white transition-all duration-300 ease-out ${
            isScrolled ? 'text-xl' : 'text-2xl'
          }`}>Kurt</span>
        </div>

        {/* Menu */}
        <NavigationMenu className="hidden md:block">
          <NavigationMenuList className="flex items-center gap-8 text-sm font-medium text-[#cdcdcd]">
            {menuItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <NavigationMenuItem key={item.id}>
                  <NavigationMenuLink 
                    className={`cursor-pointer px-4 py-2 rounded-lg transition-all duration-200 ${
                      isActive 
                        ? 'text-white bg-[#101111] border border-[#242728]' 
                        : 'hover:text-white hover:bg-[#101111]/60'
                    }`}
                    onClick={() => scrollToSection(item.id)}
                  >
                    {item.label}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              );
            })}
          </NavigationMenuList>
        </NavigationMenu>

        {/* CTA Button */}
        <button
          onClick={() => scrollToSection("contact")}
          className="px-6 py-2.5 bg-white text-black rounded-lg font-semibold text-sm hover:bg-[#e8e8e8] transition-colors duration-200"
        >
          Get in Touch
        </button>
      </nav>
    </div>
  );
});

export default NavbarContent;
