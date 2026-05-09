"use client";

import Image from "next/image";
import Link from "next/link";
import { memo } from "react";
import { useScrollAnimation } from "@/app/hooks/hooks";
import projectsData from '@/data/projects.json';

interface ProjectCardProps {
    imgSrc: string;
    imgAlt: string;
    description: string;
    link: string;
    index: number;
}

const ProjectCard = memo(function ProjectCard({
    imgSrc,
    imgAlt,
    description,
    link,
    index,
}: ProjectCardProps) {
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
            className={`project-card group cursor-pointer select-none ${getAnimationClass()}`}
            style={{ 
                backgroundColor: isElevated ? '#101111' : '#0d0d0d',
                transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
            }}
        >
            <div className="project-image-wrapper">
                <Image
                    src={imgSrc}
                    alt={imgAlt}
                    width={640}
                    height={360}
                    className="project-image"
                    loading="lazy"
                />
                <div className="project-image-fade" />
            </div>
            <div className="project-body">
                <h3 className="project-title">{imgAlt}</h3>
                <p className="project-desc">{description}</p>
                <Link 
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-cta"
                    onClick={(e) => e.stopPropagation()}
                >
                    <span>View Project</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M7 17L17 7" />
                        <path d="M7 7h10v10" />
                    </svg>
                </Link>
            </div>
        </div>
    );
});

export { ProjectCard };

export function ProjectCardContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="project-grid">
      {children}
    </div>
  );
}

export function Card3DList() {
    return (
        <ProjectCardContainer>
            {projectsData.map((project, index) => (
                <ProjectCard
                    key={project.id}
                    imgSrc={project.imgSrc}
                    imgAlt={project.imgAlt}
                    description={project.description}
                    link={project.link}
                    index={index}
                />
            ))}
        </ProjectCardContainer>
    );
}
