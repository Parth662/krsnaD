import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Container from '../ui/Container';
import Button from '../ui/Button';
import { Menu, X, FileText, CalendarCheck, ArrowRight, PhoneCall } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    if (mobileMenuOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const desktopNavLinks = [
    { label: 'Tests & Diagnostics', path: '/tests' },
    { label: 'Home Collection', path: '/home-collection' },
    { label: 'Centres Network', path: '/centres' },
    { label: 'Patient Care Hub', path: '/patient-care' },
    { label: 'About Krsnaa', path: '/about' },
  ];

  // Mobile 2-Column Primary Navigation Links
  const mobileCol1 = [
    { label: 'Home', path: '/' },
    { label: 'Home Collection', path: '/home-collection' },
    { label: 'Patient Care', path: '/patient-care' },
    { label: 'About', path: '/about' },
    { label: 'How It Works', path: '/how-it-works' },
  ];

  const mobileCol2 = [
    { label: 'Tests & Diagnostics', path: '/tests' },
    { label: 'Centres', path: '/centres' },
    { label: 'Reports', path: '/reports' },
    { label: 'Digital Experience', path: '/digital' },
  ];

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="sticky top-0 z-50 bg-[#FAFAF8]/95 backdrop-blur-md border-b border-[#E8E4DF] transition-colors">
      <Container>
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Brand Identity: Editorial Serif Wordmark */}
          <Link
            to="/"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-3 group focus:outline-none shrink-0 min-h-[44px]"
          >
            <div className="flex flex-col justify-center">
              <span className="font-serif-heading text-xl sm:text-2xl font-bold tracking-tight text-[#1A1A1A] group-hover:text-[#0F766E] transition-colors leading-none">
                Krsnaa
              </span>
              <span className="font-sans text-[9px] sm:text-[10px] font-semibold uppercase tracking-[0.2em] text-[#6B6B6B] group-hover:text-[#1A1A1A] transition-colors mt-0.5">
                DIAGNOSTICS
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-7">
            {desktopNavLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-sans font-medium transition-colors py-2 relative min-h-[44px] flex items-center ${
                    active
                      ? 'text-[#0F766E] font-semibold after:absolute after:bottom-1 after:left-0 after:w-full after:h-[1.5px] after:bg-[#0F766E]'
                      : 'text-[#6B6B6B] hover:text-[#0F766E] after:absolute after:bottom-1 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#0F766E] hover:after:w-full after:transition-all'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              to="/reports"
              className="text-xs font-sans font-semibold text-[#0F766E] bg-[#F0FDFA] border border-[#CCFBF1] hover:bg-[#CCFBF1] px-3.5 py-2 rounded-md transition-colors flex items-center gap-1.5 min-h-[44px]"
            >
              <FileText className="w-3.5 h-3.5 stroke-[1.75]" />
              <span>Patient Portal</span>
            </Link>

            <Link to="/book">
              <Button variant="primary" size="md" icon={CalendarCheck}>
                BOOK A TEST
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Hamburger Toggle */}
          <button
            type="button"
            className="lg:hidden min-w-[44px] min-h-[44px] flex items-center justify-center p-2 text-[#1A1A1A] hover:text-[#0F766E] focus:outline-none cursor-pointer"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6 stroke-[1.75]" /> : <Menu className="w-6 h-6 stroke-[1.75]" />}
          </button>

        </div>
      </Container>

      {/* Full-Viewport Editorial Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[#FAFAF8] text-[#1A1A1A] flex flex-col justify-between p-4 sm:p-6 min-h-[100dvh] overflow-y-auto font-sans animate-in fade-in-50 duration-200">
          
          {/* Top Section: Header + Main Nav Grid + Action Area */}
          <div className="space-y-3 sm:space-y-4">
            
            {/* Header Bar inside Mobile Menu */}
            <div className="flex items-center justify-between pb-3 border-b border-[#E8E4DF] shrink-0">
              <Link
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className="flex flex-col justify-center min-h-[44px]"
              >
                <span className="font-serif-heading text-xl sm:text-2xl font-bold tracking-tight text-[#1A1A1A] leading-none">
                  Krsnaa
                </span>
                <span className="font-sans text-[9px] font-semibold uppercase tracking-[0.2em] text-[#0F766E] mt-0.5">
                  DIAGNOSTICS
                </span>
              </Link>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="min-w-[44px] min-h-[44px] flex items-center justify-center text-[#1A1A1A] hover:text-[#0F766E] p-2 focus:outline-none cursor-pointer"
                aria-label="Close Navigation Menu"
              >
                <X className="w-6 h-6 stroke-[1.75]" />
              </button>
            </div>

            {/* Main Navigation Section */}
            <div className="pt-1">
              <span className="font-mono-meta text-[10px] uppercase tracking-[0.15em] text-[#0F766E] block font-bold mb-1.5">
                01 — MAIN NAVIGATION
              </span>

              {/* 2-Column Compact Navigation Grid */}
              <div className="grid grid-cols-2 gap-x-3 sm:gap-x-6 gap-y-1">
                
                {/* Column 1 */}
                <div className="flex flex-col">
                  {mobileCol1.map((link) => {
                    const active = isActive(link.path);
                    return (
                      <Link
                        key={link.path}
                        to={link.path}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`py-1.5 text-sm min-[375px]:text-base sm:text-lg font-serif-heading font-semibold border-b border-[#E8E4DF]/40 transition-colors flex items-center min-h-[42px] ${
                          active ? 'text-[#0F766E] font-bold' : 'text-[#1A1A1A] hover:text-[#0F766E]'
                        }`}
                      >
                        <span className="truncate">{link.label}</span>
                      </Link>
                    );
                  })}
                </div>

                {/* Column 2 */}
                <div className="flex flex-col">
                  {mobileCol2.map((link) => {
                    const active = isActive(link.path);
                    return (
                      <Link
                        key={link.path}
                        to={link.path}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`py-1.5 text-sm min-[375px]:text-base sm:text-lg font-serif-heading font-semibold border-b border-[#E8E4DF]/40 transition-colors flex items-center min-h-[42px] ${
                          active ? 'text-[#0F766E] font-bold' : 'text-[#1A1A1A] hover:text-[#0F766E]'
                        }`}
                      >
                        <span className="truncate">{link.label}</span>
                      </Link>
                    );
                  })}
                </div>

              </div>
            </div>

            {/* Editorial Thin Divider */}
            <div className="border-t border-[#E8E4DF] pt-3">
              
              {/* Action Area — Three Full-Width Action Rows */}
              <div className="space-y-2">
                
                {/* Row 1: Primary Action — BOOK A TEST */}
                <Link
                  to="/book"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full bg-[#0F766E] text-white hover:bg-[#0D9488] px-4 py-3 rounded-md font-sans text-xs sm:text-sm font-semibold uppercase tracking-wider flex items-center justify-between transition-colors min-h-[44px]"
                >
                  <span>BOOK A TEST</span>
                  <ArrowRight className="w-4 h-4 stroke-[1.75]" />
                </Link>

                {/* Row 2: Patient Portal */}
                <Link
                  to="/reports"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full bg-[#F0FDFA] border border-[#CCFBF1] text-[#0F766E] hover:bg-[#CCFBF1] px-4 py-3 rounded-md font-sans text-xs sm:text-sm font-semibold uppercase tracking-wider flex items-center justify-between transition-colors min-h-[44px]"
                >
                  <span>PATIENT PORTAL</span>
                  <ArrowRight className="w-4 h-4 stroke-[1.75]" />
                </Link>

                {/* Row 3: Contact / Support */}
                <Link
                  to="/patient-care"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full bg-white border border-[#E8E4DF] text-[#1A1A1A] hover:bg-[#F5F3F0] px-4 py-3 rounded-md font-sans text-xs sm:text-sm font-semibold uppercase tracking-wider flex items-center justify-between transition-colors min-h-[44px]"
                >
                  <span>CONTACT / SUPPORT</span>
                  <ArrowRight className="w-4 h-4 stroke-[1.75]" />
                </Link>

              </div>
            </div>

          </div>

          {/* Bottom Utility Information Strip */}
          <div className="pt-3 border-t border-[#E8E4DF] flex items-center justify-between text-[10px] sm:text-[11px] font-mono-meta text-[#6B6B6B] shrink-0">
            <span>ISO 15189 / NABL MC-2940</span>
            <a href="tel:18002120000" className="text-[#0F766E] font-bold hover:underline flex items-center gap-1">
              <PhoneCall className="w-3 h-3 stroke-[1.5]" />
              <span>1800-212-0000</span>
            </a>
          </div>

        </div>
      )}
    </header>
  );
}
