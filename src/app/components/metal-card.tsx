"use client";

import Image from 'next/image';
import { memo } from 'react';
import { useScrollReveal } from '@/app/hooks/hooks';
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
    const { ref, isRevealed } = useScrollReveal(index * 90);

    const isElevated = index % 2 === 1;

    return (
        <div
          ref={ref}
          className={`experience-card group cursor-default select-none ${isRevealed ? 'reveal-visible' : 'reveal-hidden'} ${className}`}
          style={{
            backgroundColor: isElevated ? '#101111' : '#0d0d0d',
            transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
          }}
        >
            <div className="flex flex-row items-start gap-4 sm:gap-5 p-5 sm:p-6">
                {/* Logo tile */}
                <div
                  className="exp-logo-tile group-hover:border-[rgba(255,255,255,0.10)] transition-colors duration-[350ms]"
                >
                    <Image
                        src={logoSrc}
                        alt={logoAlt}
                        width={56}
                        height={56}
                        className="object-contain w-full h-full group-hover:scale-105 transition-transform duration-[350ms]"
                        loading="lazy"
                    />
                </div>

                <div className="flex flex-col flex-1 min-w-0">
                    <h3 className="exp-title">{title}</h3>
                    <p className="exp-desc">{description}</p>
                </div>
            </div>
        </div>
    );
});

export { MetalCard };

export function MetalCardContainer({ children }: { children: React.ReactNode }) {
    return (
        <div className="experience-grid">
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
