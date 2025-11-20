import React from 'react';
export const Logo = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
    strokeWidth="4"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20 80 C 40 20, 60 20, 80 80" className="stroke-primary-orange" />
    <path d="M30 80 Q 50 50, 70 80" className="stroke-accent-purple" />
    <circle cx="50" cy="45" r="5" className="fill-primary-orange stroke-none" />
  </svg>
);
export const HeroIllustration = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 500 300"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
  >
    <path d="M50 250 C 150 50, 350 50, 450 250" stroke="#E0E0E0" strokeWidth="2" strokeDasharray="5 5" />
    <rect x="100" y="100" width="300" height="150" rx="15" fill="white" stroke="hsl(var(--border))" strokeWidth="2" />
    <rect x="120" y="120" width="80" height="10" rx="5" fill="#F0F0F0" />
    <rect x="120" y="140" width="260" height="8" rx="4" fill="#F0F0F0" />
    <rect x="120" y="155" width="260" height="8" rx="4" fill="#F0F0F0" />
    <circle cx="250" cy="185" r="20" fill="hsl(var(--primary))" />
    <path d="M245 180 L 250 190 L 260 175" stroke="white" strokeWidth="3" />
  </svg>
);
export const FeatureIllustration1 = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="10" y="20" width="80" height="60" rx="5" stroke="hsl(var(--foreground))" strokeOpacity="0.3" strokeWidth="2"/>
    <path d="M20 30 L 40 50 L 75 25" stroke="hsl(var(--primary))" strokeWidth="4" strokeLinecap="round"/>
    <circle cx="30" cy="70" r="3" fill="hsl(var(--accent))"/>
    <circle cx="50" cy="70" r="3" fill="hsl(var(--accent))"/>
    <circle cx="70" cy="70" r="3" fill="hsl(var(--accent))"/>
  </svg>
);
export const FeatureIllustration2 = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 80 C 40 20, 60 20, 80 80" stroke="hsl(var(--foreground))" strokeOpacity="0.3" strokeWidth="2" strokeDasharray="4 4"/>
    <path d="M30 70 L 50 40 L 70 70" stroke="hsl(var(--primary))" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M40 70 L 50 55 L 60 70" stroke="hsl(var(--primary))" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
export const FeatureIllustration3 = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="30" stroke="hsl(var(--foreground))" strokeOpacity="0.3" strokeWidth="2"/>
    <path d="M50 20 V 30 M50 70 V 80 M20 50 H 30 M70 50 H 80" stroke="hsl(var(--foreground))" strokeOpacity="0.3" strokeWidth="2" strokeLinecap="round"/>
    <path d="M40 60 L 60 40 M40 40 L 60 60" stroke="hsl(var(--primary))" strokeWidth="4" strokeLinecap="round"/>
  </svg>
);
export const CheckmarkIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);