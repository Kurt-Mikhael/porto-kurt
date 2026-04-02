"use client";
import React, { memo } from 'react';
import interestsData from '@/data/interests.json';

interface InterestCardProps {
  title: string;
  description: string;
  className?: string;
}

const FlipCard = memo(function FlipCard({ title, description, className = "" }: InterestCardProps) {
  return (
    <div
      className={`group relative w-full sm:w-80 md:w-72 lg:w-80 h-96 cursor-default overflow-hidden rounded-3xl 
                  bg-zinc-900 border border-zinc-700/70 shadow-xl 
                  transition-all duration-500 hover:scale-[1.04] hover:shadow-2xl hover:-translate-y-3 
                  ${className}`}
      style={{ willChange: "transform" }}
    >
      <div className="h-full flex flex-col p-8 relative">
        
        {/* Accent line kreatif di atas (muncul lebih kuat saat hover) */}
        <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-indigo-400 to-transparent 
                        scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />

        {/* Title - besar & bold */}
        <h2 className="text-3xl font-semibold text-white tracking-[-0.5px] leading-none text-center mt-8 mb-auto 
                       transition-all duration-500 group-hover:text-indigo-100">
          {title}
        </h2>

        {/* Description muncul smooth saat hover */}
        <p className="text-zinc-400 text-[15.2px] leading-relaxed text-center opacity-0 translate-y-6 
                     group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
          {description}
        </p>

        {/* Footer kreatif */}
        <div className="mt-auto flex items-center justify-center gap-3 text-xs uppercase tracking-[1.5px] font-medium text-zinc-500">
          <div className="h-px w-8 bg-zinc-500 group-hover:bg-indigo-400 transition-colors" />
          EXPLORE
          <div className="h-px w-8 bg-zinc-500 group-hover:bg-indigo-400 transition-colors" />
        </div>
      </div>

      {/* Soft creative overlay saat hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-violet-500/5 to-transparent 
                      opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl" />
    </div>
  );
});

export { FlipCard };
export function FlipCardContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 max-w-7xl mx-auto px-4 py-4 md:py-8">
      {children}
    </div>
  );
}

export function FlipCardList() {
  return (
    <FlipCardContainer>
      {interestsData.map((item) => (
        <FlipCard
          key={item.id}
          title={item.frontTitle}
          description={item.backDescription}
        />
      ))}
    </FlipCardContainer>
  );
}