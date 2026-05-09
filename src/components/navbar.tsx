'use client';

import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu";
import { memo, useCallback, useRef } from "react";

interface NavbarContentProps {
  activeSection?: string;
}

const NavbarContent = memo(function NavbarContent({ activeSection = 'home' }: NavbarContentProps) {
  const navRef = useRef<HTMLElement>(null);

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
    { id: 'experiences', label: 'Experiences' },
    { id: 'tech-stack', label: 'Tech Stack' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav ref={navRef} className="fixed top-0 left-0 right-0 z-50 bg-[#07080a] border-b border-[#242728]" style={{ backdropFilter: 'blur(4px)' }}>
      <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-[#121212] rounded-lg flex items-center justify-center text-white font-bold text-xl" style={{ willChange: 'transform' }}>
            K
          </div>
          <span className="text-2xl font-semibold tracking-tighter text-white">Kurt</span>
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
                        ? 'text-white' 
                        : 'hover:text-white'
                    }`}
                    style={isActive ? {
                      background: 'linear-gradient(135deg, rgba(255,87,87,0.18), rgba(161,19,26,0.12))',
                      border: '1px solid rgba(255,87,87,0.30)',
                      boxShadow: '0 0 20px rgba(255,87,87,0.12), inset 0 1px 0 rgba(255,87,87,0.10)',
                    } : undefined}
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
          className="px-6 py-2.5 bg-white text-black rounded-lg font-semibold text-sm hover:bg-[#e8e8e8]"
        >
          Get in Touch
        </button>
      </div>
    </nav>
  );
});

export default NavbarContent;
