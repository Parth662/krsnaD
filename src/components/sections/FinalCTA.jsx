import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../ui/Container';
import Button from '../ui/Button';
import { MapPin, PhoneCall, ShieldCheck } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="py-16 sm:py-24 bg-[#FAFAF8] text-[#1A1A1A] border-b border-[#E8E4DF] relative overflow-hidden">
      <Container className="relative z-10 text-center max-w-4xl mx-auto space-y-6 sm:space-y-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F0FDFA] border border-[#CCFBF1] text-[#0F766E] font-mono-meta text-[11px] sm:text-xs uppercase tracking-widest font-semibold flex-wrap justify-center">
          <span className="w-2 h-2 rounded-full bg-[#0F766E] animate-pulse"></span>
          <span>NATIONWIDE DIAGNOSTIC ACCESSIBILITY</span>
        </div>

        <h2 className="font-serif-heading text-3xl sm:text-6xl font-semibold text-[#1A1A1A] tracking-tight leading-tight">
          Start with the right test.
        </h2>

        <p className="text-[#6B6B6B] text-sm sm:text-xl font-sans max-w-2xl mx-auto leading-relaxed">
          Book pathology tests online or locate your nearest Krsnaa diagnostic center for high-precision imaging and sub-2 hour STAT reporting.
        </p>

        <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3">
          <Link to="/book" className="block sm:inline-block">
            <Button
              variant="primary"
              size="lg"
              showArrow
              className="w-full sm:w-auto justify-center"
            >
              Book a Test Now
            </Button>
          </Link>

          <Link to="/centres" className="block sm:inline-block">
            <Button
              variant="secondary"
              size="lg"
              icon={MapPin}
              className="w-full sm:w-auto justify-center"
            >
              Find a Centre Near You
            </Button>
          </Link>
        </div>

        <div className="pt-6 sm:pt-8 border-t border-[#E8E4DF] flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-xs font-mono-meta text-[#6B6B6B]">
          <span className="flex items-center gap-2">
            <PhoneCall className="w-4 h-4 text-[#0F766E] shrink-0" />
            <a href="tel:18002120000" className="hover:underline">24/7 STAT Helpline: 1800-212-0000</a>
          </span>
          <span className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#0F766E] shrink-0" />
            <span>NABL & ISO 15189 Certified</span>
          </span>
        </div>
      </Container>
    </section>
  );
}
