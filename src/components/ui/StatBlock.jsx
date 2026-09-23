import React from 'react';
import Badge from './Badge';

export default function StatBlock({
  value,
  unit,
  label,
  description,
  badgeText,
  accentColor = 'blue',
  className = '',
}) {
  const accentClasses = {
    blue: 'border-l-4 border-l-[#0052CC]',
    teal: 'border-l-4 border-l-[#0D9488]',
    slate: 'border-l-4 border-l-slate-400',
  };

  return (
    <div
      className={`p-6 sm:p-8 bg-white border border-slate-200 ${accentClasses[accentColor] || accentClasses.blue} ${className}`}
    >
      <div className="flex items-center justify-between mb-4">
        {badgeText && <Badge variant={accentColor === 'teal' ? 'teal' : 'primary'}>{badgeText}</Badge>}
        {unit && <span className="font-mono text-xs text-slate-400 uppercase tracking-widest">{unit}</span>}
      </div>

      <div className="flex items-baseline gap-1 mb-2">
        <span className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-[#0B132B]">
          {value}
        </span>
      </div>

      <h4 className="font-display font-semibold text-base text-slate-900 mb-1">
        {label}
      </h4>

      {description && (
        <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-sans">
          {description}
        </p>
      )}
    </div>
  );
}
