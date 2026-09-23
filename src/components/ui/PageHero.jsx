import React from 'react';
import Container from './Container';

export default function PageHero({
  eyebrow,
  title,
  highlight,
  description,
  children,
  stats,
  className = '',
}) {
  return (
    <div className={`bg-[#FAFAF8] pt-10 sm:pt-14 pb-12 sm:pb-16 border-b border-[#E8E4DF] ${className}`}>
      <Container>
        <div className="max-w-4xl space-y-5">
          {eyebrow && (
            <div className="inline-flex items-center gap-2 font-mono-meta text-xs text-[#0F766E] uppercase tracking-[0.15em] font-semibold bg-[#F0FDFA] px-3 py-1 border border-[#CCFBF1]">
              <span>{eyebrow}</span>
            </div>
          )}

          <h1 className="font-serif-heading font-semibold text-4xl sm:text-5xl lg:text-6xl text-[#1A1A1A] tracking-tight leading-[1.12]">
            {title}{' '}
            {highlight && (
              <span className="italic font-normal text-[#0F766E] block sm:inline">
                {highlight}
              </span>
            )}
          </h1>

          {description && (
            <p className="text-[#6B6B6B] text-base sm:text-lg font-sans leading-relaxed max-w-2xl">
              {description}
            </p>
          )}

          {children && <div className="pt-2 flex flex-wrap items-center gap-4">{children}</div>}

          {stats && stats.length > 0 && (
            <div className="pt-6 border-t border-[#E8E4DF] grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-sans">
              {stats.map((stat, idx) => (
                <div key={idx}>
                  <span className="font-serif-heading font-bold text-lg sm:text-xl text-[#1A1A1A] block">
                    {stat.value}
                  </span>
                  <span className="text-[#6B6B6B]">{stat.label}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </Container>
    </div>
  );
}
