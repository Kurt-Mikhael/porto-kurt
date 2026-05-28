"use client";

export default function AmbientBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden" style={{ zIndex: 0 }}>
      {/* Subtle ambient glow — solid color only, no gradients */}
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: '#07080a',
        }}
      />
      {/* Very faint dot grid for texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />
    </div>
  );
}
