"use client";

import Image from "next/image";
import Link from "next/link";
import { memo } from "react";
import projectsData from '@/data/projects.json';

interface Card3DProps {
    imgSrc: string;
    imgAlt: string;
    description: string;
    link: string;
}

const Card3D = memo(function Card3D({
    imgSrc,
    imgAlt,
    description,
    link,
}: Card3DProps) {
    return (
        <div className="parent">
            <div className="card3D" style={{ position: "relative", willChange: "transform" }}>
                <div className="content-box flex flex-col items-center justify-center w-70 h-100"
                    style={{ borderRadius:"10px", boxShadow:"0 5px 15px rgba(145, 92, 182, .4)" }}
                >
                    <Image
                        src={imgSrc}
                        alt={imgAlt}
                        width={400}
                        height={300}
                        className="image -mt-15"
                        loading="lazy"
                    />
                    <p className="card3D-content "
                        style={{textShadow: "0 5px 15px rgba(145, 92, 182, .6)" }}
                    >
                        {description}
                    </p>
                    <Link 
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white see-more mt-4 hover:bg-gray-100 transition-colors duration-300"
                    >
                        See More
                    </Link>
                </div>
            </div>
        </div>
    );
});

export { Card3D };
export function Card3DContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex gap-4 sm:gap-6 md:gap-8 flex-wrap justify-center items-center p-4 sm:p-6 md:p-8">
      {children}
    </div>
  );
}

export function Card3DList() {
    return (
        <Card3DContainer>
            {projectsData.map((project) => (
                <Card3D
                    key={project.id}
                    imgSrc={project.imgSrc}
                    imgAlt={project.imgAlt}
                    description={project.description}
                    link={project.link}
                />
            ))}
        </Card3DContainer>
    );
}