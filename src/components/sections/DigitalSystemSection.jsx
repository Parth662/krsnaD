import React from 'react';
import Container from '../ui/Container';

export default function DigitalSystemSection() {
  const subsystems = [
    {
      code: 'SYS-01',
      title: 'Integrated LIS & PACS Pipeline',
      desc: 'Seamless diagnostic data connection linking laboratory analyzers and 3.0T MRI / 128 CT DICOM imaging directly to central reference servers.',
    },
    {
      code: 'SYS-02',
      title: 'Tele-Radiology Operations Engine',
      desc: 'Sub-specialist radiologists interpret emergency trauma CT scans and oncological MRIs with sub-2 hour STAT turnaround across 150+ cities.',
    },
    {
      code: 'SYS-03',
      title: 'Automated Sample Chain of Custody',
      desc: 'Source barcoding, cold-chain temperature telemetry, and zero manual transcription errors at every collection checkpoint.',
    },
    {
      code: 'SYS-04',
      title: 'EHR & Physician Portal Integration',
      desc: 'Direct digital report synchronization with hospital electronic health record systems and consulting physician dashboards.',
    },
  ];

  return (
    <section id="digital" className="py-14 sm:py-20 lg:py-24 bg-[#FAFAF8] border-b border-[#E8E4DF]">
      <Container>
        
        {/* Eyebrow */}
        <span className="font-mono-meta text-xs font-semibold text-[#0F766E] uppercase tracking-[0.15em] block mb-3">
          06 — DIGITAL SYSTEM
        </span>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-start mb-10 sm:mb-12">
          
          <div className="lg:col-span-6 space-y-4">
            <h2 className="font-serif-heading text-3xl sm:text-5xl font-semibold text-[#1A1A1A] tracking-tight leading-[1.12]">
              The connected platform behind simpler care.
            </h2>
          </div>

          <div className="lg:col-span-6 space-y-4">
            <p className="text-[#6B6B6B] text-sm sm:text-base font-sans leading-relaxed">
              Technology at Krsnaa is designed to serve healthcare—connecting clinicians, collection points, automated analyzers, and tele-radiologists into one quiet, reliable diagnostic network.
            </p>

            <div className="p-3 bg-white border border-[#E8E4DF] rounded-md font-sans text-xs text-[#6B6B6B] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-1.5">
              <span>Security Compliance: 256-Bit AES</span>
              <span className="text-[#0F766E] font-medium">ISO 15189 Certified</span>
            </div>
          </div>

        </div>

        {/* 2x2 Subsystems Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {subsystems.map((sys, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#E8E4DF] p-5 sm:p-7 rounded-md shadow-xs space-y-3 hover:border-[#CBD5E1] transition-all"
            >
              <div className="flex items-center justify-between font-mono-meta text-xs text-[#6B6B6B]">
                <span className="text-[#0F766E] font-semibold">[{sys.code}]</span>
                <span>System Component</span>
              </div>

              <h3 className="font-serif-heading font-bold text-lg sm:text-xl text-[#1A1A1A]">
                {sys.title}
              </h3>

              <p className="font-sans text-xs sm:text-sm text-[#6B6B6B] leading-relaxed">
                {sys.desc}
              </p>
            </div>
          ))}
        </div>

      </Container>
    </section>
  );
}
