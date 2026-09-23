import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../ui/Container';
import Button from '../ui/Button';

export default function HeroSection({ onBookClick, onExploreClick }) {
  return (
    <section className="relative bg-[#FAFAF8] pt-8 sm:pt-16 lg:pt-24 pb-12 sm:pb-24 overflow-hidden border-b border-[#E8E4DF]">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center">
          
          {/* Left Column — Editorial Headline & Actions (~6 cols) */}
          <div className="lg:col-span-6 space-y-5 sm:space-y-7">
            
            {/* Small Eyebrow Label */}
            <div className="inline-flex items-center gap-2 font-mono-meta text-[11px] sm:text-xs text-[#0F766E] uppercase tracking-[0.15em] font-semibold bg-[#F0FDFA] px-3 py-1 border border-[#CCFBF1] flex-wrap">
              <span>DIAGNOSTICS</span>
              <span>•</span>
              <span>PATIENT CARE</span>
              <span>•</span>
              <span>KOLHAPUR</span>
            </div>

            {/* Large Elegant Serif Headline */}
            <h1 className="font-serif-heading font-semibold text-3xl sm:text-6xl lg:text-7xl leading-[1.08] text-[#1A1A1A] tracking-tight">
              Clear answers.<br />
              <span className="italic font-normal text-[#0F766E]">Better care.</span>
            </h1>

            {/* Short Supporting Paragraph */}
            <p className="text-[#6B6B6B] text-sm sm:text-lg font-sans leading-relaxed max-w-xl">
              Krsnaa provides accessible diagnostic testing, convenient home sample collection, reliable NABL reports, and patient-focused care across 150+ cities in India.
            </p>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <Link to="/book" className="block sm:inline-block">
                <Button
                  variant="primary"
                  size="lg"
                  className="w-full sm:w-auto justify-center"
                >
                  BOOK A TEST
                </Button>
              </Link>

              <Link to="/tests" className="block sm:inline-block">
                <Button
                  variant="secondary"
                  size="lg"
                  className="w-full sm:w-auto justify-center"
                >
                  EXPLORE CATALOGUE
                </Button>
              </Link>
            </div>

            {/* Subtle Clinical Trust Stats Rail */}
            <div className="pt-6 border-t border-[#E8E4DF] grid grid-cols-3 gap-2 sm:gap-4 text-xs font-sans">
              <div>
                <span className="font-serif-heading font-bold text-base sm:text-xl text-[#1A1A1A] block">1,800+</span>
                <span className="text-[#6B6B6B] text-[11px] sm:text-xs leading-tight block">Touchpoints</span>
              </div>
              <div>
                <span className="font-serif-heading font-bold text-base sm:text-xl text-[#1A1A1A] block">150+</span>
                <span className="text-[#6B6B6B] text-[11px] sm:text-xs leading-tight block">Cities Covered</span>
              </div>
              <div>
                <span className="font-serif-heading font-bold text-base sm:text-xl text-[#0F766E] block">Sub-2 Hr</span>
                <span className="text-[#6B6B6B] text-[11px] sm:text-xs leading-tight block">STAT TAT</span>
              </div>
            </div>

          </div>

          {/* Right Column — Clinical Editorial Photo (~6 cols) */}
          <div className="lg:col-span-6">
            <div className="relative border border-[#E8E4DF] bg-white p-2 sm:p-3 shadow-xs rounded-md">
              <img
                src="/light_hero_clinical.jpg"
                alt="Compassionate healthcare clinician consulting patient in modern diagnostic clinic"
                className="w-full h-[240px] sm:h-[420px] lg:h-[480px] object-cover rounded-sm"
              />
              <div className="p-3 bg-[#F5F3F0] border-t border-[#E8E4DF] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-1 sm:gap-2 text-[11px] sm:text-xs font-sans text-[#6B6B6B] mt-2 rounded-xs">
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
