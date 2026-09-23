import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import PageHero from '../components/ui/PageHero';
import NetworkSection from '../components/sections/NetworkSection';

export default function CentresPage() {
  return (
    <div className="min-h-screen bg-[#FAFAF8] text-[#1A1A1A] font-sans antialiased selection:bg-[#0F766E]/10 selection:text-[#0F766E]">
      <Navbar />

      <main>
        <PageHero
          eyebrow="03 — NATIONWIDE NETWORK"
          title="Diagnostic & Tele-Radiology Hubs"
          highlight="1,800+ Locations Across 150+ Cities"
          description="Locate advanced imaging centers, 24/7 STAT emergency labs, and walk-in sample collection centers equipped with state-of-the-art medical equipment."
          stats={[
            { value: '1,800+', label: 'Touchpoints' },
            { value: '150+', label: 'Cities Covered' },
            { value: '24/7', label: 'STAT Hubs Available' },
            { value: '3.0T', label: 'High-Field MRI' },
          ]}
        />

        <NetworkSection />
      </main>

      <Footer />
    </div>
  );
}
