"use client";

import TypewriterText from "./components/typewriter-text";
import HelloAnimation from "./components/hello-animation";
import { FlipCardContainer, FlipCardList } from "@/app/components/flip-card";
import Image from 'next/image';
import { Card3DList } from "./components/card-3d";
import { MetalCardList } from "./components/metal-card";
import { TechStackList } from "./components/tech-stack";
import { Footer } from "@/components/footer";
import { useState, useEffect } from "react";
import { useIntersectionObserver } from "./hooks/hooks";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  
  const homeSection = useIntersectionObserver();
  const interestsSection = useIntersectionObserver();
  const projectsSection = useIntersectionObserver();
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
      {/* === MAIN CONTENT === */}
      <div 
        className={`flex flex-col items-center font-sans gap-12 md:gap-16 lg:gap-24 pt-20 md:pt-24 pb-0 px-4 sm:px-6 md:px-12 lg:px-16 overflow-hidden`}
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
              <HelloAnimation /> <span className="text-slate-300">I'm Kurt</span>
            </h1>
            <p className="mt-4 text-xl md:text-2xl text-zinc-400 font-medium">
              Informatics Engineering @ ITB
            </p>
            <p className="mt-2 text-base md:text-lg text-zinc-500 max-w-md mx-auto">
              Software Engineering • Data Science • Building intelligent digital experiences
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-16 pt-16 lg:pt-24 w-full">
            {/* Profile Image */}
            <div className="relative flex-shrink-0">
              <div className="absolute -inset-4 bg-gradient-to-br from-indigo-500/20 to-violet-600/20 rounded-[3rem] blur-3xl"></div>
              <Image 
                src="/foto-porto.webp" 
                alt="Profile Picture" 
                width={320} 
                height={320} 
                className="rounded-3xl w-64 h-64 lg:w-80 lg:h-80 object-cover shadow-2xl ring-1 ring-white/10 relative z-10"
                style={{ boxShadow: "0 25px 50px -12px rgb(99 102 241)" }}
              />
            </div>

            {/* Bio */}
            <div className="w-full max-w-2xl lg:max-w-xl px-4 sm:px-0 text-zinc-300 leading-8 text-base sm:text-lg text-center lg:text-left">
              Welcome! I&apos;m Kurt, an Informatics Engineering student at ITB who is enthusiastic about creating innovative digital solutions. My academic journey is centered around two main pillars: Software Engineering and Data Science. I believe that the combination of robust code and data-driven insights is the key to building products that are both intelligent and impactful.
              <br /><br />
              Within the realm of Software Engineering, my passion lies in front-end development. I enjoy the process of transforming complex ideas into clean, engaging, and accessible user interfaces for everyone.
            </div>
          </div>
        </section>

        {/* INTERESTS / ABOUT SECTION */}
        <section 
          id="about" 
          ref={interestsSection.ref} 
          className={`w-full max-w-7xl mx-auto flex flex-col items-center py-16 gap-12 scroll-hidden ${interestsSection.isIntersecting ? 'animate-fade-in-up' : ''}`}
        >
          <TypewriterText 
            text="My Interests" 
            trigger={interestsSection.isIntersecting}
            className="text-4xl md:text-5xl font-semibold text-white tracking-tight text-center" 
            style={{ 
              background: "linear-gradient(to right, #6366f1, #8b5cf6)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent"
            }} 
          />
          <div className="w-full">
            <FlipCardContainer>
              <FlipCardList />
            </FlipCardContainer>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section 
          id="projects" 
          ref={projectsSection.ref} 
          className={`w-full max-w-7xl mx-auto flex flex-col items-center py-16 gap-12 scroll-hidden ${projectsSection.isIntersecting ? 'animate-fade-in-up' : ''}`}
        >
          <TypewriterText 
            text="Featured Projects" 
            fastSpeed={true}
            trigger={projectsSection.isIntersecting}
            className="text-4xl md:text-5xl font-semibold text-white tracking-tight text-center" 
            style={{ 
              background: "linear-gradient(to right, #6366f1, #8b5cf6)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent"
            }} 
          />
          <div className="w-full">
            <Card3DList />
          </div>
        </section>

        {/* EXPERIENCES SECTION */}
        <section 
          id="experiences" 
          ref={experiencesSection.ref} 
          className={`w-full max-w-7xl mx-auto flex flex-col items-center py-10 gap-12 scroll-hidden ${experiencesSection.isIntersecting ? 'animate-fade-in-up' : ''}`}
        >
          <TypewriterText 
            text="Experiences" 
            trigger={experiencesSection.isIntersecting}
            className="text-4xl md:text-5xl font-semibold text-white tracking-tight text-center" 
            style={{ 
              background: "linear-gradient(to right, #6366f1, #8b5cf6)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent"
            }} 
          />
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
          <TypewriterText 
            text="Tech Stack" 
            trigger={techStackSection.isIntersecting}
            className="text-4xl md:text-5xl font-semibold text-white tracking-tight text-center" 
            style={{ 
              background: "linear-gradient(to right, #6366f1, #8b5cf6)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent"
            }} 
          />
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