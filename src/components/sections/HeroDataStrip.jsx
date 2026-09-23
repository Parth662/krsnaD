import React from 'react';
import Container from '../ui/Container';

export default function HeroDataStrip() {
  const stats = [
    {
      value: '1,800+',
      label: 'Diagnostic Centres',
    },
    {
      value: '150+',
      label: 'Cities Covered',
    },
    {
      value: '2,000+',
      label: 'Pathology & Radiology Tests',
    },
    {
      value: '25M+',
      label: 'Patients Served',
    },
  ];

  return (
    <div className="bg-[#FAF9F6] border-y border-slate-200/80 py-12 sm:py-16">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 divide-y md:divide-y-0 md:divide-x divide-slate-200/80">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className={`flex flex-col space-y-2 ${idx > 0 ? 'pt-6 md:pt-0 md:pl-8 lg:pl-12' : ''}`}
            >
              {/* Display Value */}
              <div className="font-display font-semibold text-4xl sm:text-5xl lg:text-6xl text-[#0F172A] tracking-tight">
                {stat.value}
              </div>

              {/* Clean Label */}
              <p className="text-sm sm:text-base text-slate-500 font-sans leading-snug">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

