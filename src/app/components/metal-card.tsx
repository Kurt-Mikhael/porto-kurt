import Image from 'next/image';

interface MetalCardProps {
    logoSrc: string;
    logoAlt: string;
    title: string;
    description: string;
    className?: string;
}

export function MetalCard({ logoSrc, logoAlt, title, description, className = "" }: MetalCardProps) {
    return (
        <div className={`relative drop-shadow-xl overflow-hidden rounded-xl bg-gradient-to-br from-purple-950 via-purple-900 to-indigo-950 w-150 h-60 ${className}`}>
            <div className="absolute flex flex-row items-center justify-center text-white z-[1] opacity-90 rounded-xl inset-0.5 bg-gradient-to-br from-purple-900/80 via-purple-800/80 to-indigo-900/80 p-4">
                <div className="mb-3">
                    <Image 
                        src={logoSrc}
                        alt={logoAlt}
                        width={80}
                        height={80}
                        className="object-contain h-150 w-150"
                    />
                </div>
                <div className="flex flex-col -mt-5 pl-5">
                    <h3 className="text-xl font-semibold mb-2 text-left">{title}</h3>
                    <p className="text-sm text-left text-gray-300 leading-relaxed">{description}</p>
                </div>
            </div>
            <div className="absolute w-56 h-48 bg-purple-300/30 blur-[50px] -left-1/2 -top-1/2"></div>
        </div>
    );
}

export function MetalCardContainer({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex gap-8 flex-wrap justify-center items-center p-8">
            {children}
        </div>
    );
}

export function MetalCardList() {
    return (
        <MetalCardContainer>
            <MetalCard
            logoSrc="/steik.png"
            logoAlt="STEI-K ITB 2024"
            title="Academic Division Staff BPA STEI-K ITB 2024"
            description="Academic division staff member responsible for educational programs and academic activities at STEI-K ITB 2024. Manages curriculum development, student academic support, and coordinates with faculty members to ensure quality education delivery. Also involved in organizing academic seminars, workshops, and student mentoring programs to enhance learning experience."
            />
            
            <MetalCard
            logoSrc="/impact.png"
            logoAlt="Impact ITB 2024"
            title="Competition Division Staff Impact 2024"
            description="I contributed to the technical preparation of competitions from start to finish, and I also supervised the running of the competitions. My responsibilities included developing competition guidelines, coordinating with judges and participants, managing technical infrastructure, and ensuring smooth execution of all competitive events throughout the program."
            />
            
            <MetalCard
            logoSrc="/oskm-logo.png"
            logoAlt="OSKM ITB 2025"
            title="Front-End Developer OSKM ITB 2025"
            description="I was responsible for implementing the user interface of the OSKM website. This involved creating responsive layouts, ensuring cross-browser compatibility, and enhancing user experience through interactive elements for the new students of ITB."
            />
            
        </MetalCardContainer>
    );
}

export default MetalCard;