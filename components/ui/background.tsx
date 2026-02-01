"use client";

export function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Main dark background */}
      <div className="absolute inset-0 bg-[#02040a]" />
      
      {/* Orange gradient orb - top right */}
      <div 
        className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-30 animate-pulse-glow"
        style={{
          background: "radial-gradient(circle, rgba(212,106,58,0.4) 0%, rgba(212,106,58,0.1) 40%, transparent 70%)",
        }}
      />
      
      {/* Secondary gradient orb - bottom left */}
      <div 
        className="absolute -bottom-60 -left-60 w-[500px] h-[500px] rounded-full opacity-20 animate-pulse-glow"
        style={{
          background: "radial-gradient(circle, rgba(212,106,58,0.3) 0%, rgba(43,47,58,0.2) 50%, transparent 70%)",
          animationDelay: "2s",
        }}
      />
      
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />
      
      {/* Network lines effect */}
      <svg 
        className="absolute inset-0 w-full h-full opacity-10"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="network" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <circle cx="50" cy="50" r="1" fill="#d46a3a" />
            <circle cx="0" cy="0" r="1" fill="#4a4f5c" />
            <circle cx="100" cy="0" r="1" fill="#4a4f5c" />
            <circle cx="0" cy="100" r="1" fill="#4a4f5c" />
            <circle cx="100" cy="100" r="1" fill="#4a4f5c" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#network)" />
      </svg>
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-[#d46a3a] animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.3 + 0.1,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 3 + 4}s`,
            }}
          />
        ))}
      </div>
      
      {/* Vignette effect */}
      <div 
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at center, transparent 0%, rgba(2,4,10,0.4) 100%)",
        }}
      />
    </div>
  );
}
