"use client";

import Image from "next/image";
import HelloAnimation from "./components/hello-animation";
import { Card3DList } from "./components/card-3d";
import { AchievementCardList } from "./components/achievement-card";
import { ResearchCardList } from "./components/research-card";
import { MetalCardList } from "./components/metal-card";
import { TechStackList } from "./components/tech-stack";
import { Footer } from "@/components/footer";
import AmbientBackground from "./components/ambient-background";
import { useScrollReveal } from "./hooks/hooks";

const SECTION_TITLES = {
  projects: "Featured Software Engineering & Data Science Projects",
  achievements: "Awards & Achievements",
  research: "Research Publications in AI & Machine Learning",
  experiences: "Professional & Organizational Experience",
  "tech-stack": "Technologies & Tools I Use",
} as const;

type SectionId = keyof typeof SECTION_TITLES;

const revealClass = (revealed: boolean) =>
  revealed ? "animate-fade-in-up" : "scroll-hidden";

export default function Home() {
  const home = useScrollReveal();
  const projects = useScrollReveal();
  const achievements = useScrollReveal();
  const research = useScrollReveal();
  const experiences = useScrollReveal();
  const techStack = useScrollReveal();
  const contact = useScrollReveal();

  const renderedSections: {
    id: SectionId;
    ref: React.Ref<HTMLElement>;
    revealed: boolean;
    content: React.ReactNode;
    padding?: string;
  }[] = [
    { id: "projects", ref: projects.ref, revealed: projects.isRevealed, content: <Card3DList /> },
    { id: "achievements", ref: achievements.ref, revealed: achievements.isRevealed, content: <AchievementCardList /> },
    { id: "research", ref: research.ref, revealed: research.isRevealed, content: <ResearchCardList /> },
    { id: "experiences", ref: experiences.ref, revealed: experiences.isRevealed, content: <MetalCardList />, padding: "py-10" },
    { id: "tech-stack", ref: techStack.ref, revealed: techStack.isRevealed, content: <TechStackList /> },
  ];

  return (
    <>
      <AmbientBackground />

      <div className="relative z-10 flex flex-col items-center font-sans gap-12 md:gap-16 lg:gap-24 pt-20 md:pt-24 pb-0 px-4 sm:px-6 md:px-12 lg:px-16 overflow-hidden">
        <section
          id="home"
          ref={home.ref}
          className={`w-full max-w-7xl mx-auto flex flex-col items-center justify-center py-16 md:py-24 lg:py-28 ${revealClass(home.isRevealed)}`}
        >
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-[-2px] leading-none">
              <HelloAnimation />{" "}
              <span className="text-[#f4f4f6]">I&apos;m Kurt Mikhael Purba</span>
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
                <strong>Kurt Mikhael Purba</strong> is an Informatics Engineering
                student at <strong>Institut Teknologi Bandung (ITB)</strong> who is
                enthusiastic about creating innovative digital solutions. His
                academic journey is centered around two main pillars:{" "}
                <strong>Software Engineering</strong> and{" "}
                <strong>Data Science</strong>.
              </p>
              <p className="mt-4">
                He believes that the combination of robust code and data-driven
                insights is the key to building products that are both intelligent
                and impactful. Within the realm of Software Engineering, his
                passion lies in <strong>front-end development</strong> — transforming
                complex ideas into clean, engaging, and accessible user interfaces
                using modern frameworks like{" "}
                <strong>React, Next.js, and TypeScript</strong>.
              </p>
            </div>
          </div>
        </section>

        {renderedSections.map(({ id, ref, revealed, content, padding = "py-16" }) => (
          <section
            key={id}
            id={id}
            ref={ref}
            className={`w-full max-w-7xl mx-auto flex flex-col items-center ${padding} gap-12 ${revealClass(revealed)}`}
          >
            <h2 className="text-3xl sm:text-4xl md:text-[42px] font-semibold text-[#f4f4f6] tracking-[-0.02em]">
              {SECTION_TITLES[id]}
            </h2>
            <div className="w-full">{content}</div>
          </section>
        ))}

        <section
          id="contact"
          ref={contact.ref}
          className={`w-full max-w-7xl mx-auto ${revealClass(contact.isRevealed)}`}
        >
          <Footer />
        </section>
      </div>
    </>
  );
}
