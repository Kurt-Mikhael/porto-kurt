"use client";
import React, { memo } from 'react';
import { useScrollAnimation } from '@/app/hooks/hooks';
import interestsData from '@/data/interests.json';

interface InterestCardProps {
  title: string;
  description: string;
  index: number;
  className?: string;
}

const FlipCard = memo(function FlipCard({ title, description, index, className = "" }: InterestCardProps) {
  const { ref, isVisible, scrollDirection } = useScrollAnimation();
  
  const getAnimationClass = () => {
    if (isVisible) return 'scroll-fade-in';
    if (scrollDirection === 'down') return 'scroll-fade-out-up';
    if (scrollDirection === 'up') return 'scroll-fade-out-down';
    return 'opacity-100';
  };
  
  // Alternate surface levels for visual rhythm
  const isElevated = index % 2 === 1;
  
  return (
    <div
      ref={ref}
      className={`group relative w-full sm:w-80 md:w-72 lg:w-80 h-auto cursor-default overflow-hidden rounded-lg 
                  border border-[#242728]
                  transition-all duration-300
                  hover:border-[rgba(255,255,255,0.12)]
                  ${getAnimationClass()}
                  ${className}`}
      style={{ 
        willChange: "auto", 
        minHeight: "340px",
        backgroundColor: isElevated ? '#101111' : '#0d0d0d'
      }}
    >
      <div className="h-full flex flex-col p-6 sm:p-8 relative">
        
        {/* Index number — subtle typographic detail */}
        <span className="text-[11px] font-medium text-[#434345] tracking-wider mb-6">
          {String(index + 1).padStart(2, '0')}
        </span>

        {/* Title */}
        <h2 className="text-xl sm:text-2xl lg:text-[28px] font-semibold text-[#f4f4f6] tracking-[-0.02em] leading-tight mb-auto 
                       transition-colors duration-300">
          {title}
        </h2>

        {/* Description appears on hover */}
        <p className="text-[#9c9c9d] text-sm sm:text-base leading-relaxed opacity-0 translate-y-4 
                     group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out">
          {description}
        </p>

        {/* Subtle bottom rule */}
        <div className="mt-8 pt-4 border-t border-[#242728]">
          <span className="text-[11px] uppercase tracking-[2px] font-medium text-[#6a6b6c]">
            Interests
          </span>
        </div>
      </div>
    </div>
  );
});

export { FlipCard };
export function FlipCardContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-wrap justify-center gap-4 sm:gap-5 md:gap-6 max-w-7xl mx-auto px-4 py-4 md:py-8">
      {children}
    </div>
  );
}

export function FlipCardList() {
  return (
    <FlipCardContainer>
      {interestsData.map((item, index) => (
        <FlipCard
          key={item.id}
          title={item.frontTitle}
          description={item.backDescription}
          index={index}
        />
      ))}
    </FlipCardContainer>
  );
}
