"use client";

import Image from 'next/image';
import { memo } from 'react';
import { useScrollAnimation } from '@/app/hooks/hooks';
import experiencesData from '@/data/experiences.json';

interface MetalCardProps {
    logoSrc: string;
    logoAlt: string;
    title: string;
    description: string;
    className?: string;
}

const MetalCard = memo(function MetalCard({ logoSrc, logoAlt, title, description, className = "" }: MetalCardProps) {
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
          className={`relative overflow-hidden rounded-lg sm:rounded-xl bg-gradient-to-br from-purple-950 via-purple-900 to-indigo-950 w-full max-w-xs sm:max-w-sm lg:max-w-2xl h-auto sm:h-56 lg:h-60 ${getAnimationClass()} ${className}`}
          style={{ willChange: "transform", minHeight: "200px" }}
        >
            <div className="absolute flex flex-col sm:flex-row items-center justify-center text-white z-[1] opacity-90 rounded-lg sm:rounded-xl inset-0.5 bg-gradient-to-br from-purple-900/80 via-purple-800/80 to-indigo-900/80 p-2 sm:p-4">
                <div className="mb-2 sm:mb-0 flex-shrink-0">
                    <Image 
                        src={logoSrc}
                        alt={logoAlt}
                        width={80}
                        height={80}
                        className="object-contain w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20"
                        loading="lazy"
                    />
                </div>
                <div className="flex flex-col text-center sm:text-left pl-0 sm:pl-3 lg:pl-5">
                    <h3 className="text-xs sm:text-sm lg:text-base font-semibold mb-1 sm:mb-2">{title}</h3>
                    <p className="text-xs sm:text-sm text-gray-300 leading-tight line-clamp-2 sm:line-clamp-3 lg:line-clamp-4">{description}</p>
                </div>
            </div>
        </div>
    );
});

export { MetalCard };

export function MetalCardContainer({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex gap-4 sm:gap-6 lg:gap-8 flex-wrap justify-center items-center p-4 sm:p-6 lg:p-8">
            {children}
        </div>
    );
}


export function MetalCardList() {
    return (
        <MetalCardContainer>
            {experiencesData.map((experience) => (
                <MetalCard
                    key={experience.id}
                    logoSrc={experience.logoSrc}
                    logoAlt={experience.logoAlt}
                    title={experience.title}
                    description={experience.description}
                />
            ))}
        </MetalCardContainer>
    );
}

export default MetalCard;