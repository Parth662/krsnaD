import React from 'react';
import Container from '../ui/Container';
import Button from '../ui/Button';

export default function HeroSection({ onBookClick, onCentersClick, onExploreClick }) {
  return (
    <section className="relative bg-[#FAFAF8] pt-12 sm:pt-16 lg:pt-24 pb-16 sm:pb-24 overflow-hidden border-b border-[#E8E4DF]">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column — Editorial Headline & Actions (~6 cols) */}
          <div className="lg:col-span-6 space-y-7">
            
            {/* Small Eyebrow Label */}
            <div className="inline-flex items-center gap-2 font-mono-meta text-xs text-[#0F766E] uppercase tracking-[0.15em] font-semibold bg-[#F0FDFA] px-3 py-1 border border-[#CCFBF1]">
              <span>DIAGNOSTICS</span>
              <span>•</span>
              <span>PATIENT CARE</span>
              <span>•</span>
              <span>KOLHAPUR</span>
            </div>

            {/* Large Elegant Serif Headline */}
            <h1 className="font-serif-heading font-semibold text-5xl sm:text-6xl lg:text-7xl leading-[1.08] text-[#1A1A1A] tracking-tight">
              Clear answers.<br />
              <span className="italic font-normal text-[#0F766E]">Better care.</span>
            </h1>

            {/* Short Supporting Paragraph */}
            <p className="text-[#6B6B6B] text-base sm:text-lg font-sans leading-relaxed max-w-xl">
              Krsnaa provides accessible diagnostic testing, convenient home sample collection, reliable NABL reports, and patient-focused care across 150+ cities in India.
            </p>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button
                variant="primary"
                size="lg"
                onClick={onBookClick}
              >
                BOOK A TEST
              </Button>

              <Button
                variant="secondary"
                size="lg"
                onClick={() => {
                  if (onExploreClick) onExploreClick();
                  else {
                    document.getElementById('discover')?.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                EXPLORE TESTS
              </Button>
            </div>

            {/* Subtle Clinical Trust Stats Rail */}
            <div className="pt-6 border-t border-[#E8E4DF] grid grid-cols-3 gap-4 text-xs font-sans">
              <div>
                <span className="font-serif-heading font-bold text-lg sm:text-xl text-[#1A1A1A] block">1,800+</span>
                <span className="text-[#6B6B6B]">Diagnostic Touchpoints</span>
              </div>
              <div>
                <span className="font-serif-heading font-bold text-lg sm:text-xl text-[#1A1A1A] block">150+</span>
                <span className="text-[#6B6B6B]">Cities Across India</span>
              </div>
              <div>
                <span className="font-serif-heading font-bold text-lg sm:text-xl text-[#0F766E] block">Sub-2 Hr</span>
                <span className="text-[#6B6B6B]">STAT Emergency TAT</span>
              </div>
            </div>

          </div>

          {/* Right Column — Realistic Clinical Editorial Photo (~6 cols) */}
          <div className="lg:col-span-6">
            <div className="relative border border-[#E8E4DF] bg-white p-2 sm:p-3 shadow-xs rounded-md">
              <img
                src="/light_hero_clinical.jpg"
                alt="Compassionate healthcare clinician consulting patient in modern diagnostic clinic"
                className="w-full h-[360px] sm:h-[460px] lg:h-[500px] object-cover rounded-sm"
              />
              <div className="p-3.5 bg-[#F5F3F0] border-t border-[#E8E4DF] flex items-center justify-between text-xs font-sans text-[#6B6B6B] mt-2 rounded-xs">
                <span className="font-medium text-[#1A1A1A]">NABL & ISO 15189 Accredited Facilities</span>
                <span className="text-[#0F766E] font-semibold">100% Verified Pathologists</span>
              </div>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}



