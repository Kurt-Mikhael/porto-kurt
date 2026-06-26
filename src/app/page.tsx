"use client";

import TypewriterText from "./components/typewriter-text";
import HelloAnimation from "./components/hello-animation";
import Image from 'next/image';
import { Card3DList } from "./components/card-3d";
import { AchievementCardList } from "./components/achievement-card";
import { ResearchCardList } from "./components/research-card";
import { MetalCardList } from "./components/metal-card";
import { TechStackList } from "./components/tech-stack";
import { Footer } from "@/components/footer";
import AmbientBackground from "./components/ambient-background";
import { useState, useEffect } from "react";
import { useIntersectionObserver } from "./hooks/hooks";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  
  const homeSection = useIntersectionObserver();
  const projectsSection = useIntersectionObserver();
  const achievementsSection = useIntersectionObserver();
  const researchSection = useIntersectionObserver();
  const experiencesSection = useIntersectionObserver();
  const techStackSection = useIntersectionObserver();
  const contactSection = useIntersectionObserver();
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <>
      <AmbientBackground />

      <div 
        className={`relative z-10 flex flex-col items-center font-sans gap-12 md:gap-16 lg:gap-24 pt-20 md:pt-24 pb-0 px-4 sm:px-6 md:px-12 lg:px-16 overflow-hidden`}
      >
        {/* HERO SECTION */}
        <section
          id="home"
          ref={homeSection.ref}
          className={`w-full max-w-7xl mx-auto flex flex-col items-center justify-center py-16 md:py-24 lg:py-28 scroll-hidden ${homeSection.isIntersecting ? 'animate-fade-in-up' : ''}`}
        >
          <div className="text-center max-w-3xl mx-auto">
            <h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-[-2px] leading-none"
            >
              <HelloAnimation /> <span className="text-[#f4f4f6]">I&apos;m Kurt Mikhael Purba</span>
            </h1>
            <p className="mt-4 text-xl md:text-2xl text-[#cdcdcd] font-medium">
              Software Engineer &amp; Data Science Student at ITB
            </p>
            <p className="mt-2 text-base md:text-lg text-[#9c9c9d] max-w-md mx-auto">
              Frontend Developer • Machine Learning • AI/ML Enthusiast
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16 mt-12 lg:mt-16 w-full">
            <div className="relative flex-shrink-0" itemScope itemType="https://schema.org/Person">
              <meta itemProp="name" content="Kurt Mikhael Purba" />
              <Image
                src="/foto-porto.webp"
                alt="Kurt Mikhael Purba — Informatics Engineering student at ITB, Software Engineer and Data Science enthusiast"
                width={320}
                height={320}
                priority
                fetchPriority="high"
                sizes="(max-width: 768px) 256px, (max-width: 1024px) 320px, 320px"
                className="rounded-3xl w-64 h-64 lg:w-80 lg:h-80 object-cover border border-[#242728]"
                itemProp="image"
              />
            </div>

            <div className="w-full max-w-2xl lg:max-w-xl px-4 sm:px-0 text-[#cdcdcd] leading-8 text-base sm:text-lg text-center lg:text-left">
              <p>
                <strong>Kurt Mikhael Purba</strong> is an Informatics Engineering student at <strong>Institut Teknologi Bandung (ITB)</strong> who is enthusiastic about creating innovative digital solutions. His academic journey is centered around two main pillars: <strong>Software Engineering</strong> and <strong>Data Science</strong>.
              </p>
              <p className="mt-4">
                He believes that the combination of robust code and data-driven insights is the key to building products that are both intelligent and impactful. Within the realm of Software Engineering, his passion lies in <strong>front-end development</strong> — transforming complex ideas into clean, engaging, and accessible user interfaces using modern frameworks like <strong>React, Next.js, and TypeScript</strong>.
              </p>
            </div>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section 
          id="projects" 
          ref={projectsSection.ref} 
          className={`w-full max-w-7xl mx-auto flex flex-col items-center py-16 gap-12 scroll-hidden ${projectsSection.isIntersecting ? 'animate-fade-in-up' : ''}`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-[42px] font-semibold text-[#f4f4f6] tracking-[-0.02em]">
            Featured Software Engineering &amp; Data Science Projects
          </h2>
          <div className="w-full">
            <Card3DList />
          </div>
        </section>

        {/* ACHIEVEMENTS SECTION */}
        <section 
          id="achievements" 
          ref={achievementsSection.ref} 
          className={`w-full max-w-7xl mx-auto flex flex-col items-center py-16 gap-12 scroll-hidden ${achievementsSection.isIntersecting ? 'animate-fade-in-up' : ''}`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-[42px] font-semibold text-[#f4f4f6] tracking-[-0.02em]">
            Awards &amp; Achievements
          </h2>
          <div className="w-full">
            <AchievementCardList />
          </div>
        </section>

        {/* RESEARCH SECTION */}
        <section 
          id="research" 
          ref={researchSection.ref} 
          className={`w-full max-w-7xl mx-auto flex flex-col items-center py-16 gap-12 scroll-hidden ${researchSection.isIntersecting ? 'animate-fade-in-up' : ''}`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-[42px] font-semibold text-[#f4f4f6] tracking-[-0.02em]">
            Research Publications in AI &amp; Machine Learning
          </h2>
          <div className="w-full">
            <ResearchCardList />
          </div>
        </section>

        {/* EXPERIENCES SECTION */}
        <section 
          id="experiences" 
          ref={experiencesSection.ref} 
          className={`w-full max-w-7xl mx-auto flex flex-col items-center py-10 gap-12 scroll-hidden ${experiencesSection.isIntersecting ? 'animate-fade-in-up' : ''}`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-[42px] font-semibold text-[#f4f4f6] tracking-[-0.02em]">
            Professional &amp; Organizational Experience
          </h2>
          <div className="w-full">
            <MetalCardList />
          </div>
        </section>

        {/* TECH STACK SECTION */}
        <section 
          id="tech-stack" 
          ref={techStackSection.ref} 
          className={`w-full max-w-7xl mx-auto flex flex-col items-center py-16 gap-12 scroll-hidden ${techStackSection.isIntersecting ? 'animate-fade-in-up' : ''}`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-[42px] font-semibold text-[#f4f4f6] tracking-[-0.02em]">
            Technologies &amp; Tools I Use
          </h2>
          <div className="w-full">
            <TechStackList />
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section 
          id="contact" 
          ref={contactSection.ref} 
          className={`w-full max-w-7xl mx-auto scroll-hidden ${contactSection.isIntersecting ? 'animate-fade-in-up' : ''}`}
        >
          <Footer />
        </section>
      </div>
    </>
  );
}
