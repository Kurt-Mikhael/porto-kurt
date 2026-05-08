"use client";

export default function AmbientBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden" style={{ zIndex: 0 }}>
      {/* Wash 1 — Large red hero drift (top-center) */}
      <div
        className="ambient-wash ambient-wash-1 absolute"
        style={{
          top: '-12%',
          left: '50%',
          width: '1200px',
          height: '800px',
          marginLeft: '-600px',
          background: 'radial-gradient(ellipse at 40% 35%, rgba(255,87,87,0.22) 0%, rgba(161,19,26,0.11) 40%, transparent 70%)',
          filter: 'blur(90px)',
          opacity: 0.9,
        }}
      />

      {/* Wash 2 — Blue cool drift (mid-left) */}
      <div
        className="ambient-wash ambient-wash-2 absolute"
        style={{
          top: '18%',
          left: '-10%',
          width: '750px',
          height: '750px',
          background: 'radial-gradient(circle at 45% 45%, rgba(87,193,255,0.14) 0%, rgba(87,193,255,0.05) 45%, transparent 75%)',
          filter: 'blur(100px)',
          opacity: 0.85,
        }}
      />

      {/* Wash 3 — Green subtle drift (center-right) */}
      <div
        className="ambient-wash ambient-wash-3 absolute"
        style={{
          top: '32%',
          right: '-12%',
          width: '700px',
          height: '700px',
          background: 'radial-gradient(circle at 50% 50%, rgba(89,212,153,0.11) 0%, rgba(89,212,153,0.03) 50%, transparent 72%)',
          filter: 'blur(110px)',
          opacity: 0.8,
        }}
      />

      {/* Wash 4 — Warm yellow drift (bottom-center) */}
      <div
        className="ambient-wash ambient-wash-4 absolute"
        style={{
          bottom: '-15%',
          left: '50%',
          width: '1000px',
          height: '600px',
          marginLeft: '-500px',
          background: 'radial-gradient(ellipse at 50% 40%, rgba(255,197,51,0.12) 0%, rgba(255,197,51,0.04) 45%, transparent 72%)',
          filter: 'blur(95px)',
          opacity: 0.85,
        }}
      />

      {/* Wash 5 — Deep red slow counter-drift (upper-right) */}
      <div
        className="ambient-wash ambient-wash-5 absolute"
        style={{
          top: '5%',
          right: '0%',
          width: '700px',
          height: '600px',
          background: 'radial-gradient(ellipse at 60% 40%, rgba(161,19,26,0.14) 0%, rgba(161,19,26,0.05) 45%, transparent 68%)',
          filter: 'blur(110px)',
          opacity: 0.8,
        }}
      />
    </div>
  );
}
