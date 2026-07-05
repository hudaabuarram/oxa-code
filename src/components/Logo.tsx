import React from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean;
  layout?: 'horizontal' | 'vertical';
}

export default function Logo({ className = "w-10 h-10", showText = false, layout = 'horizontal' }: LogoProps) {
  const isVertical = layout === 'vertical';

  return (
    <div className={`flex items-center transition-all duration-300 ${isVertical ? 'flex-col text-center gap-4' : 'flex-row gap-3'}`}>
      <div className={`relative ${className} group`}>
        {/* Glow behind logo */}
        <div className="absolute -inset-2 bg-gradient-to-r from-brand-cyan via-brand-purple to-brand-blue rounded-full opacity-20 blur-lg group-hover:opacity-45 transition-opacity duration-300 pointer-events-none" />
        
        {/* Actual SVG Logo recreating the image exactly with premium math paths */}
        <svg
          viewBox="0 0 170 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-[0_4px_20px_rgba(0,240,255,0.2)] relative z-10"
        >
          <defs>
            {/* Gradients matching the image exactly */}
            <linearGradient id="leftRingGrad" x1="28" y1="20" x2="92" y2="80" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#00f0ff" />
              <stop offset="50%" stopColor="#2563eb" />
              <stop offset="100%" stopColor="#7000ff" />
            </linearGradient>

            <linearGradient id="rightRingGrad" x1="78" y1="20" x2="142" y2="80" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="50%" stopColor="#7000ff" />
              <stop offset="100%" stopColor="#d946ef" />
            </linearGradient>

            <linearGradient id="codeGradLeft" x1="44" y1="40" x2="74" y2="60" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#00f0ff" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>

            <linearGradient id="codeGradRight" x1="94" y1="40" x2="124" y2="60" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#f472b6" />
            </linearGradient>
          </defs>

          {/* LEFT RING ("O" Shape - Interlocking) */}
          <circle
            cx="60"
            cy="50"
            r="26"
            stroke="url(#leftRingGrad)"
            strokeWidth="11.5"
            fill="none"
          />

          {/* RIGHT RING ("C" Shape - Open on the right, interlocking with left) */}
          {/* We draw a perfect circular arc from angle -45 to +45, passing through 180 (left side) */}
          <path
            d="M 128.38 31.62
               A 26 26 0 1 0 128.38 68.38"
            stroke="url(#rightRingGrad)"
            strokeWidth="11.5"
            fill="none"
            strokeLinecap="round"
          />

          {/* OVERLAP PIECE to create the 3D interlocking illusion */}
          {/* We redraw a segment of the left ring over the top intersection to weave it under and over */}
          <path
            d="M 76.61 30
               A 26 26 0 0 1 85.69 46"
            stroke="url(#leftRingGrad)"
            strokeWidth="11.5"
            fill="none"
            strokeLinecap="round"
          />

          {/* CODE SYMBOLS inside Left Loop: < / > (Stylized oblique italic) */}
          <g>
            {/* Left Bracket < */}
            <path
              d="M 49.5 46.5 L 45 50 L 49.5 53.5"
              stroke="url(#codeGradLeft)"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Slash / */}
            <path
              d="M 57 56.5 L 62.5 43.5"
              stroke="url(#codeGradLeft)"
              strokeWidth="3"
              strokeLinecap="round"
            />
            {/* Right Bracket > */}
            <path
              d="M 68.5 46.5 L 73 50 L 68.5 53.5"
              stroke="url(#codeGradLeft)"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>

          {/* CODE SYMBOLS inside Right Loop: < / > (Stylized oblique italic) */}
          <g>
            {/* Left Bracket < */}
            <path
              d="M 99.5 46.5 L 95 50 L 99.5 53.5"
              stroke="url(#codeGradRight)"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Slash / */}
            <path
              d="M 107 56.5 L 112.5 43.5"
              stroke="url(#codeGradRight)"
              strokeWidth="3"
              strokeLinecap="round"
            />
            {/* Right Bracket > */}
            <path
              d="M 118.5 46.5 L 123 50 L 118.5 53.5"
              stroke="url(#codeGradRight)"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </svg>
      </div>

      {showText && (
        <div className={`flex flex-col ${isVertical ? 'items-center mt-1' : 'items-start'}`}>
          <span className={`font-display font-extrabold text-brand-text tracking-wide block leading-none transition-all ${
            isVertical ? 'text-2xl md:text-3xl tracking-[0.05em]' : 'text-lg md:text-xl'
          }`}>
            OXA CODE
          </span>
          <span className={`font-mono text-brand-muted uppercase block leading-none transition-all ${
            isVertical ? 'text-xs tracking-[0.25em] mt-2.5 font-medium' : 'text-[9px] tracking-[0.18em] mt-1'
          }`}>
            Infinite Solutions
          </span>
        </div>
      )}
    </div>
  );
}
