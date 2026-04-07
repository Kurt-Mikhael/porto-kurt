'use client';

import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu";
import { memo, useCallback, useRef } from "react";

const NavbarContent = memo(function NavbarContent() {
  const navRef = useRef<HTMLElement>(null);

  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (!element) return;

    // Fixed navbar height (80px based on typical navbar size)
    const NAVBAR_HEIGHT = 80;
    
    // Calculate position
    const elementRect = element.getBoundingClientRect();
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const elementTop = elementRect.top + scrollTop;
    
    // Offset dengan extra margin untuk spacing
    const targetScroll = elementTop - NAVBAR_HEIGHT - 16;

    // Use requestAnimationFrame untuk smooth scroll yang lebih baik
    const startScroll = window.scrollY;
    const difference = targetScroll - startScroll;
    const duration = 300; // ms
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

  return (
    <nav ref={navRef} className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/95 border-b border-zinc-800" style={{ backdropFilter: 'blur(4px)' }}>
      <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-violet-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-inner" style={{ willChange: 'transform' }}>
            K
          </div>
          <span className="text-2xl font-semibold tracking-tighter text-white">Kurt</span>
        </div>

        {/* Menu - menggunakan NavigationMenu shadcn */}
        <NavigationMenu className="hidden md:block">
          <NavigationMenuList className="flex items-center gap-8 text-sm font-medium text-zinc-300">
            <NavigationMenuItem>
              <NavigationMenuLink 
                className="hover:text-white cursor-pointer px-4 py-2 rounded-xl hover:bg-white/5"
                onClick={() => scrollToSection("home")}
              >
                Home
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink 
                className="hover:text-white cursor-pointer px-4 py-2 rounded-xl hover:bg-white/5"
                onClick={() => scrollToSection("about")}
              >
                Interests
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink 
                className="hover:text-white cursor-pointer px-4 py-2 rounded-xl hover:bg-white/5"
                onClick={() => scrollToSection("projects")}
              >
                Projects
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink 
                className="hover:text-white cursor-pointer px-4 py-2 rounded-xl hover:bg-white/5"
                onClick={() => scrollToSection("experiences")}
              >
                Experiences
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink 
                className="hover:text-white cursor-pointer px-4 py-2 rounded-xl hover:bg-white/5"
                onClick={() => scrollToSection("tech-stack")}
              >
                Tech Stack
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink 
                className="hover:text-white cursor-pointer px-4 py-2 rounded-xl hover:bg-white/5"
                onClick={() => scrollToSection("contact")}
              >
                Contact
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* CTA Button */}
        <button
          onClick={() => scrollToSection("contact")}
          className="px-6 py-2.5 bg-white text-zinc-950 rounded-2xl font-semibold text-sm hover:bg-indigo-600 hover:text-white shadow-lg hover:shadow-indigo-500/30"
        >
          Get in Touch
        </button>
      </div>
    </nav>
  );
});

export default NavbarContent;