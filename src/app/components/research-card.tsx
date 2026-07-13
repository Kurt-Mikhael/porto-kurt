"use client";

import Image from "next/image";
import { memo } from "react";
import { useScrollReveal, useColumnCount } from "@/app/hooks/hooks";
import researchData from "@/data/research.json";

interface ResearchCardProps {
  title: string;
  description: string;
  image: string;
  url: string;
  index: number;
  rowIndex: number;
  className?: string;
}

const ResearchCard = memo(function ResearchCard({
  title,
  description,
  image,
  url,
  index,
  rowIndex,
  className = "",
}: ResearchCardProps) {
  const { ref, isRevealed } = useScrollReveal({ staggerDelay: rowIndex * 120 });

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
        {/* Badge */}
        <div className="flex items-center gap-3">
          <span
            className="inline-flex items-center px-2.5 py-1 rounded-md text-[11px] font-medium tracking-wide uppercase"
            style={{
              backgroundColor: "rgba(87,193,255,0.15)",
              color: "#57c1ff",
            }}
          >
            Research
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

        {/* View Paper button */}
        <div className="mt-2 pt-4 border-t border-[#242728] group-hover:border-[rgba(255,255,255,0.08)] transition-colors duration-[350ms]">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all duration-[350ms]"
            style={{
              backgroundColor: "rgba(87,193,255,0.1)",
              color: "#57c1ff",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(87,193,255,0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(87,193,255,0.1)";
            }}
          >
            View Paper
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 17L17 7" />
              <path d="M7 7h10v10" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
});

export { ResearchCard };

export function ResearchCardContainer({
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

export function ResearchCardList() {
  const cols = useColumnCount([{ minWidth: 1024, cols: 2 }]);

  return (
    <ResearchCardContainer>
      <div className="flex flex-wrap justify-center gap-4 sm:gap-5 md:gap-6">
        {researchData.map((item, index) => {
          const rowIndex = Math.floor(index / cols);
          return (
            <ResearchCard
              key={item.id}
              title={item.title}
              description={item.description}
              image={item.image}
              url={item.url}
              index={index}
              rowIndex={rowIndex}
            />
          );
        })}
      </div>
    </ResearchCardContainer>
  );
}

export default ResearchCard;
