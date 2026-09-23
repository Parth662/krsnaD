import React from 'react';

export default function Badge({ children, variant = 'neutral', className = '' }) {
  const variants = {
    neutral: 'bg-slate-100 text-slate-700 border-slate-200',
    primary: 'bg-[#EFF6FF] text-[#0052CC] border-[#BFDBFE]',
    teal: 'bg-[#F0FDF4] text-[#0D9488] border-[#99F6E4]',
    dark: 'bg-[#0B132B] text-slate-200 border-slate-700',
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono tracking-wider uppercase font-medium border ${variants[variant] || variants.neutral} ${className}`}
    >
      {children}
    </span>
  );
}
