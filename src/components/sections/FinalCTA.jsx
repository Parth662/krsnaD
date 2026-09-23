import React from 'react';
import Container from '../ui/Container';
import Button from '../ui/Button';
import { MapPin, PhoneCall, ShieldCheck } from 'lucide-react';

export default function FinalCTA({ onBookClick, onCentersClick }) {
  return (
    <section className="py-20 sm:py-28 bg-[#0B132B] text-white border-b border-slate-800 relative overflow-hidden">
      {/* Background Subtle Grid Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-10 pointer-events-none"></div>

      <Container className="relative z-10 text-center max-w-4xl mx-auto space-y-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0052CC]/20 border border-[#0052CC]/40 text-[#0052CC] font-mono text-xs uppercase tracking-widest">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>NATIONWIDE DIAGNOSTIC ACCESSIBILITY</span>
        </div>

        <h2 className="font-display text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
          Start with the right test.
        </h2>

        <p className="text-slate-300 text-base sm:text-xl font-normal max-w-2xl mx-auto leading-relaxed">
          Book pathology tests online or locate your nearest Krsnaa diagnostic center for high-precision imaging and sub-2 hour STAT reporting.
        </p>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          <Button
            variant="primary"
            size="lg"
            showArrow
            onClick={onBookClick}
          >
            Book a Test Now
          </Button>

          <Button
            variant="secondary"
            size="lg"
            icon={MapPin}
            onClick={onCentersClick}
          >
            Find a Centre Near You
          </Button>
        </div>

        <div className="pt-8 border-t border-slate-800/80 flex flex-wrap items-center justify-center gap-8 text-xs font-mono text-slate-400">
          <span className="flex items-center gap-2">
            <PhoneCall className="w-4 h-4 text-[#0052CC]" />
            <span>24/7 STAT Helpline: 1800-212-0000</span>
          </span>
          <span className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#0D9488]" />
            <span>NABL & ISO 15189 Certified Procedures</span>
          </span>
        </div>
      </Container>
    </section>
  );
}
