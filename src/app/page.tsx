"use client";

import { Circle1,Circle2, CircleBorder1,CircleBorder2,CircleBorder3 } from "@/components/shapes";
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
    <div className={`flex flex-col items-center font-sans  justify-between min-h-screen p-24 gap-30 overflow-hidden transition-all duration-1000 ease-out ${
      isLoaded 
        ? 'opacity-100 translate-y-0' 
        : 'opacity-0 translate-y-10'
    }`}>
      <section id="home" ref={homeSection.ref} className={`w-full flex flex-col items-center min-h-screen transition-all duration-1000 ease-out ${
        homeSection.isIntersecting 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-20'
      }`}>
        <h1 className="text-4xl font-bold  text-center max-w-3xl mt-25" style={{background: "linear-gradient(to right, #c94b4b, #4b134f)", backgroundClip: "text", WebkitBackgroundClip: "text", color:"transparent", textShadow: "0 5px 15px rgba(145, 92, 182, .4)"}} >Welcome to My Website</h1>
        <h1 className="text-6xl font-bold  text-center max-w-4xl" style={{background: "linear-gradient(to right, #c94b4b, #4b134f)", backgroundClip: "text", WebkitBackgroundClip: "text", color:"transparent",textShadow: "0 5px 15px rgba(145, 92, 182, .4) "}} >Hello, My Name is Kurt!</h1>
        <div className="flex flex-row items-center gap-8 mt-40">
          <Image 
            src="/foto-porto.jpg" alt="Profile Picture" 
            width={300} 
            height={300} 
            className="rounded-full border-white shadow-lg aspect-square object-cover "
            style={{boxShadow : "0 5px 15px rgba(145, 92, 182, .4)",}}/>
          <p
            className="font-bold justify-center text-white max-w-4xl text-justify z-0"
            style={{ textShadow: "0 5px 15px rgba(145, 92, 182, .4)" }}
          > Welcome! I&#39;m Kurt, an Informatics Engineering student at ITB who is enthusiastic about creating innovative digital solutions. My academic journey is centered around two main pillars: Software Engineering and Data Science. I believe that the combination of robust code and data-driven insights is the key to building products that are both intelligent and impactful.
            Within the realm of Software Engineering, my passion lies in front-end development. I enjoy the process of transforming complex ideas into clean, engaging, and accessible user interfaces for everyone.</p>
        </div>
      </section>

      <section id="about" ref={interestsSection.ref} className={`w-full flex flex-col items-center min-h-screen transition-all duration-1000 ease-out ${
        interestsSection.isIntersecting 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-20'
      }`}>
        <div className={`mt-15 mb-8 transition-all duration-1000 ease-out delay-200 ${
          interestsSection.isIntersecting 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-20'
        }`}>
          <TypewriterText 
          text="Here are my interests." 
          className="text-4xl font-bold text-white max-w-3xl text-center" 
          style={{textShadow: "0 5px 15px rgba(145, 92, 182, .4) "}} 
          />
        </div>
        <div className={`mb-16 transition-all duration-1000 ease-out delay-400 ${
          interestsSection.isIntersecting 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-20'
        }`}>
          <FlipCardContainer>
          <FlipCardList />
          </FlipCardContainer>
        </div>
      </section>
        
      <section ref={projectsSection.ref} className={`w-full flex flex-col items-center min-h-screen transition-all duration-1000 ease-out ${
        projectsSection.isIntersecting 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-20'
      }`}>
        <div className={`mt-20 transition-all duration-1000 ease-out ${
          projectsSection.isIntersecting 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-20'
        }`}>
          <TypewriterText 
          text="Here are my projects." 
          className="text-4xl font-bold text-white max-w-3xl text-center" 
          style={{textShadow: "0 5px 15px rgba(145, 92, 182, .4) "}} 
          />
        </div>
        <div className={`mb-16 transition-all duration-1000 ease-out delay-200 ${
          projectsSection.isIntersecting 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-20'
        }`}>
          <Card3DList />
        </div>
      </section>
        
      <section ref={experiencesSection.ref} className={`w-full flex flex-col items-center min-h-screen transition-all duration-1000 ease-out ${
        experiencesSection.isIntersecting 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-20'
      }`}>
        <div className={`mt-20 transition-all duration-1000 ease-out ${
          experiencesSection.isIntersecting 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-20'
        }`}>
          <TypewriterText 
          text="Here are my experiences." 
          className="text-4xl font-bold text-white max-w-3xl text-center" 
          style={{textShadow: "0 5px 15px rgba(145, 92, 182, .4) "}} 
          />
        </div>
        <div className={`mb-16 transition-all duration-1000 ease-out delay-200 ${
          experiencesSection.isIntersecting 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-20'
        }`}>
          <MetalCardList />
        </div>
      </section>

      <section id="contact" ref={contactSection.ref} className={`w-full flex flex-col items-center transition-all duration-1000 ease-out ${
        contactSection.isIntersecting 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-20'
      }`}>
        <Footer />
      </section>
      
      <Circle1/>
      <CircleBorder1 />
      <Circle2/>
      <CircleBorder2 />
      <CircleBorder3 />
    </div>
  );
}