import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../ui/Container';
import { PhoneCall, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#F5F3F0] text-[#6B6B6B] border-t border-[#E8E4DF] font-sans text-xs sm:text-sm">
      <Container className="py-12 sm:py-16 lg:py-20 space-y-10 sm:space-y-12">
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10">
          
          {/* Brand Info (2 cols on lg) */}
          <div className="sm:col-span-2 lg:col-span-2 space-y-4">
            <Link to="/" className="flex flex-col group w-fit min-h-[44px] justify-center">
              <span className="font-serif-heading text-2xl sm:text-3xl font-bold tracking-tight text-[#1A1A1A] group-hover:text-[#0F766E] transition-colors">
                Krsnaa
              </span>
              <span className="font-mono-meta text-[10px] uppercase tracking-[0.25em] text-[#0F766E] font-semibold mt-0.5">
                DIAGNOSTICS
              </span>
            </Link>

            <p className="text-[#6B6B6B] text-xs sm:text-sm leading-relaxed max-w-sm">
              India’s premier precision diagnostic healthcare network operating 1,800+ touchpoints across 150+ cities with NABL & ISO 15189 accreditation.
            </p>

            <div className="flex flex-wrap gap-2 pt-1 font-mono-meta text-[10px]">
              <span className="px-2.5 py-1 bg-[#FAFAF8] border border-[#E8E4DF] text-[#0F766E] font-semibold rounded-xs">
                NABL MC-2940 ACCREDITED
              </span>
              <span className="px-2.5 py-1 bg-[#FAFAF8] border border-[#E8E4DF] text-[#1A1A1A] rounded-xs">
                ISO 15189:2022
              </span>
            </div>
          </div>

          {/* Column 1: Diagnostic Services */}
          <div className="space-y-3 font-mono-meta text-xs">
            <span className="text-[#1A1A1A] uppercase tracking-wider block font-semibold">
              EXPLORE ROUTES
            </span>
            <ul className="space-y-2.5 text-[#6B6B6B] font-sans text-xs">
              <li><Link to="/tests" className="hover:text-[#0F766E] transition-colors py-1 inline-block">Tests & Diagnostics</Link></li>
              <li><Link to="/home-collection" className="hover:text-[#0F766E] transition-colors py-1 inline-block">Home Collection</Link></li>
              <li><Link to="/centres" className="hover:text-[#0F766E] transition-colors py-1 inline-block">Centres Network</Link></li>
              <li><Link to="/patient-care" className="hover:text-[#0F766E] transition-colors py-1 inline-block">Patient Care Hub</Link></li>
              <li><Link to="/how-it-works" className="hover:text-[#0F766E] transition-colors py-1 inline-block">How It Works</Link></li>
            </ul>
          </div>

          {/* Column 2: Patient Access */}
          <div className="space-y-3 font-mono-meta text-xs">
            <span className="text-[#1A1A1A] uppercase tracking-wider block font-semibold">
              PATIENT ACCESS
            </span>
            <ul className="space-y-2.5 text-[#6B6B6B] font-sans text-xs">
              <li><Link to="/reports" className="hover:text-[#0F766E] transition-colors py-1 inline-block">Patient Portal & Reports</Link></li>
              <li><Link to="/book" className="hover:text-[#0F766E] transition-colors py-1 inline-block">Book Diagnostic Test</Link></li>
              <li><Link to="/about" className="hover:text-[#0F766E] transition-colors py-1 inline-block">About Krsnaa</Link></li>
              <li><Link to="/digital" className="hover:text-[#0F766E] transition-colors py-1 inline-block">Digital Experience</Link></li>
            </ul>
          </div>

          {/* Column 3: 24/7 Helpline */}
          <div className="space-y-3 font-mono-meta text-xs">
            <span className="text-[#1A1A1A] uppercase tracking-wider block font-semibold">
              24/7 HELPLINE
            </span>
            <div className="space-y-2.5 text-[#6B6B6B]">
              <div className="flex items-center gap-2 text-[#0F766E]">
                <PhoneCall className="w-3.5 h-3.5 stroke-[1.5] shrink-0" />
                <a href="tel:18002120000" className="font-bold hover:underline">1800-212-0000 (Toll Free)</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 stroke-[1.5] shrink-0" />
                <a href="mailto:info@krsnaadiagnostics.com" className="hover:underline truncate">info@krsnaadiagnostics.com</a>
              </div>
              <div className="flex items-start gap-2 pt-1 text-[#6B6B6B] font-sans text-xs">
                <MapPin className="w-4 h-4 text-[#0F766E] shrink-0 mt-0.5 stroke-[1.5]" />
                <span>Krsnaa Central Hub, Deccan Gymkhana, Pune, MH 411004.</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Legal Bar */}
        <div className="pt-6 sm:pt-8 border-t border-[#E8E4DF] flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono-meta text-[#6B6B6B] gap-4 text-center sm:text-left">
          <div>
            © {new Date().getFullYear()} KRSNAA DIAGNOSTICS LTD. ALL RIGHTS RESERVED.
          </div>

          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-4 sm:gap-6">
            <Link to="/patient-care" className="hover:text-[#1A1A1A] transition-colors">PRIVACY & SAFETY</Link>
            <Link to="/about" className="hover:text-[#1A1A1A] transition-colors">ABOUT US</Link>
            <span className="text-[#0F766E] font-semibold">NABL ACCREDITED MC-2940</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
