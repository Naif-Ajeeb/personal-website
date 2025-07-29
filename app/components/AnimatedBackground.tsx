import React from 'react';

export default function AnimatedBackground() {
  return (
    <div 
      className="fixed inset-0 pointer-events-none overflow-hidden" 
      style={{ zIndex: -1 }}
    >
      {/* Primary rotating pattern - large geometric */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          animation: 'spin 180s linear infinite',
        }}
      >
        <div
          className="w-full h-full"
          style={{
            background: `
              radial-gradient(circle at 50% 50%, transparent 180px, rgba(217, 119, 6, 0.3) 200px, transparent 202px),
              radial-gradient(circle at 50% 50%, transparent 230px, rgba(194, 65, 12, 0.3) 250px, transparent 252px),
              radial-gradient(circle at 50% 50%, transparent 280px, rgba(146, 64, 14, 0.3) 300px, transparent 302px)
            `,
            position: 'relative'
          }}
        >
          {/* Radial lines using CSS - with individual animations */}
          {Array.from({ length: 12 }, (_, i) => {
            const rotation = i * 30;
            const animationDelay = i * 0.5; // Stagger the animations
            return (
              <div
                key={i}
                className="absolute top-1/2 left-1/2 w-24 h-px bg-amber-600 origin-left"
                style={{
                  transform: `translate(-50%, -50%) rotate(${rotation}deg) translateX(200px)`,
                  opacity: 0.6,
                  animation: `lineGlow 3s ease-in-out infinite ${animationDelay}s`,
                }}
              />
            );
          })}
        </div>
      </div>

      {/* Secondary counter-rotating pattern */}
      <div 
        className="absolute inset-0 opacity-15"
        style={{
          animation: 'spin 240s linear infinite reverse',
        }}
      >
        <div
          className="w-full h-full"
          style={{
            background: `
              radial-gradient(circle at 50% 50%, transparent 100px, rgba(251, 146, 60, 0.4) 120px, transparent 122px),
              radial-gradient(circle at 50% 50%, transparent 60px, rgba(217, 119, 6, 0.4) 80px, transparent 82px)
            `,
          }}
        >
          {/* Hexagonal pattern using CSS - with individual animations */}
          {Array.from({ length: 6 }, (_, i) => {
            const rotation = i * 60;
            const animationDelay = i * 0.8; // Different stagger for variety
            return (
              <div
                key={i}
                className="absolute top-1/2 left-1/2 w-32 h-px bg-orange-500 origin-left"
                style={{
                  transform: `translate(-50%, -50%) rotate(${rotation}deg) translateX(150px)`,
                  opacity: 0.5,
                  animation: `lineGlow 4s ease-in-out infinite ${animationDelay}s`,
                }}
              />
            );
          })}
        </div>
      </div>

      {/* Tertiary pulsing pattern */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          animation: 'pulse 8s ease-in-out infinite',
        }}
      >
        <div className="w-full h-full relative">
          {/* Structured triangular grid */}
          {Array.from({ length: 24 }, (_, i) => {
            const angle = (i * 15) * Math.PI / 180;
            const radius = 100 + (i % 3) * 30;
            const x = 50 + (Math.cos(angle) * radius) / 8;
            const y = 50 + (Math.sin(angle) * radius) / 8;
            const size = 3 + (i % 3);
            const rotation = (i * 15) + (i % 4) * 90; // Varied rotations
            return (
              <div
                key={i}
                className="absolute bg-amber-700"
                style={{
                  left: `${x}%`,
                  top: `${y}%`,
                  width: `${size * 2}px`,
                  height: `${size * 2}px`,
                  transform: `translate(-50%, -50%) rotate(${rotation}deg)`,
                  clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)', // Triangle shape
                  opacity: 0.6,
                  animation: `triangleFloat ${2 + (i % 3)}s ease-in-out infinite ${(i % 5) * 0.4}s`,
                }}
              />
            );
          })}
          
          {/* Central focal point */}
          <div
            className="absolute top-1/2 left-1/2 w-2 h-2 bg-amber-600 rounded-full"
            style={{
              transform: 'translate(-50%, -50%)',
              animation: 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite',
              opacity: 0.8
            }}
          />
        </div>
      </div>
    </div>
  );
}
