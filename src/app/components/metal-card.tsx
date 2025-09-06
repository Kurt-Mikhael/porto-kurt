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
        <div className={`relative drop-shadow-xl overflow-hidden rounded-xl bg-gradient-to-br from-purple-950 via-purple-900 to-indigo-950 w-80 h-48 sm:w-96 sm:h-56 lg:w-150 lg:h-60 ${className}`}>
            <div className="absolute flex flex-col lg:flex-row items-center justify-center text-white z-[1] opacity-90 rounded-xl inset-0.5 bg-gradient-to-br from-purple-900/80 via-purple-800/80 to-indigo-900/80 p-3 sm:p-4">
                <div className="mb-0">
                    <Image 
                        src={logoSrc}
                        alt={logoAlt}
                        width={80}
                        height={80}
                        className="object-contain w-16 h-16 sm:w-20 sm:h-20 mt-0 sm:mt-0 lg:mt-3 lg:h-80 lg:w-80"
                    />
                </div>
                <div className="flex flex-col mt-1 sm:mt-2 lg:-mt-5 pl-2 sm:pl-3 lg:pl-5">
                    <h3 className="text-sm sm:text-base lg:text-xl font-semibold mb-1 sm:mb-2 text-left">{title}</h3>
                    <p className="text-xs lg:text-sm text-left text-gray-300 leading-relaxed line-clamp-3 lg:line-clamp-4">{description}</p>
                </div>
            </div>
            <div className="absolute w-32 h-32 sm:w-40 sm:h-36 lg:w-56 lg:h-48 bg-purple-300/30 blur-[50px] -left-1/2 -top-1/2"></div>
        </div>
    );
}

export function MetalCardContainer({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex gap-4 sm:gap-6 lg:gap-8 flex-wrap justify-center items-center p-4 sm:p-6 lg:p-8">
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
            description="Academic division staff responsible for educational programs, curriculum development, and student mentoring at STEI-K ITB 2024."
            />
            
            <MetalCard
            logoSrc="/impact.png"
            logoAlt="Impact ITB 2024"
            title="Competition Division Staff Impact 2024"
            description="Contributed to technical preparation and supervised competition execution, including guidelines development and infrastructure management."
            />
            
            <MetalCard
            logoSrc="/oskm-logo.png"
            logoAlt="OSKM ITB 2025"
            title="Front-End Developer OSKM ITB 2025"
            description="Implemented responsive user interface for OSKM website with cross-browser compatibility and interactive elements for new ITB students."
            />
        </MetalCardContainer>
    );
}

export default MetalCard;