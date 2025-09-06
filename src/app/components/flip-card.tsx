"use client";
import React, { useState } from 'react';

interface FlipCardProps {
  frontContent: React.ReactNode;
  backContent: React.ReactNode;
  className?: string;
}

export function FlipCard({ frontContent, backContent, className = "" }: FlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={`card-flip-container ${className}`} onClick={handleClick}>
      <div className={`card-flip-inner ${isFlipped ? 'flipped' : ''}`}>
        <div className="card-flip-front">
          {frontContent}
        </div>
        <div className="card-flip-back">
          {backContent}
        </div>
      </div>
    </div>
  );
}


export function FlipCardContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex gap-8 flex-wrap justify-center items-center p-8">
      {children}
    </div>
  );
}


export function FlipCardList() {
  return (
    <FlipCardContainer>
      <FlipCard
        frontContent={
          <div>
            <h2 className="text-2xl font-bold mb-4 fizzy-card">Web Development</h2>
            <span className="fizzy-bubble"></span>
            <span className="fizzy-bubble"></span>
            <span className="fizzy-bubble"></span>
            <span className="fizzy-bubble"></span>
            <span className="fizzy-bubble"></span>

          </div>
        }
        backContent={
          <div>
            <p className='text-left opacity-75'>I have interests in building responsive and user-friendly web applications using modern technologies.</p>
            <span className="fizzy-bubble"></span>
            <span className="fizzy-bubble"></span>
            <span className="fizzy-bubble"></span>
            <span className="fizzy-bubble"></span>
            <span className="fizzy-bubble"></span>
          </div>
        }
      />
      
      <FlipCard
        frontContent={
          <div>
            <h2 className="text-2xl font-bold mb-4">Data & Machine Learning</h2>
            <span className="fizzy-bubble"></span>
            <span className="fizzy-bubble"></span>
            <span className="fizzy-bubble"></span>
            <span className="fizzy-bubble"></span>
            <span className="fizzy-bubble"></span>
          </div>
        }
        backContent={
          <div>
            <p className='text-left opacity-75'>I have interests in data analysis and building machine learning models to extract insights from data.</p>
            <span className="fizzy-bubble"></span>
            <span className="fizzy-bubble"></span>
            <span className="fizzy-bubble"></span>
            <span className="fizzy-bubble"></span>
            <span className="fizzy-bubble"></span>
          </div>
        }
      />
      
      <FlipCard
        frontContent={
          <div>
            <h2 className="text-2xl font-bold mb-4">Problem Solving</h2>
            <span className="fizzy-bubble"></span>
            <span className="fizzy-bubble"></span>
            <span className="fizzy-bubble"></span>
            <span className="fizzy-bubble"></span>
            <span className="fizzy-bubble"></span>
          </div>
        }
        backContent={
          <div>
            <p className='text-left opacity-75'>I enjoy tackling complex problems and finding efficient solutions through logical thinking and creativity.</p>
            <span className="fizzy-bubble"></span>
            <span className="fizzy-bubble"></span>
            <span className="fizzy-bubble"></span>
            <span className="fizzy-bubble"></span>
            <span className="fizzy-bubble"></span>
          </div>
        }
      />
      <FlipCard
        frontContent={
          <div>
            <h2 className="text-2xl font-bold mb-4">Communication & Teamwork</h2>
            <span className="fizzy-bubble"></span>
            <span className="fizzy-bubble"></span>
            <span className="fizzy-bubble"></span>
            <span className="fizzy-bubble"></span>
            <span className="fizzy-bubble"></span>
          </div>
        }
        backContent={
          <div>
            <p className='text-left opacity-75'>I believe that effective communication and collaboration are key to successful teamwork and project outcomes.</p>
            <span className="fizzy-bubble"></span>
            <span className="fizzy-bubble"></span>
            <span className="fizzy-bubble"></span>
            <span className="fizzy-bubble"></span>
            <span className="fizzy-bubble"></span>
          </div>
        }
      />
      <FlipCard
        frontContent={
          <div>
            <h2 className="text-2xl font-bold mb-4">Design Thinking & Creativity</h2>
            <span className="fizzy-bubble"></span>
            <span className="fizzy-bubble"></span>
            <span className="fizzy-bubble"></span>
            <span className="fizzy-bubble"></span>
            <span className="fizzy-bubble"></span>
          </div>
        }
        backContent={
          <div>
            <p className='text-left opacity-75'>I believe that design thinking and creativity are essential for developing innovative solutions and enhancing user experiences.</p>
            <span className="fizzy-bubble"></span>
            <span className="fizzy-bubble"></span>
            <span className="fizzy-bubble"></span>
            <span className="fizzy-bubble"></span>
            <span className="fizzy-bubble"></span>
          </div>
        }
      />
    </FlipCardContainer>
  );
}
