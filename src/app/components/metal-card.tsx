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
    index: number;
    className?: string;
}

const MetalCard = memo(function MetalCard({ logoSrc, logoAlt, title, description, index, className = "" }: MetalCardProps) {
    const { ref, isVisible, scrollDirection } = useScrollAnimation();
    
    const getAnimationClass = () => {
      if (isVisible) return 'scroll-fade-in';
      if (scrollDirection === 'down') return 'scroll-fade-out-up';
      if (scrollDirection === 'up') return 'scroll-fade-out-down';
      return 'opacity-100';
    };
    
    const isElevated = index % 2 === 1;
    
    return (
        <div 
          ref={ref}
          className={`relative overflow-hidden rounded-lg w-full max-w-xs sm:max-w-sm lg:max-w-2xl ${getAnimationClass()} ${className}`}
          style={{ 
            willChange: "transform", 
            minHeight: "140px",
            backgroundColor: isElevated ? '#101111' : '#0d0d0d',
            border: '1px solid #242728'
          }}
        >
            <div className="flex flex-row items-start gap-4 sm:gap-5 p-5 sm:p-6">
                {/* Logo tile */}
                <div 
                  className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-md flex items-center justify-center p-2.5 mt-0.5"
                  style={{ backgroundColor: '#121212', border: '1px solid #242728' }}
                >
                    <Image 
                        src={logoSrc}
                        alt={logoAlt}
                        width={56}
                        height={56}
                        className="object-contain w-full h-full"
                        loading="lazy"
                    />
                </div>

                <div className="flex flex-col flex-1 min-w-0">
                    <h3 className="text-sm sm:text-base font-medium text-[#f4f4f6] leading-snug mb-1.5">{title}</h3>
                    <p className="text-xs sm:text-sm text-[#9c9c9d] leading-relaxed line-clamp-3">{description}</p>
                </div>
            </div>
        </div>
    );
});

export { MetalCard };

export function MetalCardContainer({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex gap-3 sm:gap-4 lg:gap-5 flex-wrap justify-center items-start p-4 sm:p-6 lg:p-8">
            {children}
        </div>
    );
}


export function MetalCardList() {
    return (
        <MetalCardContainer>
            {experiencesData.map((experience, index) => (
                <MetalCard
                    key={experience.id}
                    logoSrc={experience.logoSrc}
                    logoAlt={experience.logoAlt}
                    title={experience.title}
                    description={experience.description}
                    index={index}
                />
            ))}
        </MetalCardContainer>
    );
}

export default MetalCard;
