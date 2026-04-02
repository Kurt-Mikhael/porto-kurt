"use client";

import TypewriterText from "./components/typewriter-text";
import { FlipCardContainer, FlipCardList } from "@/app/components/flip-card";
import Image from 'next/image';
import { Card3DList } from "./components/card-3d";
import { MetalCardList } from "./components/metal-card";  
import { Footer } from "@/components/footer";
import { useState, useEffect } from "react";
import { useIntersectionObserver } from "./hooks/hooks";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  
  const homeSection = useIntersectionObserver();
  const interestsSection = useIntersectionObserver();
  const projectsSection = useIntersectionObserver();
  const experiencesSection = useIntersectionObserver();
  const contactSection = useIntersectionObserver();
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/90 backdrop-blur-lg border-b border-zinc-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">
          {/* Logo / Nama */}
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-gradient-to-br from-indigo-500 to-violet-600 rounded-xl flex items-center justify-center text-white text-xs font-bold tracking-tighter">K</div>
            <span className="font-semibold text-2xl tracking-tight text-white">Kurt</span>
          </div>

          {/* Menu Links */}
          <div className="hidden md:flex items-center gap-9 text-sm font-medium text-zinc-300">
            <a href="#home" className="hover:text-white transition-colors duration-200">Home</a>
            <a href="#about" className="hover:text-white transition-colors duration-200">Interests</a>
            <a href="#projects" className="hover:text-white transition-colors duration-200">Projects</a>
            <a href="#experiences" className="hover:text-white transition-colors duration-200">Experiences</a>
            <a href="#contact" className="hover:text-white transition-colors duration-200">Contact</a>
          </div>

          {/* CTA Button */}
          <a 
            href="#contact" 
            className="px-6 py-2.5 text-sm font-semibold bg-white text-zinc-950 rounded-2xl hover:bg-indigo-500 hover:text-white transition-all duration-300 shadow-md hover:shadow-indigo-500/30"
          >
            Get in Touch
          </a>
        </div>
      </nav>

      {/* === MAIN CONTENT === */}
      <div 
        className={`flex flex-col items-center font-sans gap-16 lg:gap-24 pt-24 pb-0 px-6 md:px-12 lg:px-16 overflow-hidden transition-all duration-1000 ease-out ${
          isLoaded 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-10'
        }`}
      >
        {/* HERO SECTION */}
        <section 
          id="home" 
          ref={homeSection.ref} 
          className={`w-full max-w-7xl mx-auto flex flex-col items-center min-h-screen transition-all duration-1000 ease-out ${
            homeSection.isIntersecting 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-20'
          }`}
        >
          <div className="text-center max-w-3xl mx-auto">
            <h1 
              className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-[-2px] leading-none"
              style={{
                background: "linear-gradient(to right, #6366f1, #8b5cf6)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                color: "transparent"
              }}
            >
              Hello, I&apos;m Kurt
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
                src="/foto-porto.jpg" 
                alt="Profile Picture" 
                width={320} 
                height={320} 
                className="rounded-3xl w-64 h-64 lg:w-80 lg:h-80 object-cover shadow-2xl ring-1 ring-white/10 relative z-10"
                style={{ boxShadow: "0 25px 50px -12px rgb(99 102 241)" }}
              />
            </div>

            {/* Bio */}
            <div className="max-w-xl text-zinc-300 leading-relaxed text-[17px] text-justify lg:text-left">
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
          className={`w-full max-w-7xl mx-auto flex flex-col items-center py-16 gap-12 transition-all duration-1000 ease-out ${
            interestsSection.isIntersecting 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-12'
          }`}
        >
          <TypewriterText 
            text="My Interests" 
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
          className={`w-full max-w-7xl mx-auto flex flex-col items-center py-16 gap-12 transition-all duration-1000 ease-out ${
            projectsSection.isIntersecting 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-12'
          }`}
        >
          <TypewriterText 
            text="Featured Projects" 
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
          className={`w-full max-w-7xl mx-auto flex flex-col items-center py-10 gap-12 transition-all duration-1000 ease-out ${
            experiencesSection.isIntersecting 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-12'
          }`}
        >
          <TypewriterText 
            text="Experiences" 
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

        {/* CONTACT SECTION */}
        <section 
          id="contact" 
          ref={contactSection.ref} 
          className={`w-full max-w-7xl mx-auto transition-all duration-1000 ease-out ${
            contactSection.isIntersecting 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-12'
          }`}
        >
          <Footer />
        </section>
      </div>
    </>
  );
}