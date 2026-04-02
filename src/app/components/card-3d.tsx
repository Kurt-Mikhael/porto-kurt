"use client";

import Image from "next/image";
import Link from "next/link";
import projectsData from '@/data/projects.json';

export function Card3D({
    imgSrc,
    imgAlt,
    description,
    link,
}: {
    imgSrc: string;
    imgAlt: string;
    description: string;
    link: string;
}) {
    return (
        <div className="parent">
            <div className="card3D" style={{ position: "relative" }}>
                <div className="content-box flex flex-col items-center justify-center w-70 h-100"
                    style={{ borderRadius:"10px", boxShadow:"0 5px 15px rgba(145, 92, 182, .4)", }}
                >
                    <Image
                        src={imgSrc}
                        alt={imgAlt}
                        width={400}
                        height={300}
                        className="image -mt-15"  
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
}

export function Card3DContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex gap-8 flex-wrap justify-center items-center p-8 ">
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