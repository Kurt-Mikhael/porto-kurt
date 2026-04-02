'use client';

import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu";
import { memo, useCallback, useRef } from "react";

const NavbarContent = memo(function NavbarContent() {
  const navRef = useRef<HTMLElement>(null);

  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (!element) return;

    // Get navbar height dynamically
    const navbarHeight = navRef.current?.offsetHeight || 70;
    
    // Calculate position dengan extra padding untuk lebih sesuai
    const elementRect = element.getBoundingClientRect();
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const elementTop = elementRect.top + scrollTop;
    
    // Offset = navbar height + extra margin (16px) untuk spacing yang lebih bagus
    const offset = navbarHeight + 16;
    const targetScroll = elementTop - offset;

    window.scrollTo({
      top: targetScroll,
      behavior: 'smooth'
    });
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
                className="hover:text-white transition-colors cursor-pointer px-4 py-2 rounded-xl hover:bg-white/5"
                onClick={() => scrollToSection("home")}
              >
                Home
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink 
                className="hover:text-white transition-colors cursor-pointer px-4 py-2 rounded-xl hover:bg-white/5"
                onClick={() => scrollToSection("about")}
              >
                Interests
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink 
                className="hover:text-white transition-colors cursor-pointer px-4 py-2 rounded-xl hover:bg-white/5"
                onClick={() => scrollToSection("projects")}
              >
                Projects
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink 
                className="hover:text-white transition-colors cursor-pointer px-4 py-2 rounded-xl hover:bg-white/5"
                onClick={() => scrollToSection("experiences")}
              >
                Experiences
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink 
                className="hover:text-white transition-colors cursor-pointer px-4 py-2 rounded-xl hover:bg-white/5"
                onClick={() => scrollToSection("tech-stack")}
              >
                Tech Stack
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink 
                className="hover:text-white transition-colors cursor-pointer px-4 py-2 rounded-xl hover:bg-white/5"
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
          className="px-6 py-2.5 bg-white text-zinc-950 rounded-2xl font-semibold text-sm hover:bg-indigo-600 hover:text-white transition-all duration-300 shadow-lg hover:shadow-indigo-500/30"
        >
          Get in Touch
        </button>
      </div>
    </nav>
  );
});

export default NavbarContent;