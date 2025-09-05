"use client";

import Image from "next/image";
import Link from "next/link";

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
            <Card3D
                imgSrc="/oskm-2025.png"
                imgAlt="OSKM ITB 2025"
                description="OSKM ITB 2025 is the orientation program for new students at ITB, where I contributed as a committee member to help organize and facilitate various activities for the newcomers."
                link="https://oskm.katitb.com"
            />
            <Card3D
                imgSrc="/nusantara-alert.jpg"
                imgAlt="Nusantara Alert"
                description="Nusantara Alert is a platform that provides real-time information and alerts about natural disasters in Indonesia."
                link="https://github.com/ziprawan/lagiChaos-NusantaraAlert"
            />
            <Card3D
                imgSrc="/weather-app.png"
                imgAlt="Weather App"
                description="Weather App is a project that provides real-time weather information and forecasts.."
                link="https://kurt-mikhael.github.io/"
            />
        </Card3DContainer>
    );
}