import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import PageHero from '../components/ui/PageHero';
import DiagnosticJourney from '../components/sections/DiagnosticJourney';
import ReportDemoSection from '../components/sections/ReportDemoSection';

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-[#FAFAF8] text-[#1A1A1A] font-sans antialiased selection:bg-[#0F766E]/10 selection:text-[#0F766E]">
      <Navbar />

      <main>
        <PageHero
          eyebrow="06 — WORKFLOW & TRANSPARENCY"
          title="The Krsnaa Patient Journey"
          highlight="End-to-End Precision & Cold-Chain Telemetry"
          description="Discover the clinical rigor behind every diagnostic test. From sample collection barcoding to instant encrypted digital delivery."
          stats={[
            { value: 'Step 1', label: 'Online / Phone Booking' },
            { value: 'Step 2', label: 'Barcoded Doorstep Collection' },
            { value: 'Step 3', label: 'Cold-Chain 2°C–8°C Transport' },
            { value: 'Step 4', label: 'Pathologist Signed PDF Report' },
          ]}
        />

        <DiagnosticJourney />
        <ReportDemoSection />
      </main>

      <Footer />
    </div>
  );
}
