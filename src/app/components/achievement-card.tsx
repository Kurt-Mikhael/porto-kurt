"use client";

import Image from "next/image";
import { memo } from "react";
import { useScrollReveal } from "@/app/hooks/hooks";
import achievementsData from "@/data/achievements.json";

interface AchievementCardProps {
  title: string;
  description: string;
  image: string;
  date: string;
  index: number;
  className?: string;
}

const AchievementCard = memo(function AchievementCard({
  title,
  description,
  image,
  date,
  index,
  className = "",
}: AchievementCardProps) {
  const { ref, isRevealed } = useScrollReveal(index * 100);

  const isElevated = index % 2 === 1;

  return (
    <div
      ref={ref}
      className={`group relative w-full max-w-lg mx-auto cursor-default overflow-hidden rounded-lg
                  border border-[#242728]
                  transition-all duration-[350ms]
                  hover:border-[rgba(255,255,255,0.14)] hover:-translate-y-1
                  active:scale-[0.98]
                  ${isRevealed ? 'reveal-visible' : 'reveal-hidden'}
                  ${className}`}
      style={{
        willChange: "transform",
        backgroundColor: isElevated ? "#101111" : "#0d0d0d",
        transitionTimingFunction: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      }}
    >
      {/* Image */}
      <div className="relative w-full aspect-video overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-[1.03] transition-transform duration-500 ease-out"
          loading="lazy"
          sizes="(max-width: 768px) 100vw, 512px"
        />
        {/* Subtle overlay for text legibility */}
        <div className="absolute inset-0 bg-[#07080a]/10 pointer-events-none" />
      </div>

      {/* Body */}
      <div className="flex flex-col p-6 sm:p-8 gap-4">
        {/* Date badge */}
        <div className="flex items-center gap-3">
          <span
            className="inline-flex items-center px-2.5 py-1 rounded-md text-[11px] font-medium tracking-wide uppercase"
            style={{
              backgroundColor: "rgba(87,193,255,0.15)",
              color: "#57c1ff",
            }}
          >
            {date}
          </span>
          <span className="text-[11px] font-medium text-[#434345] tracking-wider uppercase">
            Achievement
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl sm:text-2xl font-semibold text-[#f4f4f6] tracking-[-0.02em] leading-tight">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm sm:text-base text-[#9c9c9d] leading-relaxed">
          {description}
        </p>

        {/* Bottom rule */}
        <div className="mt-2 pt-4 border-t border-[#242728] group-hover:border-[rgba(255,255,255,0.08)] transition-colors duration-[350ms]">
          <span className="text-[11px] uppercase tracking-[2px] font-medium text-[#6a6b6c] group-hover:text-[#9c9c9d] transition-colors duration-[350ms]">
            Recognized
          </span>
        </div>
      </div>
    </div>
  );
});

export { AchievementCard };

export function AchievementCardContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-4 md:py-8">
      {children}
    </div>
  );
}

export function AchievementCardList() {
  return (
    <AchievementCardContainer>
      <div className="flex flex-wrap justify-center gap-4 sm:gap-5 md:gap-6">
        {achievementsData.map((item, index) => (
          <AchievementCard
            key={item.id}
            title={item.title}
            description={item.description}
            image={item.image}
            date={item.date}
            index={index}
          />
        ))}
      </div>
    </AchievementCardContainer>
  );
}

export default AchievementCard;
