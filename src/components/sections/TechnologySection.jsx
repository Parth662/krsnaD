import React from 'react';
import Container from '../ui/Container';
import { ShieldCheck, Award, CheckCircle2, Activity } from 'lucide-react';

export default function TechnologySection() {
  const pillars = [
    {
      code: 'TRUST-01',
      title: 'NABL & ISO 15189 Quality Accreditation',
      desc: 'All central reference laboratories operate under statutory ISO 15189:2022 guidelines with daily automated quality control calibration.',
    },
    {
      code: 'TRUST-02',
      title: '100% Barcoded Specimen Tracing',
      desc: 'Source barcoding at collection prevents manual mix-up risks and ensures encrypted end-to-end chain of custody.',
    },
    {
      code: 'TRUST-03',
      title: 'Sub-Specialist Tele-Radiology Network',
      desc: 'Over 200+ senior radiologists provide 24/7 STAT interpretations for MRI, CT, and Mammography scans across 150+ cities.',
    },
    {
      code: 'TRUST-04',
      title: 'Sub-2 Hour STAT Emergency TAT',
      desc: 'Priority workflow for critical cardiac markers, acute trauma imaging, and intensive care diagnostic panels.',
    },
  ];

  return (
    <section id="trust" className="py-20 sm:py-24 bg-[#FAFAF8] border-b border-[#E8E4DF]">
      <Container>
        
        {/* Eyebrow */}
        <span className="font-mono-meta text-xs font-semibold text-[#0F766E] uppercase tracking-[0.15em] block mb-3">
          05 — HEALTHCARE TRUST & PRECISION
        </span>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-12">
          
          {/* Left Column — Large Typography (~5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="font-serif-heading text-4xl sm:text-5xl font-semibold text-[#1A1A1A] tracking-tight leading-[1.12]">
              Clinical precision behind every diagnosis.
            </h2>

            <p className="text-[#6B6B6B] text-base font-sans leading-relaxed">
              Diagnostic excellence requires more than instruments—it demands a continuous commitment to accuracy, certified medical expertise, and standardized quality controls.
            </p>

            {/* Accreditation Badge Box */}
            <div className="bg-white border border-[#E8E4DF] p-5 rounded-md shadow-xs space-y-2">
              <div className="flex items-center justify-between text-xs font-mono-meta text-[#6B6B6B]">
                <span>QUALITY METRIC</span>
                <span className="text-[#0F766E] font-bold">99.8% PRECISION</span>
              </div>
              <div className="font-serif-heading font-bold text-2xl text-[#1A1A1A]">
                ISO 15189 : 2022
              </div>
              <p className="text-xs text-[#6B6B6B] font-sans">
                Standardized quality compliance across central laboratories and 1,800+ diagnostic touchpoints.
              </p>
            </div>
          </div>

          {/* Right Column — 2x2 Concise Pillars Grid (~7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#E8E4DF] p-6 rounded-md shadow-xs space-y-2.5 hover:border-[#CBD5E1] transition-all"
              >
                <div className="flex items-center justify-between font-mono-meta text-xs text-[#6B6B6B]">
                  <span className="text-[#0F766E] font-semibold">[{pillar.code}]</span>
                  <CheckCircle2 className="w-4 h-4 text-[#0F766E] stroke-[1.75]" />
                </div>

                <h3 className="font-serif-heading font-bold text-lg text-[#1A1A1A]">
                  {pillar.title}
                </h3>

                <p className="font-sans text-xs text-[#6B6B6B] leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>

        </div>

      </Container>
    </section>
  );
}

