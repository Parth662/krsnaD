import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import PageHero from '../components/ui/PageHero';
import DigitalSystemSection from '../components/sections/DigitalSystemSection';
import ReportDemoSection from '../components/sections/ReportDemoSection';

export default function DigitalSystemPage() {
  return (
    <div className="min-h-screen bg-[#FAFAF8] text-[#1A1A1A] font-sans antialiased selection:bg-[#0F766E]/10 selection:text-[#0F766E]">
      <Navbar />

      <main>
        <PageHero
          eyebrow="07 — DIGITAL INFRASTRUCTURE"
          title="Digital Health Telemetry Platform"
          highlight="Enterprise LIMS, Tele-Radiology & AI Quality Control"
          description="Behind Krsnaa's diagnostic accuracy is a robust enterprise LIMS engine with DICOM tele-radiology stream, real-time sample temperature sensors, and automated barcode tracking."
          stats={[
            { value: '15 Min', label: 'Tele-Radiology Signoff' },
            { value: '100%', label: 'Cloud PACS & DICOM' },
            { value: 'Sub-Sec', label: 'Barcode LIMS Sync' },
            { value: '256-Bit', label: 'Encrypted Security' },
          ]}
        />

        <DigitalSystemSection />
        <ReportDemoSection />
      </main>

      <Footer />
    </div>
  );
}
