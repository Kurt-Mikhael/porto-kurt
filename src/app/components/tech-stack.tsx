"use client";

import Image from 'next/image';
import { memo } from 'react';
import { useScrollAnimation } from '@/app/hooks/hooks';
import techStackData from '@/data/tech-stack.json';

interface TechStackItemProps {
  name: string;
  logo: string;
  category: string;
  className?: string;
}

const TechStackItem = memo(function TechStackItem({ name, logo, category, className = "" }: TechStackItemProps) {
  const { ref, isVisible, scrollDirection } = useScrollAnimation();
  
  // Tentukan animasi berdasarkan visibility dan scroll direction
  const getAnimationClass = () => {
    if (isVisible) return 'scroll-fade-in';
    if (scrollDirection === 'down') return 'scroll-fade-out-up';
    if (scrollDirection === 'up') return 'scroll-fade-out-down';
    return 'opacity-100'; // Default: fully visible
  };
  
  return (
    <div 
      ref={ref}
      className={`group relative flex flex-col items-center justify-center gap-2 sm:gap-3 p-3 sm:p-4 md:p-6 rounded-lg sm:rounded-xl
                  bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 border border-zinc-700/50
                  hover:border-indigo-500/50
                  hover:scale-105
                  ${getAnimationClass()}
                  ${className}`}
      style={{ willChange: 'transform' }}
    >
      {/* Logo Container */}
      <div className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-violet-500/20 rounded-lg opacity-0 group-hover:opacity-100"></div>
        <Image
          src={logo}
          alt={name}
          width={60}
          height={60}
          className="relative z-10 object-contain w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14"
          loading="lazy"
        />
      </div>

      {/* Tech Name */}
      <h3 className="text-xs sm:text-sm font-semibold text-white text-center line-clamp-2">{name}</h3>

      {/* Category Badge */}
      <span className="text-xs px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 text-center hidden sm:inline-block">
        {category}
      </span>

      {/* Hover shine effect */}
      <div className="absolute inset-0 rounded-lg sm:rounded-xl bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-10"></div>
    </div>
  );
});

export { TechStackItem };

export function TechStackContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-3 md:gap-4 lg:gap-6 w-full max-w-7xl mx-auto px-2 sm:px-4">
      {children}
    </div>
  );
}

export function TechStackList() {
  return (
    <TechStackContainer>
      {techStackData.map((tech) => (
        <TechStackItem
          key={tech.id}
          name={tech.name}
          logo={tech.logo}
          category={tech.category}
        />
      ))}
    </TechStackContainer>
  );
}
