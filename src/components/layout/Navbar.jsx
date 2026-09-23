import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Container from '../ui/Container';
import Button from '../ui/Button';
import { Menu, X, FileText, CalendarCheck } from 'lucide-react';

export default function Navbar({ onBookClick }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const mainNavLinks = [
    { label: 'Tests & Diagnostics', path: '/tests' },
    { label: 'Home Collection', path: '/home-collection' },
    { label: 'Centres', path: '/centres' },
    { label: 'Patient Care', path: '/patient-care' },
    { label: 'About', path: '/about' },
  ];

  const secondaryLinks = [
    { label: 'How It Works', path: '/how-it-works' },
    { label: 'Digital System', path: '/digital' },
  ];

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="sticky top-0 z-50 bg-[#FAFAF8]/95 backdrop-blur-md border-b border-[#E8E4DF] transition-colors">
      <Container>
        <div className="flex items-center justify-between h-20 sm:h-22">
          
          {/* Brand Identity: Elegant Editorial Serif Wordmark */}
          <Link
            to="/"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-3 group focus:outline-none shrink-0"
          >
            <div className="flex flex-col">
              <span className="font-serif-heading text-2xl sm:text-3xl font-bold tracking-tight text-[#1A1A1A] group-hover:text-[#0F766E] transition-colors leading-none">
                Krsnaa
              </span>
              <span className="font-sans text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.2em] text-[#6B6B6B] group-hover:text-[#1A1A1A] transition-colors mt-0.5">
                DIAGNOSTICS
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-7">
            {mainNavLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-sans font-medium transition-colors py-1 relative ${
                    active
                      ? 'text-[#0F766E] font-semibold after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1.5px] after:bg-[#0F766E]'
                      : 'text-[#6B6B6B] hover:text-[#0F766E] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#0F766E] hover:after:w-full after:transition-all'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              to="/reports"
              className="text-xs font-sans font-semibold text-[#0F766E] bg-[#F0FDFA] border border-[#CCFBF1] hover:bg-[#CCFBF1] px-3.5 py-2 rounded-md transition-colors flex items-center gap-1.5"
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

          {/* Mobile Toggle Button */}
          <button
            type="button"
            className="lg:hidden p-2 text-[#1A1A1A] hover:text-[#0F766E] focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 stroke-[1.75]" /> : <Menu className="w-6 h-6 stroke-[1.75]" />}
          </button>

        </div>
      </Container>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAFAF8] border-b border-[#E8E4DF] px-6 py-6 space-y-6 animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-2">
            <span className="font-mono-meta text-[10px] uppercase tracking-wider text-[#6B6B6B] block mb-1">
              Main Menu
            </span>
            {mainNavLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-base font-sans font-medium py-2 border-b border-[#E8E4DF]/60 transition-colors ${
                    active ? 'text-[#0F766E] font-semibold' : 'text-[#1A1A1A] hover:text-[#0F766E]'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            <span className="font-mono-meta text-[10px] uppercase tracking-wider text-[#6B6B6B] block pt-3 mb-1">
              More Services
            </span>
            {secondaryLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-sm font-sans font-medium py-1.5 border-b border-[#E8E4DF]/60 transition-colors ${
                    active ? 'text-[#0F766E] font-semibold' : 'text-[#6B6B6B] hover:text-[#1A1A1A]'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="pt-2 space-y-2">
            <Link
              to="/reports"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center text-xs font-sans font-semibold text-[#0F766E] bg-[#F0FDFA] border border-[#CCFBF1] py-2.5 rounded-md block"
            >
              Patient Portal (Reports Access)
            </Link>

            <Link
              to="/book"
              onClick={() => setMobileMenuOpen(false)}
              className="block"
            >
              <Button variant="primary" size="lg" className="w-full justify-center">
                BOOK A TEST
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
