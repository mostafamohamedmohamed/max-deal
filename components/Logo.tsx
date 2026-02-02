
import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark';
}

const Logo: React.FC<LogoProps> = ({ className = "h-12", variant = 'light' }) => {
  const isDark = variant === 'dark';
  
  return (
    <div className={`flex items-center gap-3 group select-none ${className}`}>
      {/* Monogram Monolith */}
      <div className="relative w-10 h-10 lg:w-12 lg:h-12 flex-shrink-0">
        <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-lg overflow-visible">
          <defs>
            <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF6B35" />
              <stop offset="100%" stopColor="#DC2626" />
            </linearGradient>
            <filter id="goldGlow">
              <feGaussianBlur stdDeviation="2" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>
          
          {/* Shopping Bag Silhouette Background */}
          <path 
            d="M25 35 L25 85 Q25 95 35 95 L65 95 Q75 95 75 85 L75 35 Z" 
            fill={isDark ? "white" : "url(#logoGradient)"}
            className="transition-all duration-500 group-hover:scale-105"
          />
          <path 
            d="M35 35 L35 25 Q35 15 50 15 Q65 15 65 25 L65 35" 
            fill="none" 
            stroke={isDark ? "white" : "url(#logoGradient)"} 
            strokeWidth="8" 
            strokeLinecap="round"
          />
          
          {/* Interlocked M and D Monogram */}
          <g className="translate-y-2">
            {/* 'M' part */}
            <path 
              d="M35 50 L40 50 L50 65 L60 50 L65 50 L65 80 L60 80 L60 60 L50 75 L40 60 L40 80 L35 80 Z" 
              fill={isDark ? "#DC2626" : "white"} 
            />
            {/* 'D' part with Lightning Bolt Integration */}
            <path 
              d="M70 45 L55 45 L55 85 L70 85 Q85 85 85 65 Q85 45 70 45 Z" 
              fill="none"
              stroke={isDark ? "#DC2626" : "white"}
              strokeWidth="4"
            />
            {/* Lightning Bolt Deal Icon */}
            <path 
              d="M70 55 L65 70 L75 70 L70 85" 
              fill="#F59E0B" 
              className="animate-pulse"
              style={{ filter: 'url(#goldGlow)' }}
            />
          </g>
        </svg>
      </div>

      {/* Brand Text */}
      <div className={`flex items-baseline ${isDark ? 'text-white' : 'text-brand-dark'}`}>
        <span className="text-2xl lg:text-3xl font-[900] tracking-tighter uppercase logo-text-max">MAX</span>
        <span className="text-2xl lg:text-3xl font-[700] italic tracking-tight logo-text-deal ml-1 text-brand-deep">DEAL</span>
      </div>
    </div>
  );
};

export default Logo;
