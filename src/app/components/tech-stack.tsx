"use client";

import Image from 'next/image';
import { memo } from 'react';
import { useScrollReveal } from '@/app/hooks/hooks';
import techStackData from '@/data/tech-stack.json';

interface TechStackItemProps {
  name: string;
  logo: string;
  category: string;
  index: number;
  className?: string;
}

const TechStackItem = memo(function TechStackItem({ name, logo, category, index, className = "" }: TechStackItemProps) {
  const { ref, isRevealed } = useScrollReveal({ staggerDelay: index * 50 });

  const isElevated = index % 2 === 1;

    return (
    <div
      ref={ref}
      className={`group relative flex flex-col items-center justify-center gap-2.5 p-4 sm:p-5 rounded-lg
                  border border-[#242728]
                  hover:border-[rgba(255,255,255,0.12)] hover:-translate-y-1
                  active:scale-[0.98]
                  transition-all duration-[350ms]
                  cursor-default select-none
                  ${isRevealed ? 'reveal-visible' : 'reveal-hidden'}
                  ${className}`}
      style={{
        willChange: 'transform',
        backgroundColor: isElevated ? '#121212' : '#101111',
        transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
      }}
    >
      {/* Logo tile */}
      <div
        className="relative w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center rounded-md p-2
                   group-hover:border-[rgba(255,255,255,0.10)] transition-colors duration-[350ms]"
        style={{ backgroundColor: '#0d0d0d', border: '1px solid #242728' }}
      >
        <Image
          src={logo}
          alt={name}
          width={48}
          height={48}
          className="relative z-10 object-contain w-full h-full group-hover:scale-105 transition-transform duration-[350ms]"
          loading="lazy"
        />
      </div>

      {/* Tech Name */}
      <h3 className="text-xs sm:text-[13px] font-medium text-[#f4f4f6] text-center">{name}</h3>

      {/* Category — plain text, no badge background */}
      <span className="text-[10px] sm:text-[11px] text-[#6a6b6c] text-center hidden sm:inline-block">
        {category}
      </span>
    </div>
  );
});

export { TechStackItem };

export function TechStackContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-3 md:gap-4 lg:gap-5 w-full max-w-7xl mx-auto px-2 sm:px-4">
      {children}
    </div>
  );
}

export function TechStackList() {
  return (
    <TechStackContainer>
      {techStackData.map((tech, index) => (
        <TechStackItem
          key={tech.id}
          name={tech.name}
          logo={tech.logo}
          category={tech.category}
          index={index}
        />
      ))}
    </TechStackContainer>
  );
}
