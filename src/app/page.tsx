"use client";

import TypewriterText from "./components/typewriter-text";
import HelloAnimation from "./components/hello-animation";
import Image from 'next/image';
import { Card3DList } from "./components/card-3d";
import { AchievementCardList } from "./components/achievement-card";
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
          className={`w-full max-w-7xl mx-auto flex flex-col items-center min-h-screen scroll-hidden ${homeSection.isIntersecting ? 'animate-fade-in-up' : ''}`}
        >
          <div className="text-center max-w-3xl mx-auto py-15">
            <h1 
              className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-[-2px] leading-none"
            >
              <HelloAnimation /> <span className="text-[#f4f4f6]">I&apos;m Kurt</span>
            </h1>
            <p className="mt-4 text-xl md:text-2xl text-[#cdcdcd] font-medium">
              Informatics Engineering @ ITB
            </p>
            <p className="mt-2 text-base md:text-lg text-[#9c9c9d] max-w-md mx-auto">
              Software Engineering • Data Science • AI/ML Enthusiast
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-16 pt-16 lg:pt-24 w-full">
            <div className="relative flex-shrink-0">
              <Image
                src="/foto-porto.webp"
                alt="Profile Picture"
                width={320}
                height={320}
                className="rounded-3xl w-64 h-64 lg:w-80 lg:h-80 object-cover border border-[#242728]"
              />
            </div>

            <div className="w-full max-w-2xl lg:max-w-xl px-4 sm:px-0 text-[#cdcdcd] leading-8 text-base sm:text-lg text-center lg:text-left">
              Welcome! I&apos;m Kurt, an Informatics Engineering student at ITB who is enthusiastic about creating innovative digital solutions. My academic journey is centered around two main pillars: Software Engineering and Data Science. I believe that the combination of robust code and data-driven insights is the key to building products that are both intelligent and impactful.
              <br /><br />
              Within the realm of Software Engineering, my passion lies in front-end development. I enjoy the process of transforming complex ideas into clean, engaging, and accessible user interfaces for everyone.
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
            Featured Projects
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
            Achievements
          </h2>
          <div className="w-full">
            <AchievementCardList />
          </div>
        </section>

        {/* EXPERIENCES SECTION */}
        <section 
          id="experiences" 
          ref={experiencesSection.ref} 
          className={`w-full max-w-7xl mx-auto flex flex-col items-center py-10 gap-12 scroll-hidden ${experiencesSection.isIntersecting ? 'animate-fade-in-up' : ''}`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-[42px] font-semibold text-[#f4f4f6] tracking-[-0.02em]">
            Experiences
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
            Tech Stack
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
