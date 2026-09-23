import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Container from '../ui/Container';
import Button from '../ui/Button';
import { Menu, X, FileText, CalendarCheck } from 'lucide-react';

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

  const mainNavLinks = [
    { label: 'Tests & Diagnostics', path: '/tests' },
    { label: 'Home Collection', path: '/home-collection' },
    { label: 'Centres', path: '/centres' },
    { label: 'Patient Care', path: '/patient-care' },
    { label: 'About', path: '/about' },
  ];

  const secondaryNavLinks = [
    { label: 'How It Works', path: '/how-it-works' },
    { label: 'Digital System', path: '/digital' },
    { label: 'Patient Portal & Reports', path: '/reports' },
    { label: 'Book a Test', path: '/book' },
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
            {mainNavLinks.map((link) => {
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
            className="lg:hidden min-w-[44px] min-h-[44px] flex items-center justify-center p-2 text-[#1A1A1A] hover:text-[#0F766E] focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6 stroke-[1.75]" /> : <Menu className="w-6 h-6 stroke-[1.75]" />}
          </button>

        </div>
      </Container>

      {/* Mobile Menu Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-x-0 top-[64px] sm:top-[80px] bottom-0 bg-[#FAFAF8] border-b border-[#E8E4DF] z-40 overflow-y-auto px-6 py-6 space-y-6 animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-1">
            <span className="font-mono-meta text-[10px] uppercase tracking-wider text-[#6B6B6B] block mb-2 font-semibold">
              01 — MAIN MENU
            </span>
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className={`text-base font-sans min-h-[44px] flex items-center border-b border-[#E8E4DF]/60 transition-colors ${
                isActive('/') ? 'text-[#0F766E] font-semibold' : 'text-[#1A1A1A] hover:text-[#0F766E]'
              }`}
            >
              Home Page
            </Link>
            {mainNavLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-base font-sans min-h-[44px] flex items-center border-b border-[#E8E4DF]/60 transition-colors ${
                    active ? 'text-[#0F766E] font-semibold' : 'text-[#1A1A1A] hover:text-[#0F766E]'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            <span className="font-mono-meta text-[10px] uppercase tracking-wider text-[#6B6B6B] block pt-4 mb-2 font-semibold">
              02 — MORE SERVICES & PORTAL
            </span>
            {secondaryNavLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-sm font-sans min-h-[44px] flex items-center border-b border-[#E8E4DF]/60 transition-colors ${
                    active ? 'text-[#0F766E] font-semibold' : 'text-[#6B6B6B] hover:text-[#1A1A1A]'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="pt-4 space-y-3 pb-8">
            <Link
              to="/reports"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center text-xs font-sans font-semibold text-[#0F766E] bg-[#F0FDFA] border border-[#CCFBF1] py-3 rounded-md block min-h-[44px] flex items-center justify-center gap-2"
            >
              <FileText className="w-4 h-4" />
              <span>Patient Portal (Reports Access)</span>
            </Link>

            <Link
              to="/book"
              onClick={() => setMobileMenuOpen(false)}
              className="block"
            >
              <Button variant="primary" size="lg" className="w-full justify-center">
                BOOK A DIAGNOSTIC TEST
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
