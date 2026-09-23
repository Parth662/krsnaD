import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import HeroSection from '../components/sections/HeroSection';
import TestDiscoverySection from '../components/sections/TestDiscoverySection';
import HomeCollectionSection from '../components/sections/HomeCollectionSection';
import DiagnosticJourney from '../components/sections/DiagnosticJourney';
import WhatsAppSection from '../components/sections/WhatsAppSection';
import AiReceptionistSection from '../components/sections/AiReceptionistSection';
import ReportDemoSection from '../components/sections/ReportDemoSection';
import NetworkSection from '../components/sections/NetworkSection';
import DigitalSystemSection from '../components/sections/DigitalSystemSection';
import FinalCTA from '../components/sections/FinalCTA';
import Footer from '../components/layout/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#FAFAF8] text-[#1A1A1A] font-sans antialiased selection:bg-[#0F766E]/10 selection:text-[#0F766E]">
      <Navbar />

      <main>
        {/* HERO SECTION */}
        <HeroSection />

        {/* SECTION 01 — Test Discovery Overview */}
        <TestDiscoverySection />

        {/* SECTION 02 — Home Collection Highlight */}
        <HomeCollectionSection />

        {/* SECTION 03 — Patient Journey Overview */}
        <DiagnosticJourney />

        {/* SECTION 04 — WhatsApp & Patient Updates */}
        <WhatsAppSection />

        {/* SECTION 05 — AI Receptionist Support */}
        <AiReceptionistSection />

        {/* SECTION 06 — Digital Report Demo Teaser */}
        <ReportDemoSection />

        {/* SECTION 07 — Centres & Location Locator */}
        <NetworkSection />

        {/* SECTION 08 — Digital System Infrastructure */}
        <DigitalSystemSection />

        {/* SECTION 09 — Final Call To Action */}
        <FinalCTA />
      </main>

      <Footer />
    </div>
  );
}
